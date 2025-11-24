import { sutdents_whychooseus } from "@/assets/japan";

// 1. Static Text (Headers, Buttons, Intro)
export const sectionTextData = {
  vi: {
    brand: "Takechi Gengo Gakuin",
    heading_1: "Vì sao chọn",
    heading_2: "cho hành trình",
    heading_highlight_1: "Takechi",
    heading_highlight_2: "Tương Lai?",
    intro: "Takechi không chỉ dạy tiếng Nhật, Takechi kiến tạo lộ trình sự nghiệp vững chắc cho bạn tại đất nước mặt trời mọc.",
    cta_button: "Đăng ký tư vấn",
    img_badge_title: "Cam kết đầu ra",
    img_badge_desc: "Hỗ trợ học lại miễn phí nếu không đạt kết quả.",
    audience_title_1: "Ai là người",
    audience_highlight: "phù hợp nhất",
    audience_title_2: "với khóa học?",
    audience_desc: "Tiếng Nhật từ con số 0 – Đỗ JLPT – Tự tin sống & làm việc tại Nhật.",
    card_link: "Xem lộ trình"
  },
  en: {
    brand: "Takechi Gengo Gakuin",
    heading_1: "Why choose",
    heading_2: "for your",
    heading_highlight_1: "Takechi",
    heading_highlight_2: "Future?",
    intro: "Takechi doesn't just teach Japanese; we build a solid career path for you in the Land of the Rising Sun.",
    cta_button: "Register Now",
    img_badge_title: "Outcome Guaranteed",
    img_badge_desc: "Free retake support if results are not met.",
    audience_title_1: "Who is the",
    audience_highlight: "best fit",
    audience_title_2: "for this course?",
    audience_desc: "From Zero to JLPT Pass – Live & Work confidently in Japan.",
    card_link: "View Roadmap"
  },
  ja: {
    brand: "武知言語学院",
    heading_1: "なぜ",
    heading_2: "を選ぶのか",
    heading_highlight_1: "武知 (Takechi)",
    heading_highlight_2: "未来のために？",
    intro: "武知は日本語を教えるだけでなく、日本での確かなキャリアパスを築きます。",
    cta_button: "相談を申し込む",
    img_badge_title: "合格保証",
    img_badge_desc: "結果が出ない場合は無料で再受講をサポート。",
    audience_title_1: "このコースに",
    audience_highlight: "最適な人",
    audience_title_2: "は誰ですか？",
    audience_desc: "ゼロからJLPT合格へ – 日本での生活と仕事を自信を持って。",
    card_link: "詳細を見る"
  }
};

// 2. Target Audience List
export const targetAudienceData = {
  vi: [
    {
      img: sutdents_whychooseus,
      title: "Người mới bắt đầu",
      desc: "Học từ căn bản, lộ trình chậm – chắc – dễ hiểu.",
      link: "/courses/beginner",
    },
    {
      img: sutdents_whychooseus,
      title: "Học sinh – Sinh viên",
      desc: "Cần chứng chỉ JLPT để du học hoặc xin việc.",
      link: "/courses/student",
    },
    {
      img: sutdents_whychooseus,
      title: "Người đi làm",
      desc: "Muốn thăng tiến hoặc làm việc với đối tác Nhật.",
      link: "/courses/worker",
    },
    {
      img: sutdents_whychooseus,
      title: "Kỹ sư – Du học – TTS",
      desc: "Luyện phỏng vấn, hồ sơ & giao tiếp thực tế.",
      link: "/courses/engineer",
    },
    {
      img: sutdents_whychooseus,
      title: "Người yêu văn hoá Nhật",
      desc: "Giao tiếp tự nhiên, anime – J-pop – đời sống.",
      link: "/courses/culture",
    },
    {
      img: sutdents_whychooseus,
      title: "Người lớn tuổi",
      desc: "Phương pháp dễ nhớ, hỗ trợ 1 kèm 1.",
      link: "/courses/senior",
    },
  ],
  en: [
    {
      img: sutdents_whychooseus,
      title: "Beginners",
      desc: "Start from scratch with a solid, easy-to-follow path.",
      link: "/courses/beginner",
    },
    {
      img: sutdents_whychooseus,
      title: "Students",
      desc: "Need JLPT certificates for study abroad or jobs.",
      link: "/courses/student",
    },
    {
      img: sutdents_whychooseus,
      title: "Professionals",
      desc: "Career advancement or working with Japanese partners.",
      link: "/courses/worker",
    },
    {
      img: sutdents_whychooseus,
      title: "Engineers & Interns",
      desc: "Interview prep, paperwork & practical communication.",
      link: "/courses/engineer",
    },
    {
      img: sutdents_whychooseus,
      title: "Culture Lovers",
      desc: "Natural speaking, Anime, J-Pop, and lifestyle.",
      link: "/courses/culture",
    },
    {
      img: sutdents_whychooseus,
      title: "Seniors",
      desc: "Easy memory methods, 1-on-1 support available.",
      link: "/courses/senior",
    },
  ],
  ja: [
    {
      img: sutdents_whychooseus,
      title: "初心者の方",
      desc: "基礎からゆっくり、確実に学べるカリキュラム。",
      link: "/courses/beginner",
    },
    {
      img: sutdents_whychooseus,
      title: "学生の皆様",
      desc: "留学や就職のためのJLPT資格取得を目指す方。",
      link: "/courses/student",
    },
    {
      img: sutdents_whychooseus,
      title: "社会人の方",
      desc: "キャリアアップや日系企業との取引に役立てたい方。",
      link: "/courses/worker",
    },
    {
      img: sutdents_whychooseus,
      title: "エンジニア・実習生",
      desc: "面接練習、書類作成、実践的な会話スキルの習得。",
      link: "/courses/engineer",
    },
    {
      img: sutdents_whychooseus,
      title: "日本文化が好きな方",
      desc: "アニメやJ-POPを通じた自然な会話表現。",
      link: "/courses/culture",
    },
    {
      img: sutdents_whychooseus,
      title: "シニアの方",
      desc: "覚えやすい学習法とマンツーマンサポート。",
      link: "/courses/senior",
    },
  ],
};

// 3. Reasons List
export const reasonsData = {
  vi: [
    {
      title: "Lộ trình chuẩn JLPT",
      desc: "Học chắc nền tảng – cải thiện rõ rệt sau từng buổi.",
    },
    {
      title: "Giáo viên giỏi",
      desc: "Giáo viên Nhật & Việt – kinh nghiệm thực chiến.",
    },
    {
      title: "Bài học ứng dụng",
      desc: "Đặt câu – giao tiếp – tình huống thực tế.",
    },
    {
      title: "Lịch học linh hoạt",
      desc: "Tối – cuối tuần, hỗ trợ học bù, video bài giảng.",
    },
    {
      title: "Hỗ trợ du học – XKLĐ",
      desc: "Tư vấn hồ sơ A→Z, luyện phỏng vấn.",
    },
    {
      title: "Hỗ trợ làm thêm tại Nhật",
      desc: "Combini, quán ăn, khách sạn, kho hàng…",
    },
  ],
  en: [
    {
      title: "Standard JLPT Path",
      desc: "Solid foundation – visible improvement after every class.",
    },
    {
      title: "Expert Teachers",
      desc: "Japanese & Vietnamese instructors with practical experience.",
    },
    {
      title: "Practical Lessons",
      desc: "Sentence building – communication – real-life situations.",
    },
    {
      title: "Flexible Schedule",
      desc: "Evenings/Weekends, makeup classes, video lessons.",
    },
    {
      title: "Study Abroad Support",
      desc: "A-Z profile consulting, interview practice.",
    },
    {
      title: "Part-time Job Support",
      desc: "Konbini, restaurants, hotels, warehouses, etc.",
    },
  ],
  ja: [
    {
      title: "JLPT標準カリキュラム",
      desc: "基礎を固め、授業ごとに確実なレベルアップ。",
    },
    {
      title: "優秀な講師陣",
      desc: "日本人とベトナム人講師による実践的な指導。",
    },
    {
      title: "実践的なレッスン",
      desc: "作文・会話・実際のシチュエーション練習。",
    },
    {
      title: "柔軟なスケジュール",
      desc: "夜間・週末対応、振替授業、ビデオ講義あり。",
    },
    {
      title: "留学・就労サポート",
      desc: "書類作成から面接練習まで徹底サポート。",
    },
    {
      title: "アルバイト紹介",
      desc: "コンビニ、飲食店、ホテル、倉庫業務など。",
    },
  ],
};



export const landingData = {
  vi: {
    badge: "Học Viện Ngôn Ngữ Takechi",
    heading_1: "Tri Thức Là", 
    heading_highlight: "Sức Mạnh",
    subheading: "Chinh phục tiếng Nhật từ N5 đến N1. Lộ trình cá nhân hóa, cam kết đầu ra.",
    search_placeholder: "Tìm kiếm khóa học phù hợp với bạn...",
    search_button: "Tìm kiếm"
  },
  en: {
    badge: "Takechi Language Academy",
    heading_1: "Knowledge Is", 
    heading_highlight: "Power",
    subheading: "Master Japanese from N5 to N1. Personalized roadmap, guaranteed output.",
    search_placeholder: "Find the right course for you...",
    search_button: "Search"
  },
  ja: {
    badge: "武知言語学院",
    heading_1: "知識は",
    heading_highlight: "力なり",
    subheading: "N5からN1まで日本語を制覇。個別カリキュラム、成果を保証します。",
    search_placeholder: "あなたに合ったコースを検索...",
    search_button: "検索"
  }
};