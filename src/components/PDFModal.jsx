// frontend/src/components/PDFModal.jsx
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer } from 'lucide-react'

const PDFModal = ({ isOpen, onClose, pdfUrl, title = 'PDF Preview' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = title.replace(/\s/g, '_') + '.pdf'
    link.click()
  }

  const handlePrint = () => {
    const printWindow = window.open(pdfUrl, '_blank')
    printWindow?.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-5xl w-full h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">{title}</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownload}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                  title="Download"
                >
                  <Download size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                  title="Print"
                >
                  <Printer size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto">
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                className="w-full h-full"
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PDFModal