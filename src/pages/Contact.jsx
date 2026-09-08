import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const mapUrl = 'https://www.google.com/maps?q=New%20York%2C%20New%20York%2C%20USA&z=12&output=embed'
const mapLink = 'https://www.google.com/maps/search/?api=1&query=New%20York%2C%20New%20York%2C%20USA'

const Contact = () => {
  return (
    <>
      <section className="bg-dark text-white py-16 text-center">
        <h1 className="text-white">Contact Us</h1>
        <p className="text-gray-300">We're here to help with your estimating needs</p>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
                <Phone className="text-gold" size={28} />
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <a href="tel:+18382058444" className="text-gray-600">+1 838-205-8444</a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
                <Mail className="text-gold" size={28} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:info.bidsquantify@gmail.com" className="text-gray-600">info.bidsquantify@gmail.com</a><br />
                  <a href="mailto:josh@bidsquantify.com">josh@bidsquantify.com</a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
                <MapPin className="text-gold" size={28} />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-600">New York, New York, USA</p>
                  <p className="text-gray-500 text-sm">Serving clients nationwide with remote support</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3>Find Us</h3>
              <a href={mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gold font-medium">
                View larger map <ExternalLink size={16} />
              </a>
            </div>
            <div className="overflow-hidden rounded-xl shadow-md h-80">
              <iframe
                src={mapUrl}
                title="Map showing New York, New York, USA"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
