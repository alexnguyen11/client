"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { sutdents_whychooseus } from "@/assets/japan";
import { useLanguage } from "@/context/LanguageContext";
import { aboutUsData } from "@/data/about";

const TeachingMethod = () => {
  const { lang } = useLanguage();
  const t =
    aboutUsData[lang]?.teachingMethod || aboutUsData["vi"].teachingMethod;

  return (
    <section
      id="method"
      className="w-full py-24 sm:py-32 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="wave-pattern-method"
              x="0"
              y="0"
              width="100"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q25 20 50 10 T100 10"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern-method)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-4"
          >
            <TipsAndUpdatesIcon className="text-yellow-500 mr-2" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              {t.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            {t.title_normal}{" "}
            <span className="text-red-600">{t.title_highlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src={sutdents_whychooseus}
              alt="Japanese Culture Learning"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-2xl font-bold mb-1">{t.img_overlay_title}</p>
              <p className="text-gray-200 text-sm">{t.img_overlay_desc}</p>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-6 order-1 lg:order-2">
            {t.methods.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mr-3">
                    0{idx + 1}
                  </span>
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base pl-11">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethod;
