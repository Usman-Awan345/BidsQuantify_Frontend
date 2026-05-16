// frontend/src/pages/Contact.jsx
import { Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <section className="bg-dark text-white py-16 text-center"><h1 className="text-white">Contact Us</h1><p className="text-gray-300">We're here to help with your estimating needs</p></section>
      <section className="section"><div className="container-custom"><div className="grid lg:grid-cols-2 gap-12"><div className="space-y-6"><div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"><Phone className="text-gold" size={28} /><div><h3 className="font-bold">Call Us</h3><a href="tel:+18382058444" className="text-gray-600">+1 838-205-8444</a></div></div><div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"><Mail className="text-gold" size={28} /><div><h3 className="font-bold">Email</h3><a href="mailto:info.bidsquantify@gmail.com" className="text-gray-600">info.bidsquantify@gmail.com</a><br /><a href="mailto:josh@bidsquantify.com">josh@bidsquantify.com</a></div></div><div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"><MapPin className="text-gold" size={28} /><div><h3 className="font-bold">Service Area</h3><p className="text-gray-600">USA Nationwide | Remote Support</p></div></div></div><ContactForm /></div><div className="mt-12"><h3 className="text-center mb-4">Find Us</h3><div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center"><p className="text-gray-500">Google Map Integration - Serving all US locations</p></div></div></div></section>
    </>
  )
}

export default Contact