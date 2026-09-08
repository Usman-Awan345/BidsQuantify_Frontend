// frontend/src/services/api.js
import axios from 'axios'

// Remove /api from here - it will be added in routes
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: API_URL,  // Just the base URL, no /api
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method.toUpperCase(), config.baseURL + config.url)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data)
    } else if (error.request) {
      console.error('Network Error:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/api/contact', data),  // Add /api prefix here
}

// Upload API
export const uploadAPI = {
  submitPlans: (formData, onProgress) => {
    return api.post('/api/upload-plans', formData, {  // Add /api prefix here
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(percent)
        }
      },
    })
  },
}

// Samples API
export const samplesAPI = {
  getAll: () => api.get('/api/samples'),  // Add /api prefix here
  getById: (id) => api.get(`/api/samples/${id}`),
  download: (id) => api.get(`/api/samples/${id}/download`, { responseType: 'blob' }),
}

export default api