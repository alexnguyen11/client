import { sutdents_whychooseus } from "@/assets/japan";

const coursesData = {
  "n5-n4": {
    id: "n5-n4",
    title: "Chương trình Sơ cấp (N5 – N4)",
    shortDesc:
      "Xây dựng nền tảng vững chắc về từ vựng, ngữ pháp và giao tiếp cơ bản cho người mới bắt đầu.",
    image: sutdents_whychooseus,
    instructor: "Nguyễn Văn A",
    description:
      "Khóa học toàn diện dành cho người mới bắt đầu tiếp xúc với tiếng Nhật. Chúng tôi tập trung vào việc xây dựng nền tảng vững chắc, giúp học viên không chỉ thi đỗ JLPT mà còn giao tiếp được trong đời sống.",
    video:
      "youtube.com/watch?v=mPLxgj1sI_k&list=PLJqn4oJVegSQ71-HQEiOTjkbyoK8jP51I", // Replace with real path or YouTube embed link
    duration: "4 - 5 tháng",
    lessons: 80,
    level: "Sơ cấp",
    price: "3.500.000đ",
    learn: [
      "Nắm vững 2 bảng chữ cái Hiragana & Katakana",
      "800 từ vựng & 100 mẫu ngữ pháp căn bản",
      "Kỹ năng nghe – nói chủ đề chào hỏi, mua sắm, gia đình",
      "Đọc hiểu các đoạn văn ngắn, biển báo đơn giản",
    ],
    achieve: [
      "Giao tiếp tự tin trong các tình huống cơ bản",
      "Đủ kiến thức thi đỗ JLPT N5 và N4",
      "Hiểu văn hóa ứng xử cơ bản của người Nhật",
      "Nền tảng vững chắc để lên Trung cấp",
    ],
    requirements: ["Không yêu cầu kiến thức nền", "Cam kết học 1 tiếng/ngày"],
  },

  n3: {
    id: "n3",
    title: "Chương trình Trung cấp (N3)",
    shortDesc:
      "Phát triển khả năng nghe, đọc hiểu và giao tiếp tự nhiên với các chủ đề thường nhật.",
    image: sutdents_whychooseus,
    instructor: "Trần Minh Tú",
    description:
      "Cầu nối quan trọng giữa sơ cấp và cao cấp. Khóa học N3 giúp bạn thoát khỏi 'tiếng Nhật sách vở' để tiến tới tiếng Nhật thực tế dùng trong công việc và đời sống.",
    video:
      "youtube.com/watch?v=mPLxgj1sI_k&list=PLJqn4oJVegSQ71-HQEiOTjkbyoK8jP51I",
    duration: "6 tháng",
    lessons: 120,
    level: "Trung cấp",
    price: "4.200.000đ",
    learn: [
      "Hơn 1000 từ vựng và 150 mẫu ngữ pháp trung cấp",
      "Luyện nghe hội thoại tốc độ tự nhiên",
      "Đọc hiểu các bài báo ngắn, email công việc",
      "Kỹ năng dịch câu phức",
    ],
    achieve: [
      "Tự tin giao tiếp với người Nhật về chủ đề đời sống",
      "Đọc hiểu văn bản thông thường không quá chuyên sâu",
      "Đủ trình độ làm việc tại nhà hàng, khách sạn Nhật",
      "Đạt chứng chỉ JLPT N3",
    ],
    requirements: [
      "Đã hoàn thành N4 hoặc tương đương",
      "Vượt qua bài test đầu vào",
    ],
  },

  n2: {
    id: "n2",
    title: "Chương trình Cao cấp Cơ bản (N2)",
    shortDesc:
      "Tập trung đọc hiểu sâu, ngữ pháp nâng cao và chuẩn bị cho môi trường doanh nghiệp.",
    image: sutdents_whychooseus,
    instructor: "Yamamoto Ken",
    description:
      "Khóa học chuyên sâu dành cho những bạn muốn làm việc chính thức tại doanh nghiệp Nhật Bản. Tập trung mạnh vào Kính ngữ, Đọc hiểu thương mại và Nghe hiểu tin tức.",
    video:
      "youtube.com/watch?v=mPLxgj1sI_k&list=PLJqn4oJVegSQ71-HQEiOTjkbyoK8jP51I",
    duration: "6 - 8 tháng",
    lessons: 150,
    level: "Cao cấp",
    price: "5.500.000đ",
    learn: [
      "Từ vựng chuyên ngành kinh tế, xã hội",
      "Đọc hiểu báo chí, tạp chí, văn bản hành chính",
      "Thành thạo Kính ngữ (Keigo) trong công việc",
      "Luyện đề thi N2 chuyên sâu",
    ],
    achieve: [
      "Làm việc văn phòng tại công ty Nhật (Biên/Phiên dịch)",
      "Nghe hiểu bản tin thời sự NHK",
      "Đạt chứng chỉ JLPT N2 - Tiêu chuẩn vàng xin việc",
      "Thuyết trình cơ bản bằng tiếng Nhật",
    ],
    requirements: ["Đã có chứng chỉ N3", "Quyết tâm cao độ"],
  },

  n1: {
    id: "n1",
    title: "Chương trình Cao cấp Nâng cao (N1)",
    shortDesc:
      "Rèn luyện tư duy ngôn ngữ như người bản xứ, phân tích và diễn đạt ý tưởng phức tạp.",
    image: sutdents_whychooseus,
    instructor: "Dr. Lê Thu Hà",
    description:
      "Đỉnh cao của tiếng Nhật học thuật và ứng dụng. Khóa học không chỉ dạy tiếng Nhật mà còn dạy về tư duy logic, văn hóa sâu sắc và khả năng ngôn ngữ tinh tế.",
    video:
      "youtube.com/watch?v=mPLxgj1sI_k&list=PLJqn4oJVegSQ71-HQEiOTjkbyoK8jP51I",
    duration: "8 - 10 tháng",
    lessons: 180,
    level: "Chuyên gia",
    price: "6.500.000đ",
    learn: [
      "Ngữ pháp cổ và văn phong viết luận",
      "Từ vựng trừu tượng, quán dụng ngữ khó",
      "Đọc hiểu cái bài xã luận, triết học",
      "Nghe hiểu các bài giảng đại học, tin tức chuyên sâu",
    ],
    achieve: [
      "Đọc hiểu mọi loại văn bản tiếng Nhật",
      "Giao tiếp, tranh luận như người bản xứ",
      "Đủ trình độ nghiên cứu sinh tại Nhật",
      "Đạt JLPT N1",
    ],
    requirements: ["Đã có N2 cứng (trên 120 điểm)", "Tư duy logic tốt"],
  },

  "conversation-basic": {
    id: "conversation-basic",
    title: "Chương trình Hội thoại Căn bản",
    shortDesc:
      "Học giao tiếp thực tế qua các tình huống thông dụng, phản xạ nhanh khi gặp người Nhật.",
    image: sutdents_whychooseus,
    instructor: "Sato Yui",
    description:
      "Quên đi nỗi sợ 'biết ngữ pháp nhưng không nói được'. Khóa học tập trung 100% vào nghe và nói, sửa phát âm (Intonation) chuẩn Tokyo ngay từ đầu.",
    video:
      "youtube.com/watch?v=mPLxgj1sI_k&list=PLJqn4oJVegSQ71-HQEiOTjkbyoK8jP51I",
    duration: "3 tháng",
    lessons: 36,
    level: "Sơ cấp",
    price: "2.800.000đ",
    learn: [
      "Phát âm chuẩn (Trọng âm, ngữ điệu)",
      "20 chủ đề giao tiếp sống còn (Sân bay, Siêu thị, Bệnh viện)",
      "Văn hóa Aizuchi (cách phản hồi) khi nói chuyện",
      "Body language của người Nhật",
    ],
    achieve: [
      "Tự tin bắt chuyện với người Nhật",
      "Xử lý tình huống khi đi du lịch Nhật Bản",
      "Không còn ngại sai khi nói",
    ],
    requirements: ["Biết bảng chữ cái và ngữ pháp bài 1-10 Minna"],
  },

  "conversation-advanced": {
    id: "conversation-advanced",
    title: "Chương trình Hội thoại Nâng cao",
    shortDesc:
      "Cải thiện phản xạ, kỹ năng trình bày (Presentation) và tranh luận chuyên nghiệp.",
    image: sutdents_whychooseus,
    instructor: "Tanaka Hiroshi",
    description:
      "Dành cho các bạn đã có N3/N2 nhưng vẫn 'câm' hoặc nói lắp bắp. Khóa học mô phỏng môi trường công sở, họp hành và đàm phán.",
    video:
      "youtube.com/watch?v=mPLxgj1sI_k&list=PLJqn4oJVegSQ71-HQEiOTjkbyoK8jP51I",
    duration: "4 tháng",
    lessons: 48,
    level: "Cao cấp",
    price: "4.000.000đ",
    learn: [
      "Kỹ năng thuyết trình (Presentation)",
      "Kỹ năng đàm phán, thương lượng",
      "Cách nói giảm nói tránh (Kushon-kotoba)",
      "Phản biện ý kiến một cách lịch sự",
    ],
    achieve: [
      "Làm chủ cuộc họp bằng tiếng Nhật",
      "Diễn đạt ý tưởng phức tạp trôi chảy",
      "Phong thái làm việc chuyên nghiệp",
    ],
    requirements: ["Trình độ N3 cứng trở lên"],
  },
};

export { coursesData };
