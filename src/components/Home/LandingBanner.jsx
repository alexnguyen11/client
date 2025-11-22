"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { wallpaper_landing, group_landing } from "@/assets/japan";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
  float: {
    y: [0, -15, 0], // Floating up and down
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LandingBanner = () => {
  return (
    // Main Container: Fixed height (Original) + Flex Center (Improved Layout)
    <div className="relative w-full h-[600px] sm:h-[650px] lg:h-[750px] overflow-hidden flex items-center">
      
      {/* --- ORIGINAL BACKGROUND --- */}
      <Image
        src={wallpaper_landing}
        alt="Takechi Language Academy Background"
        fill
        className="object-cover"
        priority
      />

      {/* --- ORIGINAL OVERLAY --- */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* --- IMPROVED LAYOUT CONTAINER --- */}
      {/* Uses max-w-7xl to keep content centered and spaced correctly like the edited version */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-4">
          
          {/* --- LEFT SECTION (Text & Search) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div variants={textVariants}>
              <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-400 text-yellow-300 text-sm font-semibold tracking-wider uppercase">
                Học Viện Ngôn Ngữ Takechi
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={textVariants}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl"
            >
              Kiến Thức Là <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Sức Mạnh
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={textVariants}
              className="text-base sm:text-xl md:text-2xl text-gray-100 font-semibold drop-shadow-md max-w-lg mx-auto md:mx-0"
            >
              Chinh phục tiếng Nhật từ N5 đến N1. Lộ trình cá nhân hóa, cam kết đầu ra.
            </motion.p>

            {/* Search Box (Improved Design) */}
            <motion.div 
              variants={textVariants}
              className="mt-6"
            >
              <div className="relative w-full max-w-md mx-auto md:mx-0 group">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-200 blur"></div>
                
                <div className="relative flex bg-white/20 backdrop-blur-md rounded-full overflow-hidden border border-white/30 p-1 shadow-lg">
                  <input
                    type="text"
                    placeholder="Tìm kiếm khóa học phù hợp với bạn..."
                    className="flex-grow px-5 py-3 text-white placeholder-white/80 bg-transparent focus:outline-none text-sm sm:text-base"
                  />
                  <Link
                    href="/courses"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full transition-all flex items-center justify-center shadow-md"
                  >
                    <span className="hidden sm:inline">Tìm kiếm</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SECTION (Image) --- */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={["visible", "float"]} 
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            {/* Decorative glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-yellow-500/20 rounded-full blur-[80px] -z-10" />
            
            <Image
              src={group_landing}
              alt="Group Illustration"
              width={600}
              height={600}
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default LandingBanner;