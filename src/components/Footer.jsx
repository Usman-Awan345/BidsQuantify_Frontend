// frontend/src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-dark font-bold">BQE</span>
              </div>
              <span className="text-white font-bold text-xl">Bids Quantify</span>
            </div>
            <p className="text-sm leading-relaxed">Professional construction estimating services with accurate material takeoffs, bid support, and fast turnaround for residential and commercial projects.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/share/18MZ25K6cR/" target="_blank" className="hover:text-gold transition"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/bidsquantifyestimarion" target="_blank" className="hover:text-gold transition"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link to="/work-samples" className="hover:text-gold transition">Work Samples</Link></li>
              <li><Link to="/pricing" className="hover:text-gold transition">Pricing</Link></li>
              <li><Link to="/sample-pdfs" className="hover:text-gold transition">Sample PDFs</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/residential-estimating" className="hover:text-gold transition">Residential Estimating</Link></li>
              <li><Link to="/services/commercial-estimating" className="hover:text-gold transition">Commercial Estimating</Link></li>
              <li><Link to="/services/mep-estimating" className="hover:text-gold transition">MEP Estimating</Link></li>
              <li><Link to="/services/structural-drawings" className="hover:text-gold transition">Structural Drawings</Link></li>
              <li><Link to="/services/3d-rendering" className="hover:text-gold transition">3D Rendering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2"><Phone size={14} /><a href="tel:+18382058444" className="hover:text-gold">+1 838-205-8444</a></li>
              <li className="flex items-center space-x-2"><Mail size={14} /><a href="mailto:info.bidsquantify@gmail.com" className="hover:text-gold">info.bidsquantify@gmail.com</a></li>
              <li className="flex items-center space-x-2"><Mail size={14} /><a href="mailto:josh@bidsquantify.com" className="hover:text-gold">josh@bidsquantify.com</a></li>
              <li className="flex items-center space-x-2"><MapPin size={14} /><span>USA Nationwide Service</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bids Quantify Estimation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer