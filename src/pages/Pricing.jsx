// frontend/src/pages/Pricing.jsx
import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

const Pricing = () => {
  return (
    <>
      <section className="bg-dark text-white py-16 text-center"><h1 className="text-white">Our Fee Structure</h1><p className="text-gray-300">Transparent, competitive pricing based on project scope</p></section>
      <section className="section">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10"><h2 className="mb-4">How to get started?</h2><p className="text-gray-600 mb-6">Our fee depends on scope of work, project size, time duration, building systems, and overall construction budget. We provide a fixed-price proposal before starting any work.</p><div className="space-y-4"><div className="flex items-start space-x-3"><div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold">1</div><div>Send plans via our upload form or email</div></div><div className="flex items-start space-x-3"><div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold">2</div><div>We review scope and send proposal with exact fee & ETA</div></div><div className="flex items-start space-x-3"><div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold">3</div><div>Client approves and work starts immediately</div></div><div className="flex items-start space-x-3"><div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold">4</div><div>Final estimate delivered in Excel/PDF with markups</div></div></div></div>
          <div className="bg-gold/10 rounded-xl p-8 text-center border-2 border-gold"><h3 className="mb-2">Get Your Custom Quote Today</h3><p className="mb-4">Call us or email your plans for a free initial consultation</p><div className="flex justify-center space-x-6"><a href="tel:+18382058444" className="flex items-center space-x-2"><Phone /> <span>+1 838-205-8444</span></a><a href="mailto:info.bidsquantify@gmail.com" className="flex items-center space-x-2"><Mail /> <span>info.bidsquantify@gmail.com</span></a></div><Link to="/upload-plans" className="btn-primary inline-block mt-6">Upload Your Plans</Link></div>
        </div>
      </section>
    </>
  )
}

export default Pricing