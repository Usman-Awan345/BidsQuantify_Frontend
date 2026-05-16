// frontend/src/utils/validators.js

export const validateEmail = (email) => {
  const re = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  return re.test(phone)
}

export const validateName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 100
}

export const validateMessage = (message) => {
  return message && message.trim().length >= 10 && message.trim().length <= 5000
}

export const validateFile = (file, maxSizeMB = 10, allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']) => {
  const errors = []
  
  if (!file) {
    errors.push('File is required')
    return errors
  }
  
  if (!allowedTypes.includes(file.type)) {
    errors.push(`File type must be one of: ${allowedTypes.join(', ')}`)
  }
  
  if (file.size > maxSizeMB * 1024 * 1024) {
    errors.push(`File size must be less than ${maxSizeMB}MB`)
  }
  
  return errors
}

export const validateContactForm = (data) => {
  const errors = {}
  
  if (!data.name || !validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters'
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email address is required'
  }
  
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Valid phone number is required'
  }
  
  if (!data.message || !validateMessage(data.message)) {
    errors.message = 'Message must be at least 10 characters'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export const validateUploadForm = (data, file) => {
  const errors = {}
  
  if (!data.name || !validateName(data.name)) {
    errors.name = 'Name must be at least 2 characters'
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email address is required'
  }
  
  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = 'Valid phone number is required'
  }
  
  const fileErrors = validateFile(file)
  if (fileErrors.length > 0) {
    errors.file = fileErrors[0]
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export default {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
  validateFile,
  validateContactForm,
  validateUploadForm,
  formatFileSize,
  truncateText,
}