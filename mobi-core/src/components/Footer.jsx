import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '💻', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const services = [
    'Mobile Development',
    'Web Applications',
    'UI/UX Design',
    'Cloud Solutions',
    'Consulting'
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
      </div>

      {/* Main footer content with liquid glass effect */}
      <div className="relative">
        {/* Glass container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
        >
          {/* Liquid glass backdrop */}
          <div className="absolute inset-0 mx-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Liquid shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"></div>
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_4px_20px_rgba(255,255,255,0.1)]"></div>
          </div>

          {/* Content grid */}
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white">MOBICORE</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Your trusted partner in application creation services, delivering innovative 
                solutions with cutting-edge technology. We transform ideas into powerful 
                digital experiences.
              </p>
              
              {/* Social links with hover animations */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {service}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider with glow effect */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 mb-8"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
          </motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
          >
            <p>© {currentYear} MOBICORE. All rights reserved.</p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
