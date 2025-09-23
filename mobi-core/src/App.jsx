import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OurDesign from './pages/OurDesign'
import Contact from './pages/Contact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 sm:px-8 md:px-12 py-3 sm:py-4 shadow-2xl w-[95%] max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-lg sm:text-xl font-bold tracking-wider hover:text-gray-200 transition-colors">
            MOBICORE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Link to="/" className="px-3 lg:px-5 py-2 text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm lg:text-base">Home</Link>
            <Link to="/about" className="px-3 lg:px-5 py-2 text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm lg:text-base">Tentang Kami</Link>
            <Link to="/services" className="px-3 lg:px-5 py-2 text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm lg:text-base">Layanan</Link>
            <Link to="/our-design" className="px-3 lg:px-5 py-2 text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm lg:text-base">Design</Link>
            <Link to="/contact" className="px-3 lg:px-5 py-2 text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm lg:text-base">Kontak</Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 backdrop-blur-2xl bg-gray-900/95 border border-white/30 rounded-2xl p-4 sm:p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link to="/" className="px-4 py-3 text-white hover:bg-white/30 rounded-lg transition-all duration-300 backdrop-blur-sm text-center font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="px-4 py-3 text-white hover:bg-white/30 rounded-lg transition-all duration-300 backdrop-blur-sm text-center font-medium" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
              <Link to="/services" className="px-4 py-3 text-white hover:bg-white/30 rounded-lg transition-all duration-300 backdrop-blur-sm text-center font-medium" onClick={() => setIsMenuOpen(false)}>Layanan</Link>
              <Link to="/our-design" className="px-4 py-3 text-white hover:bg-white/30 rounded-lg transition-all duration-300 backdrop-blur-sm text-center font-medium" onClick={() => setIsMenuOpen(false)}>Design</Link>
              <Link to="/contact" className="px-4 py-3 text-white hover:bg-white/30 rounded-lg transition-all duration-300 backdrop-blur-sm text-center font-medium" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
            </div>
          </motion.div>
        )}
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-design" element={<OurDesign />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
