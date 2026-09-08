const sampleFiles = [
  ['Commercial-Excel.xlsx', 'Commercial', 'excel'],
  ['Concrete-Excel.xlsx', 'Commercial', 'excel'],
  ['Concrete-PDF.pdf', 'Commercial', 'pdf'],
  ['demolition installation-Excel.xlsx', 'Commercial', 'excel'],
  ['demolition installation-PDF.pdf', 'Commercial', 'pdf'],
  ['Electrical-Excel.xlsx', 'Commercial', 'excel'],
  ['Electrical-PDF.pdf', 'Commercial', 'pdf'],
  ['Estimate Plumbing - Lewisville Resturant, Excel.xlsx', 'Commercial', 'excel'],
  ['HVAC-Excel.xlsx', 'Commercial', 'excel'],
  ['HVAC-PDF.pdf', 'Commercial', 'pdf'],
  ['Plumbing-PDF.pdf', 'Commercial', 'pdf'],
  ['Roofing-Excel.xlsx', 'Commercial', 'excel'],
  ['Roofing-PDF.pdf', 'Commercial', 'pdf'],
  ['Estimate - Residential-Excel.xlsx', 'Residential', 'excel'],
  ['Floring-Excel.xlsx', 'Residential', 'excel'],
  ['Floring-PDF.pdf', 'Residential', 'pdf'],
  ['DryWall & Framing Excel.xlsx', 'Residential', 'excel'],
  ['drywall & framing.pdf', 'Residential', 'pdf'],
  ['Landescape-excel.xlsx', 'Landscape', 'excel'],
  ['Landescape-PDF.pdf', 'Landscape', 'pdf'],
]

const getBaseName = (fileName) => fileName
  .replace(/\.[^.]+$/, '')
  .replace(/\s*[-_]\s*(pdf|excel)\s*$/i, '')
  .replace(/\s+(pdf|excel)\s*$/i, '')
  .replace(/\s+/g, ' ')
  .trim()

const displayName = (name) => name
  .replace(/\bexcel\b|\bpdf\b/gi, '')
  .replace(/\s*[-_]\s*/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/\b\w/g, (letter) => letter.toUpperCase())

const fileUrl = (fileName) => `/samples/${encodeURIComponent(fileName)}`
const groupedSamples = new Map()

sampleFiles.forEach(([fileName, category, type]) => {
  const key = `${category}:${getBaseName(fileName).toLowerCase()}`
  const existing = groupedSamples.get(key)
  const file = { name: fileName, type, url: fileUrl(fileName) }

  if (existing) {
    existing.files.push(file)
  } else {
    groupedSamples.set(key, {
      id: key,
      title: displayName(getBaseName(fileName)),
      category,
      description: 'Complete material takeoff and cost breakdown',
      files: [file],
    })
  }
})

export const workSamples = Array.from(groupedSamples.values())
export const sampleCategories = ['Commercial', 'Residential', 'Landscape']

export default workSamples
