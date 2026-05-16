// frontend/src/components/TopBar.jsx
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="bg-dark text-white py-2 text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="tel:+18382058444" className="flex items-center space-x-2 hover:text-gold transition">
            <Phone size={14} /> <span>+1 838-205-8444</span>
          </a>
          <a href="mailto:info.bidsquantify@gmail.com" className="flex items-center space-x-2 hover:text-gold transition">
            <Mail size={14} /> <span>info.bidsquantify@gmail.com</span>
          </a>
          <a href="mailto:josh@bidsquantify.com" className="flex items-center space-x-2 hover:text-gold transition">
            <Mail size={14} /> <span>josh@bidsquantify.com</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin size={14} /> <span>USA | Remote Services</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/share/18MZ25K6cR/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">
            <Facebook size={14} />
          </a>
          <a href="https://www.instagram.com/bidsquantifyestimarion" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar