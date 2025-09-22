import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 20 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : 1.0,
        staggerChildren: shouldReduceMotion ? 0.1 : 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 0.95 : 0.8, y: shouldReduceMotion ? 15 : 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.5 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: shouldReduceMotion ? {} : {
      scale: 1.03,
      y: -3,
      boxShadow: "0 15px 30px rgba(255, 255, 255, 0.08)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20 relative z-10" // Changed from py-20 to pt-32 pb-20
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Tentang MOBICORE
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Menghubungkan orang-orang melalui teknologi, menciptakan pengalaman digital yang personal dan bermakna
          </p>
        </motion.div>

        {/* Rest of the component remains the same... */}
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Visi Kami</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Menghubungkan orang-orang melalui teknologi, menciptakan pengalaman digital yang personal dan bermakna
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Menjadi perusahaan yang paling dipercaya dalam pengembangan aplikasi mobile, dikenal karena kualitas, keandalan, dan layanan pelanggan yang unggul
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Misi Kami</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Melayani melalui berbagai platform aplikasi dengan standar kualitas tinggi
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Memberikan pelayanan sesuai slogan kami: <strong>"Fast Build, Fast Clear"</strong>
              </li>
            </ul>
          </motion.div>
        </div>


        {/* Company Values */}
        <motion.div variants={cardVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Perusahaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover="hover"
              variants={cardVariants}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/20"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Inovasi Berkelanjutan</h3>
              <p className="text-gray-300">Selalu mencari teknologi dan solusi terbaru untuk memberikan value terbaik</p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardVariants}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/20"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Fokus pada Kualitas</h3>
              <p className="text-gray-300">Setiap proyek dikerjakan dengan standar kualitas tinggi dan testing menyeluruh</p>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardVariants}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/20"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Partnership yang Kuat</h3>
              <p className="text-gray-300">Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Goals */}
        <motion.div variants={cardVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tujuan Kami</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">📱</div>
                <h4 className="font-semibold mb-2">Membantu Kehidupan Sehari-hari</h4>
                <p className="text-gray-400 text-sm">
                  Membuat aplikasi yang membantu orang dalam aktivitas harian seperti pemesanan makanan, pembelajaran, dan layanan praktis lainnya
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="font-semibold mb-2">Akses Layanan Mudah</h4>
                <p className="text-gray-400 text-sm">
                  Memungkinkan orang mengakses layanan kapan saja dan di mana saja melalui smartphone mereka
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">💡</div>
                <h4 className="font-semibold mb-4">Inovasi Berkelanjutan</h4>
                <p className="text-gray-400 text-sm">
                  Terus mengembangkan fitur baru dan teknologi canggih agar tidak kalah dengan pesaing
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Philosophy */}
        <motion.div variants={cardVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-8">Filosofi Logo MOBICORE</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong>MFDDТ</strong> - Logo kami diambil dari inisial nama anggota tim: 
              <strong className="text-blue-400"> M</strong>aul, 
              <strong className="text-purple-400"> F</strong>arhan, 
              <strong className="text-green-400"> D</strong>afa, 
              <strong className="text-yellow-400"> D</strong>ean, 
              <strong className="text-red-400"> T</strong>hifaal
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
              <div className="p-3 rounded-lg bg-blue-900/20">
                <strong className="text-blue-400">M</strong> - Mobile/Media<br/>
                Fokus pada dunia mobile
              </div>
              <div className="p-3 rounded-lg bg-purple-900/20">
                <strong className="text-purple-400">F</strong> - Friend/Forum<br/>
                Komunitas penghubung
              </div>
              <div className="p-3 rounded-lg bg-green-900/20">
                <strong className="text-green-400">D</strong> - Digital/Development<br/>
                Aplikasi & inovasi
              </div>
              <div className="p-3 rounded-lg bg-yellow-900/20">
                <strong className="text-yellow-400">D</strong> - Data/Discussion<br/>
                Berbagi informasi
              </div>
              <div className="p-3 rounded-lg bg-red-900/20">
                <strong className="text-red-400">T</strong> - Technology/Team<br/>
                Kolaborasi & teknologi
              </div>
            </div>
            <p className="text-gray-400 italic mt-6">
              "Sinyal menara digital yang menghubungkan anggota komunitas mobile melalui teknologi, komunikasi, dan inovasi."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
