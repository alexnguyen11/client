const faqs = [
  {
    question: "Học phí có bao gồm tài liệu không?",
    answer: "Có, tất cả các khóa học đều bao gồm tài liệu học tập và bài kiểm tra online.",
  },
  {
    question: "Có thể học thử trước khi đăng ký không?",
    answer: "Có, chúng tôi cung cấp buổi học thử miễn phí để học viên trải nghiệm phương pháp giảng dạy.",
  },
  {
    question: "Có hỗ trợ lộ trình du học Nhật Bản không?",
    answer: "Có, đội ngũ tư vấn sẽ xây dựng lộ trình học cá nhân phù hợp mục tiêu học viên.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Câu Hỏi Thường Gặp</h2>
      <div className="max-w-4xl mx-auto text-left space-y-4 px-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-red-600 mb-1">{faq.question}</h4>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;