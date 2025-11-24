"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { sutdents_whychooseus } from "@/assets/japan";
import { useLanguage } from "@/context/LanguageContext";
import { aboutUsData } from "@/data/about";

const InstructorTeam = () => {
  const { lang } = useLanguage();
  const t = aboutUsData[lang]?.instructorTeam || aboutUsData["vi"].instructorTeam;

  return (
    <section id="instructors" className="w-full py-24 sm:py-32 bg-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern-light" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 20 50 10 T100 10" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern-light)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {t.title_normal} <br />
                <span className="text-red-600">{t.title_highlight}</span> 
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="space-y-6">
              {t.features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-red-50 transition-colors duration-300 border border-transparent hover:border-red-100 group"
                >
                  <div className="mt-1">
                    <CheckCircleIcon className="text-red-600 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-100/50 rounded-full blur-[80px] -z-10"></div>
            
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 bg-gray-100">
              <Image
                src={sutdents_whychooseus}
                alt="Takechi Instructor Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-red-600 max-w-xs">
                <p className="font-bold text-gray-900 text-sm">{t.badge_title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.badge_sub}</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default InstructorTeam;