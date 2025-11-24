"use client";

import { motion } from "framer-motion";
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TimerIcon from '@mui/icons-material/Timer';
import { useLanguage } from "@/context/LanguageContext"; // Import Context
import { aboutUsData } from "@/data/about"; // Import Data

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const AboutAcademy = () => {
  const { lang } = useLanguage();
  const t = aboutUsData[lang]?.aboutAcademy || aboutUsData["vi"].aboutAcademy;

  // Icons array to map with data
  const icons = [
    <SchoolIcon key="1" fontSize="large" className="text-yellow-400" />,
    <VolunteerActivismIcon key="2" fontSize="large" className="text-yellow-400" />,
    <TimerIcon key="3" fontSize="large" className="text-yellow-400" />
  ];

  return (
    <section 
      id="about" 
      className="w-full pt-32 pb-24 sm:pb-32 bg-gradient-to-tl from-teal-900 via-gray-900 to-gray-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 20 50 10 T100 10" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-3 block">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Takechi</span>
          </h2>
          <p className="text-xl text-gray-300 italic max-w-2xl mx-auto font-light">
            {t.quote}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-teal-500/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
              {t.mission_title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.mission_desc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-700 to-red-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden border border-red-500/50"
          >
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
              {t.vision_title}
            </h3>
            <p className="leading-relaxed text-lg text-red-50 relative z-10">
              {t.vision_desc}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{t.core_values_title}</h3>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-gray-800/90 p-8 rounded-2xl shadow-lg border border-gray-700 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-6 mx-auto border border-gray-600">
                  {icons[idx]}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-center leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutAcademy;