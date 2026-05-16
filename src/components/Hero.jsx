// frontend/src/components/Hero.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Award, Building2 } from 'lucide-react'

const Hero = ({
  title,
  subtitle,
  primaryButtonText = 'Get Free Quote',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Upload Plans',
  secondaryButtonLink = '/upload-plans',
  backgroundImage,
  showStats = true,
  stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '12-24h', label: 'Turnaround' },
    { value: '1k+', label: 'Projects' },
  ],
  rightContent,
}) => {
  return (
    <section className="relative bg-dark text-white overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative container-custom py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {title || 'Professional <span class="text-gold">Construction Estimating</span> Services'}
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              {subtitle || 'Accurate material takeoffs, bid-ready estimates, and expert support to help you win more projects with 98% accuracy.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={primaryButtonLink} className="btn-primary">
                {primaryButtonText}
              </Link>
              <Link to={secondaryButtonLink} className="btn-outline">
                {secondaryButtonText}
              </Link>
            </div>
            {showStats && (
              <div className="grid grid-cols-3 gap-4 mt-12 pt-4 border-t border-gray-700">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-gold text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {rightContent ? (
              rightContent
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Construction blueprint" 
                  className="rounded-xl w-full"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero