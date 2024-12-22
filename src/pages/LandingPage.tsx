import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@clerk/clerk-react'
import {
  Wand2,
  MessageSquare,
  Video,
  Music,
  Code,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
} from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/#services' },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'About', path: '/#about' },
]

const features = [
  {
    icon: Wand2,
    title: 'AI Image Generation',
    description: 'Transform your ideas into stunning visuals with our advanced AI.',
  },
  {
    icon: MessageSquare,
    title: 'Chat Assistant',
    description: 'Get intelligent responses and creative suggestions instantly.',
  },
  {
    icon: Video,
    title: 'Video Generation',
    description: 'Create engaging videos from text descriptions.',
  },
  {
    icon: Music,
    title: 'Music Creation',
    description: 'Generate unique music tracks with AI composition.',
  },
  {
    icon: Code,
    title: 'Code Assistant',
    description: 'Get help with coding tasks and problem-solving.',
  },
  {
    icon: Wand2,
    title: 'Style Transfer',
    description: 'Apply artistic styles to your images with AI.',
  },
]

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    features: ['5 image generations/day', 'Basic chat support', 'Community access'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    features: ['Unlimited generations', 'Priority support', 'Advanced features', 'API access'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Custom solutions', '24/7 support', 'Dedicated manager', 'Custom API integration'],
    popular: false,
  },
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const LandingPage = () => {
  const { isSignedIn } = useAuth()
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleVisibility = () => {
      setIsVisible(true)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('load', handleVisibility)
    handleVisibility()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('load', handleVisibility)
    }
  }, [])

  const parallaxY = -scrollY * 0.5

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.03] mix-blend-soft-light" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
              style={{ 
                backgroundColor: scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'transparent',
                backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
              }}>
        <motion.div 
          className="container mx-auto px-6 py-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-white flex items-center gap-2 relative group"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
              <span className="relative">
                Illusio
                <span className="absolute inset-0 blur-lg bg-blue-400/20 group-hover:bg-blue-400/40 transition-all duration-300" />
                <span className="absolute -inset-1 blur-md bg-gradient-to-r from-blue-600/25 via-blue-400/25 to-blue-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </motion.h1>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.path}
                  href={item.path}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </nav>
            <AnimatePresence>
              <motion.div 
                className="space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isSignedIn ? (
                  <Link
                    to="/dashboard"
                    className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/10"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/sign-in"
                      className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ y: parallaxY }}
            className="relative z-10"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Reality with{' '}
              <span className="relative">
                Illusio AI
                <motion.span
                  className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transform your ideas into reality with our suite of AI-powered creative tools.
              Generate images, videos, music, and more with just a few clicks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                to={isSignedIn ? '/dashboard' : '/sign-up'}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
              >
                Get Started
                <motion.div
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/10"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl backdrop-blur-sm transition-all duration-300 border border-white/10 ${
                  plan.popular ? 'shadow-xl shadow-blue-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-blue-400 mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-center"
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-8 px-6 py-2 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Illusio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-blue-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                At Illusio, we envision a world where creativity knows no bounds. Our platform 
                bridges the gap between imagination and reality, empowering creators to bring 
                their wildest ideas to life through the power of artificial intelligence.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Innovation First</h4>
                  <p className="text-gray-400">Pushing the boundaries of what's possible with AI</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-blue-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                We're on a mission to democratize AI technology, making it accessible and 
                intuitive for everyone. Whether you're an artist, developer, or business owner, 
                Illusio provides the tools you need to transform your creative vision into reality.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Wand2 className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Empowering Creativity</h4>
                  <p className="text-gray-400">Making AI accessible to all creators</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Advanced Technology",
                description: "Powered by state-of-the-art AI models and continuous innovation",
                icon: Code,
                stats: "99.9% Uptime"
              },
              {
                title: "Global Community",
                description: "Join thousands of creators from around the world",
                icon: MessageSquare,
                stats: "50K+ Users"
              },
              {
                title: "Endless Possibilities",
                description: "Create anything you can imagine with our suite of AI tools",
                icon: Video,
                stats: "1M+ Creations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <p className="text-blue-400 font-semibold">{item.stats}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-2xl border border-blue-500/20 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Start Your Creative Journey</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the next generation of creators and experience the future of AI-powered creativity. 
              Whether you're just starting out or scaling your creative projects, Illusio has everything 
              you need to succeed.
            </p>
            <Link
              to="/sign-up"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative group">
                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                <span className="relative">
                  Illusio
                  <span className="absolute inset-0 blur-lg bg-blue-400/20 group-hover:bg-blue-400/40 transition-all duration-300" />
                </span>
              </h3>
              <p className="text-gray-300">
                Empowering creativity through artificial intelligence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a 
                      href={item.path}
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: contact@illusio.ai<br />
                Phone: (555) 123-4567
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="border-t border-white/10 pt-8 text-center text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p>&copy; 2024 Illusio AI Studio. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage 