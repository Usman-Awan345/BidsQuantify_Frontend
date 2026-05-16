// frontend/src/pages/Services.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const allServices = [
  'General Contractors', 'Drywall Contractor', 'Carpentry Contractor', 'MEP Contractor', 'Excavation Contractor',
  'Electrical Contractors', 'Plumbing Contractors', 'Concrete Contractors', 'Masonry Contractors', 'Roofing Contractors',
  'HVAC Contractors', 'Flooring Contractors', 'Painting Contractors', '3D Rendering', 'Blueprint', 'Structural Drawings'
]

const Services = () => {
  const [search, setSearch] = useState('')
  const filtered = allServices.filter(s => s.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <section className="bg-dark text-white py-16 text-center"><h1 className="text-white">Our Services & Trades</h1><p className="text-gray-300">Comprehensive estimating solutions for every construction trade</p></section>
      <section className="section">
        <div className="container-custom">
          <div className="max-w-md mx-auto mb-12 relative"><Search className="absolute left-3 top-3 text-gray-400" size={20} /><input type="text" placeholder="Search services..." className="w-full pl-10 pr-4 py-3 border rounded-lg" value={search} onChange={e => setSearch(e.target.value)} /></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(service => {
              const slug = service.toLowerCase().replace(/ /g, '-')
              return <Link key={service} to={`/services/${slug}`} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition border-l-4 border-gold"><h3 className="font-bold">{service}</h3><p className="text-gray-500 text-sm">Professional estimates & takeoffs</p></Link>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services