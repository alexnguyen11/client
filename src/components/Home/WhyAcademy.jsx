"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sutdents_whychooseus } from "@/assets/japan";

import { ReasonItem, AudienceCard } from ".";

import { useLanguage } from "@/context/LanguageContext";
// IMPORT DATA FROM THE FILE YOU CREATED ABOVE
import { targetAudienceData, reasonsData, sectionTextData } from "@/data/home";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

// --- Main Component ---
const WhyAcademy = () => {
  const { lang } = useLanguage();

  // SELECT DATA BASED ON LANGUAGE (Fallback to 'vi' if undefined)
  const currentLang = lang || "vi";
  const reasons = reasonsData[currentLang] || reasonsData["vi"];
  const audience = targetAudienceData[currentLang] || targetAudienceData["vi"];
  const text = sectionTextData[currentLang] || sectionTextData["vi"];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- PART 1: Header & Intro --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12"
          >
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              {text.brand}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {text.heading_1}{" "}
              <span className="text-teal-500">{text.heading_highlight_1}</span>{" "}
              <br /> {text.heading_2}{" "}
              <span className="text-teal-500">{text.heading_highlight_2}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12 pb-2"
          >
            <p className="text-gray-500 text-base mb-6">{text.intro}</p>
            <a
              href="/register"
              className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-r-full rounded-bl-full shadow-lg hover:bg-teal-700 transition-all"
            >
              {text.cta_button}
            </a>
          </motion.div>
        </div>

        {/* --- PART 2: The Split Section --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-stretch mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative min-h-[500px]"
          >
            <div className="relative w-full h-full rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] rounded-tr-[140px] overflow-hidden shadow-2xl">
              <Image
                src={sutdents_whychooseus}
                alt="Classroom"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 left-8 bg-white/90 backdrop-blur p-4 rounded-xl max-w-xs shadow-lg">
                <p className="text-gray-800 font-bold text-lg">
                  {text.img_badge_title}
                </p>
                <p className="text-gray-500 text-sm">{text.img_badge_desc}</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {reasons.map((item, idx) => (
              <ReasonItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* --- PART 3: Target Audience --- */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-40"
          />

          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl font-black tracking-tight sm:text-5xl mb-5">
                {text.audience_title_1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  {text.audience_highlight}
                </span>
                <br /> {text.audience_title_2}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {text.audience_desc}
              </p>
            </motion.div>

            {/* Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
            >
              {audience.map((item, idx) => (
                <AudienceCard
                  key={idx}
                  item={item}
                  index={idx}
                  btnText={text.card_link}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyAcademy;
