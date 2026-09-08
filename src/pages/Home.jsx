// frontend/src/pages/Home.jsx (FULLY CORRECTED)
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, Clock, Award, Shield, FileText, Users, 
  CheckCircle, Building2, HardHat, Ruler, BarChart3,
  Warehouse, Paintbrush, Wrench, Zap, Droplets,
  ChevronRight, Star, Phone, Mail, ArrowRight,
  Play, FileCheck, Calculator, Target, ThumbsUp,
  Home as HomeIcon, Building, Layers, Zap as ZapIcon,
  Truck, Hammer, PenTool, Eye, Briefcase, DollarSign,
  Headphones, RefreshCw, Smile, Coffee, Heart, Globe,
  Upload  // Add this import
} from 'lucide-react'
import ContactForm from '../components/ContactForm'
import FAQAccordion from '../components/FAQAccordion'
import { workSamples } from '../data/samples'

const HomePage = () => {
  const [counter, setCounter] = useState({ years: 0, hours: 0, projects: 0, clients: 0 })
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000
      const yearsTarget = 15
      const hoursTarget = 24
      const projectsTarget = 1250
      const clientsTarget = 850
      
      let startTime = null
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        
        setCounter({
          years: Math.floor(progress * yearsTarget),
          hours: Math.floor(progress * hoursTarget),
          projects: Math.floor(progress * projectsTarget),
          clients: Math.floor(progress * clientsTarget)
        })
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isStatsInView])

  const fadeUp = { 
    initial: { opacity: 0, y: 50 }, 
    animate: { opacity: 1, y: 0 }, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
  
  const fadeLeft = { 
    initial: { opacity: 0, x: -50 }, 
    animate: { opacity: 1, x: 0 }, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
  
  const fadeRight = { 
    initial: { opacity: 0, x: 50 }, 
    animate: { opacity: 1, x: 0 }, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  
  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative bg-dark text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background with Parallax */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
        </motion.div>
        
        {/* Animated Overlay Grid Pattern */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(230,168,0,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              variants={fadeLeft}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {/* Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                <span className="text-gold text-sm font-semibold tracking-wide">SINCE 2010</span>
              </motion.div>
              
              {/* Animated Underline */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-1 bg-gradient-to-r from-gold to-transparent"
              />
              
              {/* Main Heading with Stagger Animation */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block"
                >
                  Professional
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="relative inline-block mt-2"
                >
                  <span className="text-gold relative">
                    Construction Estimating
                    <motion.span 
                      className="absolute -bottom-3 left-0 w-full h-[3px] bg-gradient-to-r from-gold to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="block"
                >
                  Services
                </motion.span>
              </h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
              >
                Accurate material takeoffs, bid-ready estimates, and expert support to help you win more projects with <span className="text-gold font-semibold">98% accuracy</span>.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-wrap gap-5 pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="group relative overflow-hidden bg-gold text-dark px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-2xl hover:shadow-gold/50">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Free Quote 
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-white"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/upload-plans" className="group relative overflow-hidden border-2 border-gold text-gold hover:text-dark px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 bg-transparent hover:bg-gold">
                    <span className="relative z-10 flex items-center gap-2">
                      Upload Plans
                      <Upload size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Stats Section with 3D Cards */}
              <motion.div 
                ref={statsRef}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-700/50"
              >
                {[
                  { value: counter.years, label: 'Years Experience', suffix: '+', icon: <Award size={24} className="text-gold" />, gradient: "from-amber-500 to-gold" },
                  { value: counter.hours, label: 'Hour Turnaround', suffix: 'h', icon: <Clock size={24} className="text-gold" />, gradient: "from-blue-500 to-cyan-500" },
                  { value: counter.projects, label: 'Projects Completed', suffix: '+', icon: <FileCheck size={24} className="text-gold" />, gradient: "from-green-500 to-emerald-500" },
                  { value: counter.clients, label: 'Happy Clients', suffix: '+', icon: <Users size={24} className="text-gold" />, gradient: "from-purple-500 to-pink-500" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={staggerItem} 
                    className="relative group"
                  >
                    <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                      <div className="mb-3 flex justify-center opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        {stat.icon}
                      </div>
                      <p className="text-gold text-2xl md:text-3xl font-bold">
                        {stat.value}{stat.suffix}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</p>
                      {/* Animated progress bar */}
                      <div className="mt-3 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${stat.gradient}`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 1.5 + idx * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Content - Premium Image Card */}
            <motion.div 
              variants={fadeRight}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {/* Main Image Card with 3D Effect */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold/50 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gold/20 via-transparent to-transparent rounded-2xl p-2 backdrop-blur-sm border border-gold/30 overflow-hidden">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl z-10"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/50 rounded-br-2xl z-10"></div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-gold/10 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <img 
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Construction blueprint and plans" 
                    className="rounded-xl w-full relative z-10 shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Play Button Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="bg-gold rounded-full p-5 cursor-pointer shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        boxShadow: ["0 0 0 0 rgba(230,168,0,0.7)", "0 0 0 20px rgba(230,168,0,0)"],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <Play size={32} className="text-dark" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Badge 1 - Top Right */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-r from-gold to-amber-600 text-dark px-5 py-2.5 rounded-full shadow-2xl z-30"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-dark" />
                  <span className="font-bold text-sm tracking-wide">98% ACCURACY</span>
                </div>
              </motion.div>
              
              {/* Floating Badge 2 - Bottom Left */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-dark/90 backdrop-blur-md text-gold px-5 py-2.5 rounded-full shadow-2xl border border-gold/50 z-30"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gold" />
                  <span className="font-bold text-sm tracking-wide">12-24H DELIVERY</span>
                </div>
              </motion.div>
              
              {/* Floating Badge 3 - Middle Right (New) */}
              <motion.div 
                className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-xl border border-white/20 z-30 hidden lg:flex items-center gap-2"
                animate={{ 
                  x: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Users size={14} className="text-gold" />
                <span className="text-xs font-semibold">1,250+ Projects</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
      </section>

      {/* Quick Contact Form Section */}
      <motion.section 
        className="py-16 md:py-24 bg-gray-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gold font-semibold text-sm">CONTACT US</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch With <span className="text-gold">Our Experts</span></h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our estimating services? Our team is ready to help you with accurate bids and professional support.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Phone size={22} />, text: '+1 838-205-8444', href: 'tel:+18382058444', label: 'Call Us' },
                  { icon: <Mail size={22} />, text: 'info.bidsquantify@gmail.com', href: 'mailto:info.bidsquantify@gmail.com', label: 'Email Us' },
                  { icon: <Mail size={22} />, text: 'josh@bidsquantify.com', href: 'mailto:josh@bidsquantify.com', label: 'Secondary Email' }
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <span className="font-medium text-gray-700 group-hover:text-gold transition">{item.text}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Expertise Section - Simplified without SVG pattern */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-dark rounded-full mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Award size={16} />
              <span className="font-bold text-sm tracking-wide">WHY CONTRACTORS TRUST US</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              What We Help You{' '}
              <span className="relative inline-block">
                <span className="text-gold">Achieve</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
              Expert construction estimating solutions designed to boost your business performance and maximize profitability
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: <Shield size={32} />, title: 'Avoid Costly Mistakes', desc: 'Eliminate calculation errors', stat: '99.9%', color: 'from-red-600 to-red-500' },
              { icon: <Clock size={32} />, title: 'Save Time', desc: 'Reduce estimating time', stat: '75%', color: 'from-blue-600 to-blue-500' },
              { icon: <Target size={32} />, title: 'Improve Accuracy', desc: 'Precision guaranteed', stat: '98%', color: 'from-emerald-600 to-emerald-500' },
              { icon: <TrendingUp size={32} />, title: 'Increase Win Rates', desc: 'Win more bids', stat: '3x', color: 'from-purple-600 to-purple-500' },
              { icon: <DollarSign size={32} />, title: 'Reduce Overhead', desc: 'Lower operational costs', stat: '40%', color: 'from-amber-600 to-orange-500' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 h-full border border-gray-100 hover:shadow-2xl hover:border-gold/30">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-gold">{item.stat}</span>
                      <span className="text-xs text-gray-400 uppercase">Success Rate</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gold font-semibold text-sm">WHY CHOOSE US</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gold">Bids Quantify</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Trusted by contractors nationwide for precision and reliability</p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: <Ruler size={36} />, title: 'Accurate Cost Estimating', desc: '98% accuracy guarantee with detailed breakdowns', bg: 'from-blue-500 to-cyan-500' },
              { icon: <Building2 size={36} />, title: 'Tailored for Builders', desc: 'Custom reports aligned with your bid strategy', bg: 'from-purple-500 to-pink-500' },
              { icon: <Clock size={36} />, title: 'Fast Turnaround', desc: '12-24 hour delivery for urgent bids', bg: 'from-green-500 to-emerald-500' },
              { icon: <DollarSign size={36} />, title: 'Affordable Pricing', desc: 'Competitive fees with no hidden costs', bg: 'from-yellow-500 to-orange-500' },
              { icon: <FileText size={36} />, title: 'Professional Reports', desc: 'Excel & PDF formats with markups', bg: 'from-red-500 to-rose-500' },
              { icon: <RefreshCw size={36} />, title: 'Revision Support', desc: 'Free revisions within 7 days', bg: 'from-indigo-500 to-blue-500' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl card-hover relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full"></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted Company Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Construction team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold text-dark p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gold font-semibold text-sm">TRUSTED PARTNER</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Construction <span className="text-gold">Estimation Company</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of industry experience, Bids Quantify has become the go-to estimating partner for contractors, builders, and developers across the United States.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Experienced estimators', 'Location-based pricing', 
                  'Transparent fee proposal', 'Fast delivery', 
                  '24/7 support', 'Residential & commercial'
                ].map((item, idx) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center space-x-2 p-2"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle size={18} className="text-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services At A Glance */}
      <motion.section 
        className="py-16 md:py-24 bg-gray-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold">Services <span className="text-gold">At A Glance</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-dark to-gray-800 text-white">
                <tr>
                  <th className="p-5 text-left text-lg">Feature / Benefit</th>
                  <th className="p-5 text-left text-lg">Our Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Industry Software', 'Precise material takeoffs using PlanSwift, Bluebeam, Stack'],
                  ['Certified Estimators', 'Accurate estimates with 15+ years experience'],
                  ['Fast Delivery', 'Meet bid deadlines with 12-24h turnaround'],
                  ['Local Pricing', 'Realistic labor & material cost for your region'],
                  ['Cost-Effective Plans', 'Higher profitability and competitive bids']
                ].map((row, i) => (
                  <motion.tr 
                    key={i} 
                    className="border-b hover:bg-gold/5 transition cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <td className="p-5 font-semibold">{row[0]}</td>
                    <td className="p-5 text-gray-600">{row[1]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Monthly Takeoff Packages */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-gray-900 to-dark"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-gold/20 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gold font-semibold text-sm">SPECIAL OFFER</span>
            </motion.div>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Monthly Takeoff Packages</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Unlimited takeoffs for busy contractors with priority support and discounted rates
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                  View Packages <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/upload-plans" className="btn-outline inline-flex items-center gap-2 text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark">
                  Upload Plans
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gold">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Comprehensive estimating solutions for every trade</p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: <HomeIcon size={28} />, title: 'Residential Estimating', color: 'from-blue-500 to-cyan-500' },
              { icon: <Building size={28} />, title: 'Commercial Estimating', color: 'from-purple-500 to-pink-500' },
              { icon: <Layers size={28} />, title: 'Civil Works', color: 'from-green-500 to-emerald-500' },
              { icon: <ZapIcon size={28} />, title: 'MEP Estimating', color: 'from-yellow-500 to-orange-500' },
              { icon: <Hammer size={28} />, title: 'Masonry Takeoffs', color: 'from-red-500 to-rose-500' },
              { icon: <Truck size={28} />, title: 'Sitework & Earthwork', color: 'from-indigo-500 to-blue-500' },
              { icon: <PenTool size={28} />, title: 'Steel Estimating', color: 'from-gray-500 to-slate-500' },
              { icon: <Eye size={28} />, title: 'Roofing Estimating', color: 'from-amber-500 to-yellow-500' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -10 }}
              >
                <Link to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="block">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-b-4  group">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition">{service.title}</h3>
                    <p className="text-gray-500 text-sm">Professional takeoffs & estimates</p>
                    <ChevronRight className="text-gold mt-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Samples Preview */}
      <section className="py-16 md:py-24 bg-gray-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent <span className="text-gold">Work Samples</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Real project estimates from our portfolio</p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {workSamples.map((sample) => (
              <motion.div 
                key={sample.id} 
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <FileText size={56} className="text-gray-400 group-hover:scale-110 transition-transform group-hover:text-gold" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition">{sample.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{sample.description}</p>
                  <p className="text-gray-500 text-xs mb-3">{sample.files.map((file) => file.type.toUpperCase()).join(' / ')}</p>
                  <Link to="/work-samples" className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Sample <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/work-samples" className="btn-outline inline-flex items-center gap-2">
              View All Samples <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gold font-semibold text-sm">TESTIMONIALS</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-gold">Clients Say</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Trusted by 1000+ contractors nationwide</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { name: 'Michael Rodriguez', role: 'General Contractor', company: 'Rodriguez Construction', text: 'Incredible accuracy and fast delivery. Helped us win a $2M commercial bid. Their team is professional and responsive.', stars: 5, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
              { name: 'Sarah Johnson', role: 'Home Builder', company: 'Johnson Custom Homes', text: 'Their detailed material takeoffs saved us 15% on material costs. Highly recommend Bids Quantify for any construction project.', stars: 5, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
              { name: 'David Thompson', role: 'Commercial Developer', company: 'Thompson Development', text: 'Professional reports and excellent support. Our go-to estimating partner for all commercial developments.', stars: 5, image: 'https://randomuser.me/api/portraits/men/2.jpg' }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-xl relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dark font-bold text-xl">"</div>
                <div className="flex text-gold mb-4 mt-2">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} className="mr-1" />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-dark text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-gold/10 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gold font-semibold text-sm">FAQ</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gold">Questions</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Everything you need to know about our services</p>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FAQAccordion />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-dark text-4xl md:text-5xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Your Trusted Construction <br/>Estimation Partner
            </motion.h2>
            <p className="text-dark/80 text-lg mb-8 max-w-2xl mx-auto">
              Get accurate, bid-ready estimates that help you win more projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="bg-dark hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md inline-flex items-center gap-2 text-lg px-10 py-4">
                  Get A Quote Today <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/upload-plans" className="bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white inline-flex items-center gap-2 text-lg px-10 py-4 rounded-md transition-all font-semibold">
                  Upload Plans
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
