// frontend/src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/Home'  // Note: Import as HomePage
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import WorkSamples from './pages/WorkSamples'
import Pricing from './pages/Pricing'
import SamplePDFs from './pages/SamplePDFs'
import UploadPlans from './pages/UploadPlans'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />  {/* Updated here */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="work-samples" element={<WorkSamples />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="sample-pdfs" element={<SamplePDFs />} />
          <Route path="upload-plans" element={<UploadPlans />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App