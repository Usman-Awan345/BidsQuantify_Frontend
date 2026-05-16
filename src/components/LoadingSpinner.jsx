// frontend/src/components/LoadingSpinner.jsx
import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'md', color = 'gold', fullScreen = false, text = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }

  const colorClasses = {
    gold: 'border-gold',
    white: 'border-white',
    dark: 'border-dark',
    gray: 'border-gray-500',
  }

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      {text && <p className={`mt-3 ${color === 'white' ? 'text-white' : 'text-gray-600'}`}>{text}</p>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 shadow-xl">
          {spinner}
        </div>
      </div>
    )
  }

  return spinner
}

export default LoadingSpinner