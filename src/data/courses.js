// src/data/courses.js
import { sutdents_whychooseus } from "@/assets/japan";

// 1. TEXT TĨNH (Static Labels - UI Text)
export const coursesText = {
  vi: {
    page_title: "Các Chương Trình Đào Tạo",
    page_desc: "Lộ trình học tập được thiết kế bài bản từ sơ cấp đến chuyên sâu, giúp bạn chinh phục tiếng Nhật một cách hiệu quả nhất.",
    view_detail: "Xem chi tiết",
    instructor: "Giảng viên",
    last_updated: "Cập nhật lần cuối: Tháng 10/2025",
    learn_title: "Bạn sẽ học được gì?",
    achieve_title: "Kết quả sau khóa học",
    require_title: "Yêu cầu đầu vào",
    duration: "Thời lượng",
    lessons: "Số bài học",
    level: "Trình độ",
    register_btn: "Đăng ký ngay",
    consult_btn: "Tư vấn miễn phí",
    not_found: "Khóa học không tồn tại",
    back_link: "Quay lại danh sách khóa học",
    breadcrumb_home: "Trang Chủ",
    breadcrumb_courses: "Khóa Học",
    unit_lessons: "bài"
  },
  en: {
    page_title: "Training Programs",
    page_desc: "Systematic learning path from beginner to advanced, helping you master Japanese most effectively.",
    view_detail: "View Details",
    instructor: "Instructor",
    last_updated: "Last updated: Oct 2025",
    learn_title: "What will you learn?",
    achieve_title: "Course Outcomes",
    require_title: "Requirements",
    duration: "Duration",
    lessons: "Lessons",
    level: "Level",
    register_btn: "Register Now",
    consult_btn: "Free Consultation",
    not_found: "Course not found",
    back_link: "Back to Courses",
    breadcrumb_home: "Home",
    breadcrumb_courses: "Courses",
    unit_lessons: "lessons"
  },
  ja: {
    page_title: "教育プログラム",
    page_desc: "初級から上級まで体系的に設計されたカリキュラムで、日本語を最も効率的に習得します。",
    view_detail: "詳細を見る",
    instructor: "講師",
    last_updated: "最終更新: 2025年10月",
    learn_title: "学習内容",
    achieve_title: "受講後の成果",
    require_title: "受講要件",
    duration: "期間",
    lessons: "レッスン数",
    level: "レベル",
    register_btn: "今すぐ申し込む",
    consult_btn: "無料相談",
    not_found: "コースが見つかりません",
    back_link: "コース一覧に戻る",
    breadcrumb_home: "ホーム",
    breadcrumb_courses: "コース",
    unit_lessons: "回"
  }
};

// 2. DỮ LIỆU KHÓA HỌC (Dynamic Data - Course Details)
export const coursesData = {
  // --- VIETNAMESE ---
  vi: {
    "n5-n4": {
      id: "n5-n4",
      title: "Chương trình Sơ cấp (N5 – N4)",
      shortDesc: "Xây dựng nền tảng vững chắc về từ vựng, ngữ pháp và giao tiếp cơ bản cho người mới bắt đầu.",
      image: sutdents_whychooseus,
      instructor: "Nguyễn Văn A",
      description: "Khóa học toàn diện dành cho người mới bắt đầu tiếp xúc với tiếng Nhật. Chúng tôi tập trung vào việc xây dựng nền tảng vững chắc, giúp học viên không chỉ thi đỗ JLPT mà còn giao tiếp được trong đời sống.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "4 - 5 tháng",
      lessons: 80,
      level: "Sơ cấp",
      price: "3.500.000đ",
      learn: [
        "Nắm vững 2 bảng chữ cái Hiragana & Katakana",
        "800 từ vựng & 100 mẫu ngữ pháp căn bản",
        "Kỹ năng nghe – nói chủ đề chào hỏi, mua sắm, gia đình",
        "Đọc hiểu các đoạn văn ngắn, biển báo đơn giản"
      ],
      achieve: [
        "Giao tiếp tự tin trong các tình huống cơ bản",
        "Đủ kiến thức thi đỗ JLPT N5 và N4",
        "Hiểu văn hóa ứng xử cơ bản của người Nhật",
        "Nền tảng vững chắc để lên Trung cấp"
      ],
      requirements: ["Không yêu cầu kiến thức nền", "Cam kết học 1 tiếng/ngày"]
    },
    n3: {
      id: "n3",
      title: "Chương trình Trung cấp (N3)",
      shortDesc: "Phát triển khả năng nghe, đọc hiểu và giao tiếp tự nhiên với các chủ đề thường nhật.",
      image: sutdents_whychooseus,
      instructor: "Trần Minh Tú",
      description: "Cầu nối quan trọng giữa sơ cấp và cao cấp. Khóa học N3 giúp bạn thoát khỏi 'tiếng Nhật sách vở' để tiến tới tiếng Nhật thực tế dùng trong công việc và đời sống.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "6 tháng",
      lessons: 120,
      level: "Trung cấp",
      price: "4.200.000đ",
      learn: [
        "Hơn 1000 từ vựng và 150 mẫu ngữ pháp trung cấp",
        "Luyện nghe hội thoại tốc độ tự nhiên",
        "Đọc hiểu các bài báo ngắn, email công việc",
        "Kỹ năng dịch câu phức"
      ],
      achieve: [
        "Tự tin giao tiếp với người Nhật về chủ đề đời sống",
        "Đọc hiểu văn bản thông thường không quá chuyên sâu",
        "Đủ trình độ làm việc tại nhà hàng, khách sạn Nhật",
        "Đạt chứng chỉ JLPT N3"
      ],
      requirements: ["Đã hoàn thành N4 hoặc tương đương", "Vượt qua bài test đầu vào"]
    },
    n2: {
      id: "n2",
      title: "Chương trình Cao cấp Cơ bản (N2)",
      shortDesc: "Tập trung đọc hiểu sâu, ngữ pháp nâng cao và chuẩn bị cho môi trường doanh nghiệp.",
      image: sutdents_whychooseus,
      instructor: "Yamamoto Ken",
      description: "Khóa học chuyên sâu dành cho những bạn muốn làm việc chính thức tại doanh nghiệp Nhật Bản. Tập trung mạnh vào Kính ngữ, Đọc hiểu thương mại và Nghe hiểu tin tức.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "6 - 8 tháng",
      lessons: 150,
      level: "Cao cấp",
      price: "5.500.000đ",
      learn: [
        "Từ vựng chuyên ngành kinh tế, xã hội",
        "Đọc hiểu báo chí, tạp chí, văn bản hành chính",
        "Thành thạo Kính ngữ (Keigo) trong công việc",
        "Luyện đề thi N2 chuyên sâu"
      ],
      achieve: [
        "Làm việc văn phòng tại công ty Nhật (Biên/Phiên dịch)",
        "Nghe hiểu bản tin thời sự NHK",
        "Đạt chứng chỉ JLPT N2 - Tiêu chuẩn vàng xin việc",
        "Thuyết trình cơ bản bằng tiếng Nhật"
      ],
      requirements: ["Đã có chứng chỉ N3", "Quyết tâm cao độ"]
    },
    n1: {
      id: "n1",
      title: "Chương trình Cao cấp Nâng cao (N1)",
      shortDesc: "Rèn luyện tư duy ngôn ngữ như người bản xứ, phân tích và diễn đạt ý tưởng phức tạp.",
      image: sutdents_whychooseus,
      instructor: "Dr. Lê Thu Hà",
      description: "Đỉnh cao của tiếng Nhật học thuật và ứng dụng. Khóa học không chỉ dạy tiếng Nhật mà còn dạy về tư duy logic, văn hóa sâu sắc và khả năng ngôn ngữ tinh tế.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "8 - 10 tháng",
      lessons: 180,
      level: "Chuyên gia",
      price: "6.500.000đ",
      learn: [
        "Ngữ pháp cổ và văn phong viết luận",
        "Từ vựng trừu tượng, quán dụng ngữ khó",
        "Đọc hiểu cái bài xã luận, triết học",
        "Nghe hiểu các bài giảng đại học, tin tức chuyên sâu"
      ],
      achieve: [
        "Đọc hiểu mọi loại văn bản tiếng Nhật",
        "Giao tiếp, tranh luận như người bản xứ",
        "Đủ trình độ nghiên cứu sinh tại Nhật",
        "Đạt JLPT N1"
      ],
      requirements: ["Đã có N2 cứng (trên 120 điểm)", "Tư duy logic tốt"]
    },
    "conversation-basic": {
      id: "conversation-basic",
      title: "Chương trình Hội thoại Căn bản",
      shortDesc: "Học giao tiếp thực tế qua các tình huống thông dụng, phản xạ nhanh khi gặp người Nhật.",
      image: sutdents_whychooseus,
      instructor: "Sato Yui",
      description: "Quên đi nỗi sợ 'biết ngữ pháp nhưng không nói được'. Khóa học tập trung 100% vào nghe và nói, sửa phát âm (Intonation) chuẩn Tokyo ngay từ đầu.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "3 tháng",
      lessons: 36,
      level: "Sơ cấp",
      price: "2.800.000đ",
      learn: [
        "Phát âm chuẩn (Trọng âm, ngữ điệu)",
        "20 chủ đề giao tiếp sống còn (Sân bay, Siêu thị, Bệnh viện)",
        "Văn hóa Aizuchi (cách phản hồi) khi nói chuyện",
        "Body language của người Nhật"
      ],
      achieve: [
        "Tự tin bắt chuyện với người Nhật",
        "Xử lý tình huống khi đi du lịch Nhật Bản",
        "Không còn ngại sai khi nói"
      ],
      requirements: ["Biết bảng chữ cái và ngữ pháp bài 1-10 Minna"]
    },
    "conversation-advanced": {
      id: "conversation-advanced",
      title: "Chương trình Hội thoại Nâng cao",
      shortDesc: "Cải thiện phản xạ, kỹ năng trình bày (Presentation) và tranh luận chuyên nghiệp.",
      image: sutdents_whychooseus,
      instructor: "Tanaka Hiroshi",
      description: "Dành cho các bạn đã có N3/N2 nhưng vẫn 'câm' hoặc nói lắp bắp. Khóa học mô phỏng môi trường công sở, họp hành và đàm phán.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "4 tháng",
      lessons: 48,
      level: "Cao cấp",
      price: "4.000.000đ",
      learn: [
        "Kỹ năng thuyết trình (Presentation)",
        "Kỹ năng đàm phán, thương lượng",
        "Cách nói giảm nói tránh (Kushon-kotoba)",
        "Phản biện ý kiến một cách lịch sự"
      ],
      achieve: [
        "Làm chủ cuộc họp bằng tiếng Nhật",
        "Diễn đạt ý tưởng phức tạp trôi chảy",
        "Phong thái làm việc chuyên nghiệp"
      ],
      requirements: ["Trình độ N3 cứng trở lên"]
    }
  },

  // --- ENGLISH ---
  en: {
    "n5-n4": {
      id: "n5-n4",
      title: "Beginner Program (N5 – N4)",
      shortDesc: "Build a solid foundation in vocabulary, grammar, and basic communication for beginners.",
      image: sutdents_whychooseus,
      instructor: "Nguyen Van A",
      description: "A comprehensive course for beginners. We focus on building a solid foundation, helping students not only pass JLPT but also communicate in daily life.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "4 - 5 months",
      lessons: 80,
      level: "Beginner",
      price: "3,500,000 VND",
      learn: [
        "Master Hiragana & Katakana alphabets",
        "800 vocabulary words & 100 basic grammar patterns",
        "Listening & Speaking: Greetings, shopping, family topics",
        "Reading simple paragraphs and signs"
      ],
      achieve: [
        "Communicate confidently in basic situations",
        "Knowledge sufficient to pass JLPT N5 and N4",
        "Understand basic Japanese behavioral culture",
        "Solid foundation for Intermediate level"
      ],
      requirements: ["No prior knowledge required", "Commit to study 1 hour/day"]
    },
    n3: {
      id: "n3",
      title: "Intermediate Program (N3)",
      shortDesc: "Develop listening, reading comprehension, and natural communication skills with daily topics.",
      image: sutdents_whychooseus,
      instructor: "Tran Minh Tu",
      description: "An important bridge between beginner and advanced levels. The N3 course helps you move beyond 'textbook Japanese' to real-life Japanese used in work and daily life.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "6 months",
      lessons: 120,
      level: "Intermediate",
      price: "4,200,000 VND",
      learn: [
        "Over 1000 vocabulary words & 150 N3 grammar patterns",
        "Practice listening to natural speed conversations",
        "Read short articles and work emails",
        "Skills to translate complex sentences"
      ],
      achieve: [
        "Confidently communicate with Japanese people about life topics",
        "Read general texts without too much difficulty",
        "Qualified to work in Japanese restaurants and hotels",
        "Achieve JLPT N3 certificate"
      ],
      requirements: ["Completed N4 or equivalent", "Pass entrance test"]
    },
    n2: {
      id: "n2",
      title: "Advanced Basic Program (N2)",
      shortDesc: "Focus on deep reading comprehension, advanced grammar, and preparation for the corporate environment.",
      image: sutdents_whychooseus,
      instructor: "Yamamoto Ken",
      description: "An intensive course for those who want to work officially in Japanese companies. Strong focus on Keigo (Honorifics), Business Reading, and News Listening.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "6 - 8 months",
      lessons: 150,
      level: "Advanced",
      price: "5,500,000 VND",
      learn: [
        "Vocabulary for economics and society",
        "Read newspapers, magazines, administrative documents",
        "Mastery of Keigo (Honorifics) in work",
        "Intensive N2 exam preparation"
      ],
      achieve: [
        "Work in office roles at Japanese companies (Translation/Interpreting)",
        "Understand NHK news broadcasts",
        "Achieve JLPT N2 - The gold standard for job hunting",
        "Basic presentation in Japanese"
      ],
      requirements: ["Hold N3 certificate", "High determination"]
    },
    n1: {
      id: "n1",
      title: "Advanced High Program (N1)",
      shortDesc: "Train language thinking like a native, analyze and express complex ideas.",
      image: sutdents_whychooseus,
      instructor: "Dr. Le Thu Ha",
      description: "The pinnacle of academic and applied Japanese. This course teaches not only the language but also logical thinking, deep culture, and refined language skills.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "8 - 10 months",
      lessons: 180,
      level: "Expert",
      price: "6,500,000 VND",
      learn: [
        "Classical grammar and essay writing style",
        "Abstract vocabulary, difficult idioms",
        "Read editorials and philosophical texts",
        "Listen to university lectures and in-depth news"
      ],
      achieve: [
        "Read and understand all types of Japanese texts",
        "Communicate and debate like a native",
        "Qualified for postgraduate research in Japan",
        "Achieve JLPT N1"
      ],
      requirements: ["Solid N2 (over 120 points)", "Good logical thinking"]
    },
    "conversation-basic": {
      id: "conversation-basic",
      title: "Basic Conversation Program",
      shortDesc: "Learn practical communication through common situations, quick reflexes when meeting Japanese people.",
      image: sutdents_whychooseus,
      instructor: "Sato Yui",
      description: "Forget the fear of 'knowing grammar but not speaking'. This course focuses 100% on listening and speaking, correcting Tokyo standard intonation from the start.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "3 months",
      lessons: 36,
      level: "Beginner",
      price: "2,800,000 VND",
      learn: [
        "Standard pronunciation (Accent, intonation)",
        "20 survival topics (Airport, Supermarket, Hospital)",
        "Aizuchi culture (how to respond) in conversation",
        "Japanese body language"
      ],
      achieve: [
        "Confidently initiate conversations with Japanese people",
        "Handle situations when traveling in Japan",
        "No longer afraid of making mistakes when speaking"
      ],
      requirements: ["Know alphabets and Minna grammar lessons 1-10"]
    },
    "conversation-advanced": {
      id: "conversation-advanced",
      title: "Advanced Conversation Program",
      shortDesc: "Improve reflexes, presentation skills, and professional debate.",
      image: sutdents_whychooseus,
      instructor: "Tanaka Hiroshi",
      description: "For those who have N3/N2 but still 'freeze' or stutter. The course simulates office environments, meetings, and negotiations.",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "4 months",
      lessons: 48,
      level: "Advanced",
      price: "4,000,000 VND",
      learn: [
        "Presentation skills",
        "Negotiation and bargaining skills",
        "Cushion words (Kushon-kotoba)",
        "Polite argumentation and rebuttal"
      ],
      achieve: [
        "Master meetings in Japanese",
        "Express complex ideas fluently",
        "Professional working demeanor"
      ],
      requirements: ["Solid N3 level or above"]
    }
  },

  // --- JAPANESE ---
  ja: {
    "n5-n4": {
      id: "n5-n4",
      title: "初級プログラム (N5 – N4)",
      shortDesc: "初心者向けに、語彙、文法、基本的なコミュニケーションの確固たる基礎を築きます。",
      image: sutdents_whychooseus,
      instructor: "グエン・ヴァン・A",
      description: "初心者のための包括的なコースです。JLPT合格だけでなく、日常生活での会話能力も身につけるための強固な基盤を作ります。",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "4 - 5 ヶ月",
      lessons: 80,
      level: "初級",
      price: "3,500,000 ドン",
      learn: [
        "ひらがな・カタカナの完全習得",
        "800語彙＆100基本文法",
        "挨拶、買い物、家族などのトピックでのリスニング・スピーキング",
        "短い文章や看板の読解"
      ],
      achieve: [
        "基本的な場面で自信を持って会話できる",
        "JLPT N5およびN4に合格する知識",
        "日本人の基本的な行動文化の理解",
        "中級へ進むための確かな基礎"
      ],
      requirements: ["事前知識不要", "1日1時間の学習コミットメント"]
    },
    n3: {
      id: "n3",
      title: "中級プログラム (N3)",
      shortDesc: "リスニング、読解、そして日常的なトピックでの自然なコミュニケーション能力を養います。",
      image: sutdents_whychooseus,
      instructor: "チャン・ミン・トゥ",
      description: "初級から上級への重要な架け橋です。N3コースは「教科書日本語」を卒業し、仕事や生活で使える実践的な日本語へとステップアップします。",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "6 ヶ月",
      lessons: 120,
      level: "中級",
      price: "4,200,000 ドン",
      learn: [
        "1000語彙以上＆150のN3文法",
        "ナチュラルスピードの会話リスニング練習",
        "短い記事や業務メールの読解",
        "複文を翻訳するスキル"
      ],
      achieve: [
        "生活の話題について日本人と自信を持って話せる",
        "専門的すぎない一般的な文章を読める",
        "日系のレストランやホテルで働けるレベル",
        "JLPT N3 合格"
      ],
      requirements: ["N4修了または同等レベル", "入学テスト合格"]
    },
    n2: {
      id: "n2",
      title: "上級基礎プログラム (N2)",
      shortDesc: "深い読解力、高度な文法、そして企業環境への準備に重点を置きます。",
      image: sutdents_whychooseus,
      instructor: "山本 健",
      description: "日系企業で正社員として働きたい方のための集中コースです。敬語、ビジネス読解、ニュースの聴解に重点を置いています。",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "6 - 8 ヶ月",
      lessons: 150,
      level: "上級",
      price: "5,500,000 ドン",
      learn: [
        "経済・社会に関する専門用語",
        "新聞、雑誌、行政文書の読解",
        "ビジネスにおける敬語の習得",
        "徹底したN2試験対策"
      ],
      achieve: [
        "日系企業でのオフィス業務（翻訳・通訳）が可能",
        "NHKニュースの理解",
        "就職活動のゴールドスタンダードであるJLPT N2取得",
        "日本語での基本的なプレゼンテーション"
      ],
      requirements: ["N3資格保持", "高いやる気"]
    },
    n1: {
      id: "n1",
      title: "最上級プログラム (N1)",
      shortDesc: "ネイティブのような言語思考、複雑なアイデアの分析と表現を鍛えます。",
      image: sutdents_whychooseus,
      instructor: "レ・トゥ・ハ博士",
      description: "学術的かつ応用的な日本語の頂点です。言語だけでなく、論理的思考、深い文化理解、洗練された言語能力を教えます。",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "8 - 10 ヶ月",
      lessons: 180,
      level: "エキスパート",
      price: "6,500,000 ドン",
      learn: [
        "古典文法と論文の書き言葉",
        "抽象的な語彙、難解な慣用句",
        "社説や哲学的な文章の読解",
        "大学の講義や専門的なニュースの聴解"
      ],
      achieve: [
        "あらゆる種類の日本語文章の読解",
        "ネイティブと同様のコミュニケーションと議論",
        "日本での大学院研究生レベル",
        "JLPT N1 合格"
      ],
      requirements: ["確実なN2（120点以上）", "優れた論理的思考力"]
    },
    "conversation-basic": {
      id: "conversation-basic",
      title: "基礎会話プログラム",
      shortDesc: "一般的な状況を通じた実践的なコミュニケーションと、日本人と会った際の素早い反応を学びます。",
      image: sutdents_whychooseus,
      instructor: "佐藤 ゆい",
      description: "「文法は知っているが話せない」という恐れをなくします。このコースは聴くことと話すことに100％集中し、最初から東京標準のイントネーションを矯正します。",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "3 ヶ月",
      lessons: 36,
      level: "初級",
      price: "2,800,000 ドン",
      learn: [
        "標準的な発音（アクセント、イントネーション）",
        "20のサバイバルトピック（空港、スーパー、病院など）",
        "会話における相槌文化",
        "日本人のボディランゲージ"
      ],
      achieve: [
        "日本人と自信を持って会話を始められる",
        "日本旅行時のトラブル対応",
        "話すときの間違いを恐れなくなる"
      ],
      requirements: ["ひらがな・カタカナと「みんなの日本語」1-10課の文法知識"]
    },
    "conversation-advanced": {
      id: "conversation-advanced",
      title: "上級会話プログラム",
      shortDesc: "反射神経、プレゼンテーションスキル、プロフェッショナルな議論能力を向上させます。",
      image: sutdents_whychooseus,
      instructor: "田中 博",
      description: "N3/N2を持っているが、まだ言葉に詰まったり吃音があったりする方向け。オフィス環境、会議、交渉のシミュレーションを行います。",
      video: "youtube.com/watch?v=mPLxgj1sI_k",
      duration: "4 ヶ月",
      lessons: 48,
      level: "上級",
      price: "4,000,000 ドン",
      learn: [
        "プレゼンテーションスキル",
        "交渉と駆け引きのスキル",
        "クッション言葉",
        "丁寧な反論と議論"
      ],
      achieve: [
        "日本語での会議を主導できる",
        "複雑なアイデアを流暢に表現できる",
        "プロフェッショナルな勤務態度"
      ],
      requirements: ["確実なN3レベル以上"]
    }
  }
};