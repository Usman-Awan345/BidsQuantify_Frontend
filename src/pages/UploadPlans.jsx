// frontend/src/pages/UploadPlans.jsx
import { useState } from 'react'
import toast from 'react-hot-toast'
import { uploadAPI } from '../services/api'

const UploadPlans = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', trade: '', message: '' })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return toast.error('Please upload your plans')
    setLoading(true)
    const data = new FormData()
    Object.keys(formData).forEach(k => data.append(k, formData[k]))
    data.append('plans', file)
    try {
      await uploadAPI.submitPlans(data)
      toast.success('Plans uploaded successfully! We will contact you within 2 hours.')
      setFormData({ name: '', email: '', phone: '', projectType: '', trade: '', message: '' })
      setFile(null)
    } catch (error) { toast.error(error.response?.data?.error || 'Upload failed. Please try again.') } 
    finally { setLoading(false) }
  }

  return (
    <>
      <section className="bg-dark text-white py-16 text-center"><h1 className="text-white">Upload Your Plans</h1><p className="text-gray-300">Get a free consultation and custom quote</p></section>
      <section className="section"><div className="container-custom max-w-3xl mx-auto"><form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-4"><div className="grid md:grid-cols-2 gap-4"><input type="text" name="name" placeholder="Full Name" className="p-3 border rounded-lg" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} required /><input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} required /><input type="tel" name="phone" placeholder="Phone" className="p-3 border rounded-lg" value={formData.phone} onChange={e=>setFormData({...formData, phone:e.target.value})} required /><input type="text" name="projectType" placeholder="Project Type (Residential/Commercial)" className="p-3 border rounded-lg" value={formData.projectType} onChange={e=>setFormData({...formData, projectType:e.target.value})} /><input type="text" name="trade" placeholder="Select Trade (e.g., Electrical, Plumbing)" className="p-3 border rounded-lg" value={formData.trade} onChange={e=>setFormData({...formData, trade:e.target.value})} /><input type="file" accept=".pdf,.jpg,.png" onChange={e=>setFile(e.target.files[0])} className="p-3 border rounded-lg" required /></div><textarea name="message" placeholder="Additional details about your project" rows="3" className="w-full p-3 border rounded-lg" value={formData.message} onChange={e=>setFormData({...formData, message:e.target.value})}></textarea><button type="submit" disabled={loading} className="btn-primary w-full">{loading ? 'Uploading...' : 'Submit Plans'}</button></form></div></section>
    </>
  )
}

export default UploadPlans
