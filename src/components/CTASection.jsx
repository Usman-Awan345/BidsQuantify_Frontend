// frontend/src/components/CTASection.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = ({ title, subtitle, buttonText, buttonLink, secondaryButtonText, secondaryButtonLink, variant = 'default' }) => {
  const variants = {
    default: 'bg-gradient-to-r from-dark to-gray-900 text-white',
    gold: 'bg-gold text-dark',
    light: 'bg-gray-bg text-dark',
  }

  return (
    <section className={`py-20 ${variants[variant]}`}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title && <h2 className={`${variant === 'gold' ? 'text-dark' : 'text-white'} mb-4`}>{title}</h2>}
          {subtitle && <p className={`${variant === 'gold' ? 'text-dark/80' : 'text-gray-300'} max-w-2xl mx-auto mb-8`}>{subtitle}</p>}
          <div className="flex flex-wrap gap-4 justify-center">
            {buttonText && (
              <Link to={buttonLink} className={variant === 'gold' ? 'btn-dark' : 'btn-primary'}>
                {buttonText}
              </Link>
            )}
            {secondaryButtonText && (
              <Link to={secondaryButtonLink} className={variant === 'gold' ? 'btn-outline border-dark text-dark hover:bg-dark hover:text-white' : 'btn-outline'}>
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection