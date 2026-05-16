// frontend/src/components/TestimonialCard.jsx
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating = 5,
  avatar,
  date,
  variant = 'default', // default, minimal, featured
}) => {
  const variants = {
    default: 'bg-gray-bg p-6 rounded-xl shadow-md',
    minimal: 'bg-transparent p-4',
    featured: 'bg-white p-8 rounded-xl shadow-lg border-l-4 border-gold',
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={variants[variant]}
    >
      {/* Quote Icon */}
      {variant !== 'minimal' && (
        <Quote size={32} className="text-gold/30 mb-4" />
      )}
      
      {/* Rating Stars */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-gold fill-gold' : 'text-gray-300'}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-700 italic mb-4">
        "{content}"
      </p>
      
      {/* Author Info */}
      <div className="flex items-center space-x-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-dark">{name}</h4>
          <p className="text-sm text-gray-500">
            {role}
            {company && ` at ${company}`}
          </p>
          {date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard