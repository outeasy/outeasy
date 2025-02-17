<template>
  <div class="container">
    <el-card>
      <template #header>
        <div class="text-center">
          <span class="text-xl font-medium">图片压缩</span>
        </div>
      </template>

      <!-- 图片上传区域 -->
      <el-upload
          class="upload-area"
          drag
          multiple
          :auto-upload="false"
          :show-file-list="true"
          accept="image/*"
          :on-change="handleFileSelect"
          :on-remove="handleFileRemove"
          :file-list="fileList"
      >
        <template #trigger>
          <div v-if="!isLoading" class="text-center">
            <el-icon class="el-icon--upload mx-auto block"><upload-filled /></el-icon>
            <div class="el-upload__text">
              拖拽图片到此处或 <em>点击上传</em>
            </div>
            <div class="text-sm text-gray-400 mt-2">支持 JPG、PNG、WebP 格式</div>
          </div>
        </template>
      </el-upload>

      <!-- 压缩设置 -->
      <div v-if="fileList.length > 0" class="compression-settings">
        <el-form>
          <el-form-item label="压缩质量" style="min-width: 400px;">
            <el-row :gutter="20" style="width: 100%;">
              <el-col :span="18">
                <el-slider
                    v-model="quality"
                    :min="1"
                    :max="100"
                    :format-tooltip="value => `${value}%`"
                    @input="handleQualityChange"
                />
              </el-col>
              <el-col :span="5" :offset="1" class="text-right">
                <span class="text-gray-600">{{ quality }}%</span>
              </el-col>
            </el-row>
          </el-form-item>

          <el-button
              type="primary"
              @click="compressImages"
              :loading="isLoading"
              :disabled="fileList.length === 0"
          >
            开始压缩
          </el-button>
        </el-form>
      </div>

      <!-- 压缩结果列表 -->
      <div v-if="compressedFiles.length > 0" class="compression-results mt-6">
        <el-table :data="compressedFiles" style="width: 100%">
          <el-table-column label="文件名" prop="name" />
          <el-table-column label="原始大小">
            <template #default="{ row }">
              {{ formatFileSize(row.originalSize) }}
            </template>
          </el-table-column>
          <el-table-column label="压缩后大小">
            <template #default="{ row }">
              {{ formatFileSize(row.compressedSize) }}
            </template>
          </el-table-column>
          <el-table-column label="压缩率">
            <template #default="{ row }">
              {{ calculateCompressionRate(row) }}%
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="{ row }">
              <el-button-group>
                <el-button type="primary" link @click="downloadFile(row)">
                  下载
                </el-button>
                <el-button type="primary" link @click="previewFile(row)">
                  预览
                </el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>

        <div class="mt-4 text-right">
          <el-button type="primary" @click="downloadAll" :disabled="compressedFiles.length === 0">
            下载全部
          </el-button>
        </div>
      </div>

      <!-- 预览对话框 -->
      <el-dialog
          v-model="previewDialogVisible"
          title="图片预览"
          width="80%"
          destroy-on-close
      >
        <div class="preview-container">
          <div class="preview-item">
            <h3 class="text-center mb-2">原图</h3>
            <el-image
                :src="previewOriginal"
                fit="contain"
                class="preview-image"
            />
          </div>
          <div class="preview-item">
            <h3 class="text-center mb-2">压缩后</h3>
            <el-image
                :src="previewCompressed"
                fit="contain"
                class="preview-image"
            />
          </div>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import imageCompression from 'browser-image-compression';

// 状态变量
const fileList = ref([])
const compressedFiles = ref([])
const quality = ref(80)
const isLoading = ref(false)
const previewDialogVisible = ref(false)
const previewOriginal = ref('')
const previewCompressed = ref('')

// 文件大小限制（10MB）
const MAX_FILE_SIZE = 10 * 1024 * 1024
// 支持的图片格式
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp']

// 处理文件选择
const handleFileSelect = (uploadFile) => {
  const file = uploadFile.raw
  if (file && validateFile(file)) {
    fileList.value.push(uploadFile)
  }
}

// 处理文件删除
const handleFileRemove = (uploadFile) => {
  // 从fileList中删除文件
  const index = fileList.value.findIndex(file => file.uid === uploadFile.uid)
  if (index > -1) {
    fileList.value.splice(index, 1)
  }

  // 从compressedFiles中删除对应的压缩文件
  const compressedIndex = compressedFiles.value.findIndex(file => file.name === uploadFile.name)
  if (compressedIndex > -1) {
    compressedFiles.value.splice(compressedIndex, 1)
  }
}

// 验证文件
const validateFile = (file) => {
  if (!SUPPORTED_FORMATS.includes(file.type)) {
    ElMessage.error('请上传 JPG、PNG 或 WebP 格式的图片')
    return false
  }
  if (file.size > MAX_FILE_SIZE) {
    ElMessage.error('图片大小不能超过 10MB')
    return false
  }
  return true
}

// 处理质量变化
const handleQualityChange = () => {
  // 仅更新质量值，不执行压缩
  if (fileList.value.length === 0) return;
}

// 压缩图片
const compressImages = async () => {
  if (fileList.value.length === 0) return
  
  isLoading.value = true
  try {
    for (const file of fileList.value) {
      const result = await compressImage(file.raw)
      compressedFiles.value.push({
        name: file.name,
        originalSize: file.raw.size,
        compressedSize: result.size,
        originalUrl: URL.createObjectURL(file.raw),
        compressedUrl: URL.createObjectURL(result)
      })
    }
  } catch (error) {
    ElMessage.error('压缩过程中发生错误')
  } finally {
    isLoading.value = false
  }
}

// 压缩单个图片
const compressImage = async (file) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 2048,
    useWebWorker: true,
    maxIteration: 10,
    quality: quality.value / 100,
  }

  try {
    const compressedFile = await imageCompression(file, options)
    return compressedFile
  } catch (error) {
    ElMessage.error('图片压缩失败')
    throw error
  }
}

// 使用完后释放 URL
compressedFiles.value.forEach(file => {
  URL.revokeObjectURL(file.compressedUrl)
  URL.revokeObjectURL(file.originalUrl)
})

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1)
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 计算压缩率
const calculateCompressionRate = (file) => {
  const reduction = file.originalSize - file.compressedSize
  return Math.round((reduction / file.originalSize) * 100)
}

// 预览文件
const previewFile = (file) => {
  previewOriginal.value = file.originalUrl
  previewCompressed.value = file.compressedUrl
  previewDialogVisible.value = true
}

// 下载单个文件
const downloadFile = (file) => {
  const link = document.createElement('a')
  link.href = file.compressedUrl
  link.download = `compressed_${file.name}`
  link.click()
}

// 下载所有文件
const downloadAll = () => {
  compressedFiles.value.forEach(file => {
    downloadFile(file)
  })
}
</script>

<style scoped>
.compression-settings {
  margin-top: 20px;
}

.preview-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.preview-item {
  flex: 1;
}

.preview-image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.el-upload-list {
  margin-top: 20px;
}

.compression-results {
  margin-top: 20px;
}
</style>