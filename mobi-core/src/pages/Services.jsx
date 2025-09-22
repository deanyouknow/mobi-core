import { motion } from 'framer-motion';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(255, 255, 255, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };


  const packages = [
    {
      name: "Basic",
      price: "Rp 500.000 - Rp 2.000.000",
      duration: "1 - 2 Minggu",
      features: [
        "Design Aplikasi dengan Figma",
        "1-10 UI Screen",
        "Konsultasi dasar",
        "Revisi 2x"
      ],
      icon: "📱",
      gradient: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/30"
    },
    {
      name: "Standard",
      price: "Rp 2.000.000 - Rp 5.000.000",
      duration: "2 - 4 Minggu",
      features: [
        "Semua fitur Basic",
        "Aplikasi siap dalam bentuk APK",
        "Testing dasar",
        "Dokumentasi sederhana",
        "Support 1 bulan"
      ],
      icon: "🚀",
      gradient: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/30",
      popular: true
    },
    {
      name: "Premium",
      price: "Rp 5.000.000 - Rp 20.000.000",
      duration: "1 - 3 Bulan",
      features: [
        "Semua fitur Standard",
        "10-30 UI Screen",
        "Interactive Prototype",
        "Dokumentasi lengkap",
        "Testing komprehensif",
        "Support 3 bulan",
        "Publikasi ke Play Store"
      ],
      icon: "⭐",
      gradient: "from-gold-900/20 to-yellow-800/20",
      border: "border-yellow-500/30"
    },
    {
      name: "Custom",
      price: "Sesuai Negosiasi",
      duration: "Sesuai Perjanjian",
      features: [
        "Disesuaikan kebutuhan klien",
        "Konsultasi mendalam",
        "Fitur khusus",
        "Integrasi sistem",
        "Maintenance jangka panjang",
        "Team dedicated"
      ],
      icon: "🎯",
      gradient: "from-green-900/20 to-green-800/20",
      border: "border-green-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20 relative z-10" // Changed from py-20 to pt-32 pb-20
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Layanan Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Solusi lengkap untuk kebutuhan aplikasi mobile Anda dengan teknologi terdepan dan harga kompetitif
          </p>
          <div className="text-xl md:text-2xl font-bold text-blue-400">Fast Build, Fast Clear</div>
        </motion.div>

        {/* Main Services */}
        <motion.div variants={cardVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover="hover"
              variants={cardVariants}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
            >
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4">Aplikasi Mobile</h3>
              <p className="text-gray-400 mb-6">
                Pengembangan aplikasi mobile Android & iOS dengan teknologi native dan cross-platform, 
                memberikan pengalaman pengguna yang seamless dan performa optimal.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Android Native (Java/Kotlin)</div>
                <div>• iOS Native (Swift)</div>
                <div>• Flutter & React Native</div>
                <div>• Progressive Web Apps</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardVariants}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
            >
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-400 mb-6">
                Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif, 
                mengutamakan usability dan aesthetic appeal untuk semua jenis aplikasi.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• User Research & Analysis</div>
                <div>• Wireframing & Prototyping</div>
                <div>• Interactive Design</div>
                <div>• Design System</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardVariants}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
            >
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-2xl font-bold mb-4">Konsultasi Digital</h3>
              <p className="text-gray-400 mb-6">
                Saran ahli tentang solusi teknologi, arsitektur aplikasi, dan strategi transformasi digital 
                untuk mengoptimalkan proses bisnis Anda.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Technology Assessment</div>
                <div>• Architecture Planning</div>
                <div>• Digital Strategy</div>
                <div>• Maintenance Support</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div variants={cardVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Paket Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                whileHover="hover"
                variants={cardVariants}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${pkg.gradient} border ${pkg.border} ${
                  pkg.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      TERPOPULER
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold mb-2 text-blue-400">{pkg.price}</div>
                  <div className="text-gray-400 mb-6">{pkg.duration}</div>
                  
                  <ul className="space-y-2 text-sm text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Clients */}
        <motion.div variants={cardVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-12">Klien Target Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/20">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="font-semibold mb-2">Perusahaan Menengah & Besar</h4>
              <p className="text-gray-400 text-sm">
                Perusahaan yang memerlukan aplikasi untuk meningkatkan efisiensi dan memberikan pelayanan yang lebih baik
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/20">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-semibold mb-2">Instansi Pemerintah</h4>
              <p className="text-gray-400 text-sm">
                Pemerintah yang membutuhkan aplikasi untuk pendataan warga dan pelayanan publik digital
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/20">
              <div className="text-4xl mb-4">🛍️</div>
              <h4 className="font-semibold mb-2">UMKM & Startup</h4>
              <p className="text-gray-400 text-sm">
                Usaha kuliner dan UMKM yang membutuhkan aplikasi pemesanan dan layanan digital
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
