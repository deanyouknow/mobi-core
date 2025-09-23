import { motion } from 'framer-motion';

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    focus: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "info@mobi-core.tech",
      description: "Hubungi kami untuk konsultasi gratis"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+62 857-9583-3524",
      description: "Response cepat via WhatsApp"
    },
    {
      icon: "📍",
      title: "Alamat",
      value: "Jl. Rancabolang No. 10b",
      description: "SMKS MEDIKACOM, Bandung"
    },
    {
      icon: "⏰",
      title: "Jam Operasional",
      value: "Senin - Jumat: 09:00 - 17:00",
      description: "Siap melayani konsultasi Anda"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <motion.div 
        className="container mx-auto px-6 pt-32 pb-20 relative z-10" // Changed from py-20 to pt-32 pb-20
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={inputVariants} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Siap membantu mewujudkan ide aplikasi Anda menjadi kenyataan. 
            Mari diskusikan proyek Anda dengan tim ahli kami.
          </p>
          <div className="text-xl md:text-2xl font-bold text-blue-400">Fast Build, Fast Clear</div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={inputVariants} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="Masukkan nama lengkap"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="nama@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={inputVariants}>
                  <label className="block text-sm font-medium mb-2">Nomor WhatsApp</label>
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="tel"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="+62 123-456-7890"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label className="block text-sm font-medium mb-2">Jenis Proyek</label>
                  <motion.select
                    whileFocus="focus"
                    variants={inputVariants}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  >
                    <option value="" className="bg-gray-900">Pilih jenis proyek</option>
                    <option value="basic" className="bg-gray-900">Basic - Design Aplikasi</option>
                    <option value="standard" className="bg-gray-900">Standard - Aplikasi APK</option>
                    <option value="premium" className="bg-gray-900">Premium - Full Development</option>
                    <option value="custom" className="bg-gray-900">Custom - Sesuai Kebutuhan</option>
                  </motion.select>
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label className="block text-sm font-medium mb-2">Deskripsi Proyek</label>
                  <motion.textarea
                    whileFocus="focus"
                    variants={inputVariants}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                    placeholder="Ceritakan tentang aplikasi yang ingin Anda buat..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  type="submit"
                >
                  Kirim Pesan
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={inputVariants} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={inputVariants}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-blue-400 mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Mengapa Memilih MOBICORE?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-sm">Pengerjaan cepat: 2 minggu untuk 5-7 fitur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-sm">Tim berpengalaman dengan skill teknologi terkini</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-sm">Harga kompetitif dengan kualitas premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm">Support berkelanjutan dan maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-sm">Proses transparan dengan metode Agile & Scrum</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <span className="text-xl">📘</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                >
                  <span className="text-xl">📷</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                >
                  <span className="text-xl">🐦</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                >
                  <span className="text-xl">💼</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
