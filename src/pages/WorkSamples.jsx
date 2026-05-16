// frontend/src/pages/WorkSamples.jsx
import { FileText, Download } from 'lucide-react'

const samples = ['Residential 2-Story Home', 'Commercial Office Building', 'Electrical Panel Upgrade', 'Plumbing Rough-In', 'HVAC Ductwork', 'Masonry Block Wall', 'Roofing Shingle', 'Drywall Takeoff']

const WorkSamples = () => {
  return (
    <>
      <section className="bg-dark text-white py-16 text-center"><h1 className="text-white">Work Samples</h1><p className="text-gray-300">Real project estimates from our portfolio</p></section>
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samples.map(s => (
              <div key={s} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                <div className="h-48 bg-gray-100 flex items-center justify-center"><FileText size={64} className="text-gray-400" /></div>
                <div className="p-5"><h3 className="font-bold text-lg">{s}</h3><p className="text-gray-500 text-sm mt-1">Complete material takeoff and cost breakdown</p><div className="flex justify-between mt-4"><button className="text-gold font-medium">View Sample</button><button className="flex items-center space-x-1 text-gray-500"><Download size={16} /><span>Download</span></button></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkSamples