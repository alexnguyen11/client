import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AudienceCard = ({ item, btnText }) => (
  <motion.div
    variants={itemVariants} // Use variants passed from parent
    className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
  >
    <div className="relative w-full h-48 bg-gray-50 overflow-hidden">
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h4 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-teal-600 transition-colors">
        {item.title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
        {item.desc}
      </p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <Link
          href={item.link || "/courses"}
          className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
        >
          {btnText}
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

export default AudienceCard;
