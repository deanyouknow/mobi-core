import { motion } from 'framer-motion';

const OurDesign = () => {
  const designs = [
    {
      title: "Aplikasi E-Commerce",
      description: "Platform belanja modern dengan navigasi intuitif dan proses checkout yang seamless untuk meningkatkan konversi penjualan",
      image: "https://via.placeholder.com/400x300/333/fff?text=E-Commerce",
      tags: ["UI/UX", "Mobile App", "E-Commerce"]
    },
    {
      title: "Dashboard Keuangan",
      description: "Visualisasi data yang clean untuk analisa keuangan dan pelaporan dengan interface yang user-friendly",
      image: "https://via.placeholder.com/400x300/444/fff?text=Dashboard",
      tags: ["Dashboard", "Data Viz", "Finance"]
    },
    {
      title: "Aplikasi Kesehatan",
      description: "Interface yang mudah digunakan untuk penjadwalan konsultasi medis dan monitoring kesehatan personal",
      image: "https://via.placeholder.com/400x300/555/fff?text=Healthcare",
      tags: ["Mobile App", "Healthcare", "UI Design"]
    },
    {
      title: "Website Restoran",
      description: "Desain elegant yang menampilkan keunggulan kuliner dengan presentasi menu yang menarik dan sistem reservasi",
      image: "https://via.placeholder.com/400x300/666/fff?text=Restaurant",
      tags: ["Web Design", "Branding", "F&B"]
    },
    {
      title: "Aplikasi Fitness",
      description: "Desain motivational untuk tracking kesehatan dan wellness dengan gamifikasi yang engaging",
      image: "https://via.placeholder.com/400x300/777/fff?text=Fitness",
      tags: ["Mobile App", "Fitness", "UI/UX"]
    },
    {
      title: "Identitas Korporat",
      description: "Sistem identitas brand lengkap untuk startup teknologi dengan konsep modern dan profesional",
      image: "https://via.placeholder.com/400x300/888/fff?text=Branding",
      tags: ["Branding", "Logo", "Identity"]
    },
    {
      title: "Aplikasi Edukasi",
      description: "Platform pembelajaran digital dengan interface yang friendly dan sistem progress tracking untuk siswa",
      image: "https://via.placeholder.com/400x300/999/fff?text=Education",
      tags: ["Mobile App", "Education", "UI Design"]
    },
    {
      title: "Sistem Manajemen",
      description: "Dashboard admin untuk mengelola data dan operasional bisnis dengan workflow yang efisien",
      image: "https://via.placeholder.com/400x300/aaa/fff?text=Management",
      tags: ["Web App", "Management", "Dashboard"]
    },
    {
      title: "Aplikasi Delivery",
      description: "Platform pemesanan dan delivery makanan dengan real-time tracking dan sistem pembayaran terintegrasi",
      image: "https://via.placeholder.com/400x300/bbb/fff?text=Delivery",
      tags: ["Mobile App", "Delivery", "Real-time"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.08,
      rotateY: 5,
      y: -15,
      boxShadow: "0 30px 60px rgba(255, 255, 255, 0.2)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <motion.div
        className="container mx-auto px-6 pt-32 pb-20 relative z-10" // Changed from py-20 to pt-32 pb-20
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Portfolio Desain Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Koleksi karya desain aplikasi dan website yang telah kami kembangkan dengan fokus pada
            user experience dan visual appeal yang memukau
          </p>
          <div className="text-lg text-blue-400 font-semibold">Menciptakan Pengalaman Digital yang Bermakna</div>
        </motion.div>

        {/* Design Philosophy */}
        <motion.div variants={cardVariants} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Filosofi Desain Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/20">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="font-semibold mb-2">Estetika Modern</h4>
                <p className="text-gray-400 text-sm">Desain yang tidak lekang oleh waktu dengan pendekatan minimalis dan kontras yang jelas</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/20">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="font-semibold mb-2">Performa Optimal</h4>
                <p className="text-gray-400 text-sm">Interface yang responsif dan cepat, dioptimasi untuk semua perangkat mobile</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/20">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="font-semibold mb-2">User-Centered</h4>
                <p className="text-gray-400 text-sm">Setiap elemen dirancang berdasarkan kebutuhan dan perilaku pengguna nyata</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div variants={cardVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {design.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {design.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {design.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-blue-900/30 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div variants={cardVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-12">Pendekatan Desain Kami</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-4">🔍</div>
                <h4 className="font-semibold mb-2">Research</h4>
                <p className="text-gray-400 text-sm">Analisis mendalam tentang target user dan market</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-4">✏️</div>
                <h4 className="font-semibold mb-2">Design</h4>
                <p className="text-gray-400 text-sm">Wireframing dan prototyping dengan tools modern</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-4">🧪</div>
                <h4 className="font-semibold mb-2">Testing</h4>
                <p className="text-gray-400 text-sm">User testing dan iterasi berdasarkan feedback</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="font-semibold mb-2">Launch</h4>
                <p className="text-gray-400 text-sm">Implementation dan ongoing optimization</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurDesign;
