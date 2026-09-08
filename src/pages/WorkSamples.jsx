import { useState } from 'react'
import { Download, FileSpreadsheet, FileText, X } from 'lucide-react'
import PDFModal from '../components/PDFModal'
import { sampleCategories, workSamples } from '../data/samples'

const fileLabel = (type) => type === 'pdf' ? 'Open PDF' : 'Open Excel'

const WorkSamples = () => {
  const [selectedSample, setSelectedSample] = useState(null)
  const [previewPdf, setPreviewPdf] = useState(null)

  const openFile = (sample, file) => {
    if (file.type === 'pdf') {
      setSelectedSample(null)
      setPreviewPdf({ url: file.url, title: sample.title })
      return
    }

    window.open(file.url, '_blank', 'noopener,noreferrer')
    setSelectedSample(null)
  }

  const handleSampleClick = (sample) => {
    if (sample.files.length === 1) {
      openFile(sample, sample.files[0])
    } else {
      setSelectedSample(sample)
    }
  }

  return (
    <>
      <section className="bg-dark text-white py-16 text-center">
        <h1 className="text-white">Work Samples</h1>
        <p className="text-gray-300">Real project estimates from our portfolio</p>
      </section>

      <section className="section">
        <div className="container-custom">
          {sampleCategories.map((category) => {
            const categorySamples = workSamples.filter((sample) => sample.category === category)
            if (!categorySamples.length) return null

            return (
              <div key={category} className="mb-14 last:mb-0">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl">{category}</h2>
                  <span className="text-sm text-gray-500">{categorySamples.length} samples</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categorySamples.map((sample) => (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => handleSampleClick(sample)}
                      className="bg-white rounded-xl shadow-md overflow-hidden card-hover text-left"
                    >
                      <div className="h-48 bg-gray-100 flex items-center justify-center gap-4">
                        {sample.files.some((file) => file.type === 'pdf') && <FileText size={56} className="text-gold" />}
                        {sample.files.some((file) => file.type === 'excel') && <FileSpreadsheet size={52} className="text-green-600" />}
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg">{sample.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{sample.description}</p>
                        <div className="flex items-center gap-3 mt-4 text-sm font-medium text-gold">
                          {sample.files.map((file) => <span key={file.type}>{fileLabel(file.type)}</span>)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {selectedSample && (
        <div className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4" onClick={() => setSelectedSample(null)}>
          <div className="bg-white rounded-xl max-w-md w-full p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-sm text-gray-500">Choose a file</p>
                <h2 className="text-2xl">{selectedSample.title}</h2>
              </div>
              <button type="button" onClick={() => setSelectedSample(null)} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-3">
              {selectedSample.files.map((file) => (
                <button
                  key={file.type}
                  type="button"
                  onClick={() => openFile(selectedSample, file)}
                  className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:border-gold hover:bg-gray-50"
                >
                  <span className="flex items-center gap-3">
                    {file.type === 'pdf' ? <FileText size={20} className="text-gold" /> : <FileSpreadsheet size={20} className="text-green-600" />}
                    {fileLabel(file.type)}
                  </span>
                  {file.type === 'excel' && <Download size={18} className="text-gray-500" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <PDFModal
        isOpen={Boolean(previewPdf)}
        onClose={() => setPreviewPdf(null)}
        pdfUrl={previewPdf?.url}
        title={previewPdf?.title}
      />
    </>
  )
}

export default WorkSamples
