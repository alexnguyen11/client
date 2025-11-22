const courses = [
  {
    title: "Chương trình sơ cấp",
    description: "Dành cho người mới bắt đầu, N5 – N4, học ngữ pháp cơ bản và từ vựng thông dụng.",
    level: "N5 – N4",
  },
  {
    title: "Chương trình trung cấp",
    description: "Học viên nâng cao kỹ năng ngữ pháp, từ vựng, và luyện thi JLPT N3.",
    level: "N3",
  },
  {
    title: "Chương trình cao cấp cơ bản",
    description: "Tiếp cận các chủ đề nâng cao, cải thiện khả năng đọc hiểu và viết, JLPT N2.",
    level: "N2",
  },
  {
    title: "Chương trình cao cấp nâng cao",
    description: "Hoàn thiện kỹ năng nghe, nói, đọc, viết ở mức chuyên sâu, JLPT N1.",
    level: "N1",
  },
  {
    title: "Chương trình hội thoại căn bản",
    description: "Luyện giao tiếp cơ bản hàng ngày, tự tin trong các tình huống đơn giản.",
    level: "Hội thoại cơ bản",
  },
  {
    title: "Chương trình hội thoại nâng cao",
    description: "Phát triển khả năng giao tiếp tự nhiên, diễn đạt ý kiến và thảo luận chuyên sâu.",
    level: "Hội thoại nâng cao",
  },
];

const CoursesSection = () => {
  return (
    <div id="courses" className="py-16 sm:py-20 bg-white text-center">
      <div className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
        Chương Trình & Khóa Học
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-start text-left"
          >
            <div className="text-xl font-semibold mb-3 text-red-600">
              {course.title}
            </div>
            <div className="text-gray-700 mb-4">{course.description}</div>
            <div className="text-sm font-medium text-gray-500">
              Cấp độ: {course.level}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;