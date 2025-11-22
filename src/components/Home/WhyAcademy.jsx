"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { targetAudience, reasons } from "@/data/whyacademy";
import { sutdents_whychooseus } from "@/assets/japan";

// --- Helper: Color Array for the Numbered List ---
const numberColors = [
  "bg-teal-500", // Color for item 1
  "bg-orange-400", // Color for item 2
  "bg-blue-500", // Color for item 3
  "bg-purple-500", // Color for item 4
  "bg-rose-500", // Color for item 5
  "bg-indigo-500", // Color for item 6
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Sub-Component: Numbered List Item (For 'Reasons') ---
const ReasonItem = ({ item, index }) => {
  // Cyclically pick a color based on index
  const colorClass = numberColors[index % numberColors.length];
  const numberString = (index + 1).toString().padStart(2, "0"); // 01, 02, etc.

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-start gap-6 mb-8 last:mb-0 group"
    >
      {/* The Number Shape */}
      <div className="relative shrink-0 pt-2">
        <div
          className={`w-14 h-14 ${colorClass} rounded-br-[24px] rounded-tl-[10px] rounded-tr-[6px] rounded-bl-[6px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-2xl font-bold text-white">{numberString}</span>
        </div>
      </div>

      {/* The Text Content */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

// --- Sub-Component: Audience Card (Optional Grid at top) ---
const AudienceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
  >
    {/* --- IMAGE SECTION (Full Width Top) --- */}
    <div className="relative w-full h-48 bg-gray-50 overflow-hidden">
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Optional: Subtle gradient overlay at the bottom of the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* --- CONTENT SECTION --- */}
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-teal-600 transition-colors">
        {item.title}
      </h4>

      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
        {item.desc}
      </p>

      {/* --- LINK --- */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <Link
          href="/courses" // Fallback if link is missing
          className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
        >
          Xem lộ trình
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);
// --- Main Component ---
const WhyAcademy = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- PART 1: Header & Intro --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-5/12"
          >
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Takechi Gengo Gakuin
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Vì sao chọn <span className="text-teal-500">Takechi</span> <br />{" "}
              cho hành trình <span className="text-teal-500">Tương Lai?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-5/12 pb-2"
          >
            <p className="text-gray-500 text-base mb-6">
              <span className="font-bold">Takechi</span> không chỉ dạy tiếng
              Nhật, <span className="font-bold">Takechi</span> kiến tạo lộ trình
              sự nghiệp vững chắc cho bạn tại đất nước mặt trời mọc.
            </p>
            <a
              href="/register"
              className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-r-full rounded-bl-full shadow-lg hover:bg-teal-700 transition-all"
            >
              Đăng ký tư vấn
            </a>
          </motion.div>
        </div>

        {/* --- PART 2: The Split Section (Image vs List) --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-stretch mb-24">
          {/* LEFT: The Big Image with Curve */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative min-h-[500px]"
          >
            {/* The Container with the specific shape from your image */}
            <div className="relative w-full h-full rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] rounded-tr-[140px] overflow-hidden shadow-2xl">
              <Image
                src={sutdents_whychooseus}
                alt="Japanese Classroom"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-10 left-8 bg-white/90 backdrop-blur p-4 rounded-xl max-w-xs shadow-lg">
                <p className="text-gray-800 font-bold text-lg">
                  Cam kết đầu ra
                </p>
                <p className="text-gray-500 text-sm">
                  Hỗ trợ học lại miễn phí nếu không đạt kết quả.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The List (Mapped from 'reasons') */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {reasons.map((item, idx) => (
              <ReasonItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* --- PART 3: Target Audience (Grid) --- */}
        {/* Kept this because you provided the data, but styled it to match the light theme */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background decorative blob - Animated Pulse */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-40"
          />

          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
            {/* --- 1. HEADER --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl font-black tracking-tight sm:text-5xl mb-5">
                Ai là người{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  phù hợp nhất
                </span>
                <br /> với khóa học?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tiếng Nhật từ con số 0 – Đỗ JLPT – Tự tin sống & làm việc tại
                Nhật.
              </p>
            </motion.div>

            {/* --- 2. CARD GRID --- */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
            >
              {targetAudience.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <AudienceCard item={item} index={idx} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyAcademy;
