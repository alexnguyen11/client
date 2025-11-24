import { motion } from "framer-motion";

const numberColors = [
  "bg-teal-500",
  "bg-orange-400",
  "bg-blue-500",
  "bg-purple-500",
  "bg-rose-500",
  "bg-indigo-500",
];

const ReasonItem = ({ item, index }) => {
  const colorClass = numberColors[index % numberColors.length];
  const numberString = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-start gap-6 mb-8 last:mb-0 group"
    >
      <div className="relative shrink-0 pt-2">
        <div
          className={`w-14 h-14 ${colorClass} rounded-br-[24px] rounded-tl-[10px] rounded-tr-[6px] rounded-bl-[6px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-2xl font-bold text-white">{numberString}</span>
        </div>
      </div>
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

export default ReasonItem