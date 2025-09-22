import { motion, useReducedMotion } from 'framer-motion';

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 1.2,
        staggerChildren: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 20 : 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: shouldReduceMotion ? {} : {
      y: [-8, 8, -8],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20 relative z-10" // Changed from py-20 to pt-32 pb-20
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-tight">
              Selamat Datang di MOBICORE
            </h1>
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8"
              variants={floatingVariants}
              animate="animate"
            >
              Fast Build, Fast Clear
            </motion.div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Partner terpercaya dalam layanan pembuatan aplikasi, menghadirkan solusi inovatif 
              dengan teknologi terdepan untuk membantu bisnis Anda berkembang.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mulai Proyek Anda
            </motion.button>
          </motion.div>
        </div>

        {/* Rest of the component remains the same... */}
        {/* Services Preview */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3">Aplikasi Mobile</h3>
            <p className="text-gray-400">
              Pengembangan aplikasi Android & iOS native maupun cross-platform 
              dengan pengalaman pengguna yang seamless.
            </p>
          </motion.div>

          <motion.div 
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-400">
              Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif 
              untuk semua jenis aplikasi.
            </p>
          </motion.div>

          <motion.div 
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">Konsultasi Digital</h3>
            <p className="text-gray-400">
              Saran ahli tentang solusi teknologi, arsitektur aplikasi, 
              dan strategi transformasi digital.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Mengapa Memilih MOBICORE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
              <h4 className="font-semibold mb-2">Teknologi Terdepan</h4>
              <p className="text-gray-400 text-sm">Menggunakan framework dan tools terbaru</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
              <h4 className="font-semibold mb-2">Proses Agile</h4>
              <p className="text-gray-400 text-sm">Pengembangan fleksibel dan transparan</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
              <h4 className="font-semibold mb-2">Harga Kompetitif</h4>
              <p className="text-gray-400 text-sm">Paket fleksibel sesuai kebutuhan</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
              <h4 className="font-semibold mb-2">Support 24/7</h4>
              <p className="text-gray-400 text-sm">Maintenance dan dukungan berkelanjutan</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
