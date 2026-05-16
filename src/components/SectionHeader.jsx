// frontend/src/components/SectionHeader.jsx
import { motion } from 'framer-motion'

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  light = false,
  badge,
  className = '',
}) => {
  const alignment = centered ? 'text-center' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-dark'
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-600'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignment} ${className}`}
    >
      {badge && (
        <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <div className="max-w-2xl mx-auto">
          <p className={`text-lg ${subtitleColor}`}>
            {subtitle}
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default SectionHeader