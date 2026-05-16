// frontend/src/pages/ServiceDetail.jsx
import { useParams, Link } from 'react-router-dom'
import { CheckCircle, FileText, Clock, DollarSign } from 'lucide-react'

const serviceData = {
  'general-contractors': { title: 'General Contractors', desc: 'Complete bid packages for GCs including all trades, site work, and general conditions.' },
  'electrical-contractors': { title: 'Electrical Contractors', desc: 'Detailed electrical takeoffs, panel schedules, and conduit routing estimates.' },
  'plumbing-contractors': { title: 'Plumbing Contractors', desc: 'Pipe takeoffs, fixture counts, and waste line calculations.' },
  '3d-rendering': { title: '3D Rendering', desc: 'Photorealistic 3D renderings and visualization for proposals and marketing.' },
}
const defaultService = { title: 'Construction Estimating', desc: 'Professional quantity takeoffs and cost estimates for your specific trade.' }

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = serviceData[slug] || defaultService
  return (
    <>
      <section className="bg-dark text-white py-20"><div className="container-custom text-center"><h1 className="text-white">{service.title}</h1><p className="text-gray-300 mt-2">{service.desc}</p></div></section>
      <section className="section"><div className="container-custom max-w-4xl mx-auto">
        <h2 className="mb-4">What's Included</h2>
        <ul className="grid md:grid-cols-2 gap-3 mb-12">{['Material quantity takeoffs', 'Labor cost analysis', 'Equipment and tool costs', 'Overhead & profit markup', 'Excel & PDF reports', 'Site condition considerations'].map(i => <li key={i} className="flex items-center space-x-2"><CheckCircle className="text-gold" /><span>{i}</span></li>)}</ul>
        <div className="bg-gray-bg p-8 rounded-xl text-center"><h3>Ready to get accurate estimates for your {service.title} project?</h3><Link to="/upload-plans" className="btn-primary inline-block mt-4">Upload Your Plans</Link></div>
      </div></section>
    </>
  )
}

export default ServiceDetail