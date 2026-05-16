// frontend/src/pages/SamplePDFs.jsx
import { useState } from 'react'
import { FileText, Eye, Download } from 'lucide-react'

const pdfSamples = [
  { id: 1, title: 'Residential House Estimate', category: 'Residential', url: '/samples/residential-sample.pdf' },
  { id: 2, title: 'Commercial Office Takeoff', category: 'Commercial', url: '/samples/commercial-sample.pdf' },
  { id: 3, title: 'Electrical Panel Schedule', category: 'Electrical', url: '/samples/electrical-sample.pdf' },
]

const SamplePDFs = () => {
  const [preview, setPreview] = useState(null)
  return (
    <>
      <section className="bg-dark text-white py-16 text-center"><h1 className="text-white">Sample PDF Estimates</h1><p className="text-gray-300">Preview our professional estimating reports</p></section>
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {pdfSamples.map(pdf => (
              <div key={pdf.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-56 bg-gray-100 flex items-center justify-center"><FileText size={56} className="text-gold" /></div>
                <div className="p-5"><h3 className="font-bold">{pdf.title}</h3><p className="text-gray-500 text-sm mb-4">{pdf.category}</p><div className="flex justify-between"><button onClick={() => setPreview(pdf.url)} className="flex items-center space-x-1 text-gold"><Eye size={16} /><span>Preview</span></button><button className="flex items-center space-x-1 text-gray-600"><Download size={16} /><span>Download</span></button></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {preview && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setPreview(null)}><div className="bg-white rounded-xl max-w-4xl w-full h-[80vh] overflow-auto" onClick={e => e.stopPropagation()}><iframe src={preview} className="w-full h-full" /></div></div>}
    </>
  )
}

export default SamplePDFs