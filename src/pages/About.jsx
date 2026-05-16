// frontend/src/pages/About.jsx
import { Link } from 'react-router-dom'
import { CheckCircle, Target, Award, Users } from 'lucide-react'

const About = () => {
  return (
    <>
      <section className="bg-dark text-white py-16">
        <div className="container-custom text-center"><h1 className="text-white">About Us</h1><p className="text-gray-300 mt-2">Professional construction estimating since 2010</p></div>
      </section>
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><h2 className="mb-4">Want to know more about us?</h2><p className="text-gray-600 mb-4">Bids Quantify Estimation is a leading provider of construction estimating services, helping contractors, builders, and developers win more bids with precise material takeoffs and cost analysis.</p><p className="text-gray-600">Our team of certified estimators brings 15+ years of combined experience across residential, commercial, and industrial projects.</p></div>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>
      <section className="section-gray">
        <div className="container-custom text-center">
          <h2 className="mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{ icon: <Target />, title: 'Precision', text: 'Meticulous attention to detail' }, { icon: <Award />, title: 'Excellence', text: 'Industry best practices' }, { icon: <Users />, title: 'Integrity', text: 'Transparent pricing' }, { icon: <CheckCircle />, title: 'Commitment', text: 'Client success first' }].map(v => (
              <div key={v.title} className="bg-white p-6 rounded-xl shadow"><div className="text-gold w-12 h-12 mx-auto mb-3">{v.icon}</div><h3 className="font-bold">{v.title}</h3><p className="text-gray-500 text-sm">{v.text}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About