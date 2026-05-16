// frontend/src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../assets/logo.svg?react'

const servicesList = [
  { name: 'General Contractors', slug: 'general-contractors' },
  { name: 'Drywall Contractor', slug: 'drywall-contractor' },
  { name: 'Carpentry Contractor', slug: 'carpentry-contractor' },
  { name: 'MEP Contractor', slug: 'mep-contractor' },
  { name: 'Electrical Contractors', slug: 'electrical-contractors' },
  { name: 'Plumbing Contractors', slug: 'plumbing-contractors' },
  { name: 'HVAC Contractors', slug: 'hvac-contractors' },
  { name: 'Roofing Contractors', slug: 'roofing-contractors' },
  { name: 'Concrete Contractors', slug: 'concrete-contractors' },
  { name: 'Masonry Contractors', slug: 'masonry-contractors' },
  { name: 'Flooring Contractors', slug: 'flooring-contractors' },
  { name: 'Painting Contractors', slug: 'painting-contractors' },
  { name: '3D Rendering', slug: '3d-rendering' },
  { name: 'Blueprint', slug: 'blueprint' },
]

const locations = ['New York', 'California', 'Texas', 'Florida', 'Illinois', 'Remote']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [locationsDropdown, setLocationsDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <span className="text-dark font-bold text-xl">BQE</span>
            </div>
            <span className="font-bold text-xl text-dark hidden sm:inline">Bids Quantify</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>Home</NavLink>
            
            <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
              <button className="flex items-center space-x-1 font-medium text-dark hover:text-gold transition">
                <span>Services / Trades</span> <ChevronDown size={16} />
              </button>
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md py-2 mt-2 z-50 max-h-96 overflow-y-auto">
                  {servicesList.map(service => (
                    <Link key={service.slug} to={`/services/${service.slug}`} className="block px-4 py-2 hover:bg-gray-100 hover:text-gold transition">
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setLocationsDropdown(true)} onMouseLeave={() => setLocationsDropdown(false)}>
              <button className="flex items-center space-x-1 font-medium text-dark hover:text-gold transition">
                <span>Locations</span> <ChevronDown size={16} />
              </button>
              {locationsDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-md py-2 mt-2">
                  {locations.map(loc => (
                    <Link key={loc} to={`/services?location=${loc}`} className="block px-4 py-2 hover:bg-gray-100 hover:text-gold transition">{loc}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>About Us</NavLink>
            <NavLink to="/work-samples" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>Work Samples</NavLink>
            <NavLink to="/pricing" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>Fee</NavLink>
            <NavLink to="/sample-pdfs" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>Sample PDFs</NavLink>
            <NavLink to="/upload-plans" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>Upload Plans</NavLink>
            <NavLink to="/contact" className={({isActive}) => `font-medium ${isActive ? 'text-gold' : 'text-dark'} hover:text-gold transition`}>Contact Us</NavLink>
            <Link to="/contact" className="btn-primary py-2 px-5">Get Free Quote</Link>
          </div>

          {/* Mobile button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <NavLink to="/" className="block py-2 hover:text-gold">Home</NavLink>
            <div className="space-y-2">
              <p className="font-semibold text-dark">Services / Trades</p>
              <div className="grid grid-cols-2 gap-2 pl-4">
                {servicesList.slice(0, 12).map(service => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="text-sm hover:text-gold" onClick={() => setIsOpen(false)}>{service.name}</Link>
                ))}
              </div>
            </div>
            <NavLink to="/about" className="block py-2 hover:text-gold">About Us</NavLink>
            <NavLink to="/work-samples" className="block py-2 hover:text-gold">Work Samples</NavLink>
            <NavLink to="/pricing" className="block py-2 hover:text-gold">Fee</NavLink>
            <NavLink to="/sample-pdfs" className="block py-2 hover:text-gold">Sample PDFs</NavLink>
            <NavLink to="/upload-plans" className="block py-2 hover:text-gold">Upload Plans</NavLink>
            <NavLink to="/contact" className="block py-2 hover:text-gold">Contact Us</NavLink>
            <Link to="/contact" className="btn-primary block text-center">Get Free Quote</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar