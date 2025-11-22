"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { sutdents_whychooseus } from "@/assets/japan";

const TeachingMethod = () => {
  const methods = [
    {
      title: "Lộ Trình Cá Nhân Hóa",
      desc: "Không dạy đại trà. Chúng tôi đánh giá năng lực đầu vào và thiết kế lộ trình riêng biệt cho từng mục tiêu (Du học, XKLĐ, hay Sở thích).",
    },
    {
      title: "Thực Hành Chuyên Sâu (Output)",
      desc: "Áp dụng quy tắc 80/20: 80% thời gian lớp học dành cho việc nói và phản xạ, giúp bạn xóa bỏ tâm lý ngại giao tiếp.",
    },
    {
      title: "Trải Nghiệm Văn Hóa",
      desc: "Học ngôn ngữ qua văn hóa: Trà đạo, Origami, Lễ hội... giúp việc học trở nên sống động và dễ ghi nhớ hơn.",
    },
    {
      title: "Hệ Thống E-Learning",
      desc: "Kho bài giảng video, bài tập và Flashcard độc quyền trên App, giúp bạn ôn tập mọi lúc mọi nơi.",
    },
  ];

  return (
    <section id="method" className="w-full py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      
      {/* --- 1. BACKGROUND WAVE PATTERN (Texture) --- */}
      {/* Opacity set low to blend with gray-50 background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern-method" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 20 50 10 T100 10" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern-method)"/>
        </svg>
      </div>

      {/* --- 2. DECORATIVE BLOB --- */}
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
             <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phương pháp độc quyền</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Học Chủ Động – <span className="text-red-600">Hiệu Quả Tối Đa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Tại Takechi, chúng tôi loại bỏ cách học "đọc-chép" thụ động. Phương pháp của chúng tôi tập trung vào sự tương tác và ứng dụng thực tế.
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
               <p className="text-2xl font-bold mb-1">Văn hóa là chìa khóa</p>
               <p className="text-gray-200 text-sm">Hiểu văn hóa để nói ngôn ngữ tự nhiên hơn.</p>
             </div>
           </motion.div>

           {/* Content Grid */}
           <div className="grid grid-cols-1 gap-6 order-1 lg:order-2">
             {methods.map((item, idx) => (
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