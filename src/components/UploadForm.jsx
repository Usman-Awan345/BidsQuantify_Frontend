// frontend/src/components/UploadForm.jsx
import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'
import { uploadAPI } from '../services/api'

const UploadForm = ({
  onSubmit,
  submitEndpoint,
  redirectOnSuccess = false,  submitEndpoint = `${import.meta.env.VITE_API_URL}/upload-plans`,
  submitEndpoint = `${import.meta.env.VITE_API_URL}/upload-plans`,

  redirectUrl = '/contact',
  showTradeSelect = true,
  showProjectType = true,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    trade: '',
    message: '',
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const trades = [
    'General Contractor', 'Electrical', 'Plumbing', 'HVAC', 'Roofing',
    'Masonry', 'Concrete', 'Carpentry', 'Drywall', 'Painting',
    'Flooring', 'Landscaping', 'Steel Fabrication', 'Demolition',
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.type.startsWith('image/'))) {
      if (droppedFile.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB')
        return
      }
      setFile(droppedFile)
    } else {
      toast.error('Please upload a PDF or image file')
    }
  }, [])

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB')
        return
      }
      setFile(selectedFile)
    }
  }

  const removeFile = () => {
    setFile(null)
    setUploadProgress(0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!file) {
      toast.error('Please upload your plans')
      return
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields')
      return
    }

    setLoading(true)
    const data = new FormData()
    Object.keys(formData).forEach(key => {
      if (formData[key]) data.append(key, formData[key])
    })
    data.append('plans', file)

    try {
      const response = submitEndpoint
        ? await uploadAPI.submitPlansTo(submitEndpoint, data, setUploadProgress)
        : await uploadAPI.submitPlans(data, setUploadProgress)
      
      toast.success('Plans uploaded successfully! We will contact you within 2 hours.')
      
      if (onSubmit) {
        onSubmit(response.data)
      }
      
      if (redirectOnSuccess) {
        setTimeout(() => {
          window.location.href = redirectUrl
        }, 2000)
      } else {
        setFormData({ name: '', email: '', phone: '', projectType: '', trade: '', message: '' })
        setFile(null)
        setUploadProgress(0)
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast.error(error.response?.data?.error || 'Upload failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-6 md:p-8 space-y-5">
      <h3 className="text-2xl font-bold text-dark mb-4">Upload Your Plans</h3>
      
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {showProjectType && (
          <select
            name="projectType"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Select Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Civil">Civil / Infrastructure</option>
          </select>
        )}
      </div>
      
      {showTradeSelect && (
        <select
          name="trade"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white"
          value={formData.trade}
          onChange={handleChange}
        >
          <option value="">Select Trade (Optional)</option>
          {trades.map(trade => (
            <option key={trade} value={trade}>{trade}</option>
          ))}
        </select>
      )}
      
      <textarea
        name="message"
        placeholder="Project details, scope of work, or special requirements..."
        rows="4"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none"
        value={formData.message}
        onChange={handleChange}
      />
      
      {/* File Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
          dragActive ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input').click()}
      >
        <input
          id="file-input"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {!file ? (
          <div>
            <Upload size={40} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600">Drag & drop your plans here or click to browse</p>
            <p className="text-xs text-gray-400 mt-1">Supports PDF, JPG, PNG (Max 10MB)</p>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <File size={24} className="text-gold" />
              <div className="text-left">
                <p className="font-medium text-sm">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 hover:bg-gray-200 rounded-full transition"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
        )}
      </div>
      
      {/* Upload Progress */}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: `${uploadProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center">{uploadProgress}% uploaded</p>
        </div>
      )}
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <LoadingSpinner size="sm" color="dark" />
            <span>Uploading...</span>
          </>
        ) : (
          <>
            <Upload size={18} />
            <span>Submit Plans for Quote</span>
          </>
        )}
      </button>
      
      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  )
}

export default UploadForm
