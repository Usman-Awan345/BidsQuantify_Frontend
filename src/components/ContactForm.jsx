// frontend/src/components/ContactForm.jsx
import { useState } from 'react'
import toast from 'react-hot-toast'
import { contactAPI } from '../services/api'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await contactAPI.submit(formData)
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
      <div className="mb-4"><input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-gold focus:border-gold" required /></div>
      <div className="mb-4"><input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required /></div>
      <div className="mb-4"><input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg" required /></div>
      <div className="mb-4"><textarea name="message" placeholder="Project Details or Message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg" required></textarea></div>
      <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? 'Sending...' : 'Send Message'}</button>
    </form>
  )
}

export default ContactForm
