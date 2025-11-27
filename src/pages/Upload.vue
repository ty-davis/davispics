<script setup lang="ts">
import { ref } from 'vue'

const selectedFiles = ref<File[]>([])
const previews = ref<string[]>([])
const uploading = ref(false)
const uploadProgress = ref(0)
const message = ref('')
const messageType = ref<'success' | 'error' | ''>('')
const maxDimension = ref(800)
const folder = ref('folder1')
const uploadedUrls = ref<string[]>([])

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files

  if (!files) return

  const validFiles: File[] = []
  const fileArray = Array.from(files)

  // Filter valid files first
  fileArray.forEach(file => {
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      validFiles.push(file)
    }
  })

  selectedFiles.value = validFiles
  previews.value = [] // Clear existing previews
  uploadedUrls.value = [] // Clear previous upload URLs

  // Create previews asynchronously
  validFiles.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        previews.value.push(e.target.result as string)
      }
    }
    reader.readAsDataURL(file)
  })

  message.value = ''
}

const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1)
  previews.value.splice(index, 1)
}

const copyUrl = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url)
    message.value = 'URL copied to clipboard!'
    messageType.value = 'success'
    // Clear message after 2 seconds
    setTimeout(() => {
      if (message.value === 'URL copied to clipboard!') {
        message.value = ''
      }
    }, 2000)
  } catch (error) {
    message.value = 'Failed to copy URL'
    messageType.value = 'error'
  }
}

const uploadImages = async () => {
  if (selectedFiles.value.length === 0) {
    message.value = 'Please select at least one image'
    messageType.value = 'error'
    return
  }

  // Prompt for password
  const password = prompt('Please enter the upload password:')
  if (!password) {
    message.value = 'Password is required for upload'
    messageType.value = 'error'
    return
  }

  uploading.value = true
  uploadProgress.value = 0
  message.value = ''
  uploadedUrls.value = []

  const formData = new FormData()
  selectedFiles.value.forEach((file) => {
    formData.append('images', file)
  })
  formData.append('maxDimension', maxDimension.value.toString())
  formData.append('folder', folder.value)
  formData.append('password', password)

  try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      const result = await response.json()
      uploadedUrls.value = result.urls || []
      message.value = 'Images uploaded successfully!'
      messageType.value = 'success'
      selectedFiles.value = []
      previews.value = []
    } else {
      const error = await response.json()
      message.value = error.message || 'Upload failed'
      messageType.value = 'error'
    }
  } catch (error) {
    message.value = 'Network error occurred'
    messageType.value = 'error'
  } finally {
    uploading.value = false
  }
}
</script>

<template>
  <div class="upload-container">
    <h1 class="text-2xl">Upload Images</h1>

    <div class="upload-area">
      <input
        type="file"
        id="file-input"
        accept="image/png,image/jpeg"
        multiple
        @change="handleFileSelect"
        class="file-input"
      />
      <label for="file-input" class="file-label">
        <span>Choose PNG or JPEG images</span>
      </label>
    </div>

    <div class="form-row">
      <label for="max-dimension">Max Dimension (px):</label>
      <input
        type="number"
        id="max-dimension"
        v-model.number="maxDimension"
        min="100"
        max="4000"
        class="dimension-input"
      />
    </div>

    <div class="form-row">
      <label for="folder-input">Folder:</label>
      <input
        id="folder-input"
        v-model="folder"
        class="folder-input"
      />
    </div>

    <div v-if="previews.length > 0" class="preview-grid">
      <div v-for="(preview, index) in previews" :key="index" class="preview-item">
        <img :src="preview" :alt="`Preview ${index + 1}`" />
        <button @click="removeFile(index)" class="remove-btn">×</button>
        <p class="file-name">{{ selectedFiles[index].name }}</p>
      </div>
    </div>

    <button
      v-if="selectedFiles.length > 0"
      @click="uploadImages"
      :disabled="uploading"
      class="upload-btn"
    >
      {{ uploading ? 'Uploading...' : `Upload ${selectedFiles.length} image(s)` }}
    </button>

    <div v-if="uploadedUrls.length > 0" class="uploaded-urls">
      <h3>Uploaded Images:</h3>
      <div v-for="(url, index) in uploadedUrls" :key="index" class="url-item">
        <img :src="url" width="100"/>
        <input type="text" :value="url" readonly class="url-input" />
        <button @click="copyUrl(url)" class="copy-btn">Copy</button>
      </div>
    </div>

    <div v-if="message" :class="['message', messageType]">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.upload-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

.upload-area {
  margin-bottom: 2rem;
}

.file-input {
  display: none;
}

.file-label {
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.file-label:hover {
  background: #0056b3;
}

.form-row {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-row label {
  font-weight: 500;
  color: #333;
}

.folder-input {
  width: 300px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #f8f8f8;
}

.dimension-input {
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #f8f8f8;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.preview-item {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
}

.preview-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.remove-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 30px;
  height: 30px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  background: rgba(255, 0, 0, 1);
}

.file-name {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.upload-btn {
  padding: 1rem 2rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.upload-btn:hover:not(:disabled) {
  background: #218838;
}

.upload-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.uploaded-urls {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.uploaded-urls h3 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.25rem;
}

.url-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  align-items: center;
}

.url-item:last-child {
  margin-bottom: 0;
}

.url-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: white;
  font-family: monospace;
}

.copy-btn {
  padding: 0.5rem 1rem;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.3s;
  white-space: nowrap;
}

.copy-btn:hover {
  background: #5a6268;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
}

.message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
