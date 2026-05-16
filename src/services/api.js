// frontend/src/services/api.js
import axios from 'axios'

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/+$/, '')

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
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
      // Server responded with error status
      console.error('API Error:', error.response.data)
    } else if (error.request) {
      // Request was made but no response
      console.error('Network Error:', error.request)
    } else {
      // Something else happened
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
}

// Upload API
export const uploadAPI = {
  submitPlans: (formData, onProgress) => {
    return api.post('/upload-plans', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(percent)
        }
      },
    })
  },
  submitPlansTo: (url, formData, onProgress) => {
    return axios.post(url, formData, {
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
  getAll: () => api.get('/samples'),
  getById: (id) => api.get(`/samples/${id}`),
  download: (id) => api.get(`/samples/${id}/download`, { responseType: 'blob' }),
}

// Quote API
export const quoteAPI = {
  requestQuote: (data) => api.post('/request-quote', data),
}

export default api
