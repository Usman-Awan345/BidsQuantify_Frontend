// frontend/src/components/FAQAccordion.jsx
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How accurate are your estimates?', a: 'We guarantee 98% accuracy based on detailed quantity takeoffs and current material pricing.' },
  { q: 'What is your turnaround time?', a: 'Typical turnaround is 12-24 hours for most residential and commercial projects.' },
  { q: 'What software do you use?', a: 'We use PlanSwift, Bluebeam, Stack, and custom Excel templates.' },
  { q: 'How do I send plans?', a: 'Upload via our Upload Plans page or email directly to info.bidsquantify@gmail.com' },
  { q: 'Do you provide revisions?', a: 'Yes, we offer free revisions within 7 days of delivery.' },
]

const FAQAccordion = () => {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-sm">
          <button className="w-full flex justify-between items-center p-5 text-left font-semibold" onClick={() => setOpen(open === idx ? null : idx)}>
            {faq.q} <ChevronDown className={`transform transition-transform ${open === idx ? 'rotate-180' : ''}`} size={20} />
          </button>
          {open === idx && <div className="px-5 pb-5 text-gray-600 border-t">{faq.a}</div>}
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion