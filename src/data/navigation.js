const navigationData = {
  vi: [
    { name: "Trang Chủ", href: "/" },
    { name: "Giới Thiệu", href: "/about-us" },
    { name: "Khoá Học", href: "/courses" },
    {
      name: "Nhật Bản",
      href: "/japan",
      children: [
        { name: "Visa", href: "/japan/visa" },
        { name: "Cuộc sống", href: "/japan/living" },
        {
          name: "Nhật Bản nâng cao",
          href: "/japan/advanced",
          children: [
            { name: "Tokyo", href: "/japan/advanced/tokyo" },
            { name: "Osaka", href: "/japan/advanced/osaka" },
          ],
        },
      ],
    },
    { name: "Liên Hệ", href: "/contact" },
    { name: "Đăng Ký", href: "/student-sign-up" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Courses", href: "/courses" },
    {
      name: "Japan",
      href: "/japan",
      children: [
        { name: "Visa", href: "/japan/visa" },
        { name: "Living", href: "/japan/living" },
        {
          name: "Advanced Japan",
          href: "/japan/advanced",
          children: [
            { name: "Tokyo", href: "/japan/advanced/tokyo" },
            { name: "Osaka", href: "/japan/advanced/osaka" },
          ],
        },
      ],
    },
    { name: "Contact", href: "/contact" },
    { name: "Sign Up", href: "/student-sign-up" },
  ],
  ja: [
    { name: "ホーム", href: "/" },
    { name: "私たちについて", href: "/about-us" },
    { name: "コース", href: "/courses" },
    {
      name: "日本",
      href: "/japan",
      children: [
        { name: "ビザ", href: "/japan/visa" },
        { name: "生活", href: "/japan/living" },
        {
          name: "日本上級",
          href: "/japan/advanced",
          children: [
            { name: "東京", href: "/japan/advanced/tokyo" },
            { name: "大阪", href: "/japan/advanced/osaka" },
          ],
        },
      ],
    },
    { name: "お問い合わせ", href: "/contact" },
    { name: "申し込む", href: "/student-sign-up" },
  ],
};

const languages = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const footerData = {
  vi: {
    brand: {
      name: "Takechi Gengo Gakuin",
      sub: "Takechi Language Academy",
      desc: "Takechi là nơi giao thoa của những giá trị truyền thống, nơi chắp cánh cho tri thức hóa thành sức mạnh, mở ra cánh cửa đến với xứ sở Phù Tang.",
    },
    sections: {
      links: "Liên Kết",
      programs: "Chương Trình",
      contact: "Liên Hệ",
    },
    links: [
      { name: "Về Chúng Tôi", href: "/about" },
      { name: "Các Khóa Học", href: "/courses" },
      { name: "Lịch Khai Giảng", href: "/schedule" },
      { name: "Tin Tức", href: "/blog" },
      { name: "Liên Hệ", href: "/contact" },
    ],
    programs: [
      { name: "Sơ Cấp (N5-N4)", href: "/courses/n5-n4" },
      { name: "Trung Cấp (N3)", href: "/courses/n3" },
      { name: "Cao Cấp (N2)", href: "/courses/n2" },
      { name: "Luyện Kaiwa", href: "/courses/kaiwa" },
      { name: "Luyện Thi JLPT", href: "/courses/jlpt" },
    ],
    contact: {
      address: "Số 123, Đường ABC, Quận XYZ, TP. HCM",
      phone: "0912 345 678",
      email: "info@takechi.edu.vn",
    },
    bottom: {
      copyright: "© 2025 Takechi Inc. All Rights Reserved.",
      policy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
    },
  },
  en: {
    brand: {
      name: "Takechi Gengo Gakuin",
      sub: "Takechi Language Academy",
      desc: "Takechi is where traditional values meet, empowering knowledge to become strength, opening the door to the Land of the Rising Sun.",
    },
    sections: {
      links: "Quick Links",
      programs: "Programs",
      contact: "Contact Info",
    },
    links: [
      { name: "About Us", href: "/about" },
      { name: "Courses", href: "/courses" },
      { name: "Schedule", href: "/schedule" },
      { name: "News", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    programs: [
      { name: "Beginner (N5-N4)", href: "/courses/n5-n4" },
      { name: "Intermediate (N3)", href: "/courses/n3" },
      { name: "Advanced (N2)", href: "/courses/n2" },
      { name: "Kaiwa Practice", href: "/courses/kaiwa" },
      { name: "JLPT Prep", href: "/courses/jlpt" },
    ],
    contact: {
      address: "123 ABC Street, XYZ District, HCMC",
      phone: "0912 345 678",
      email: "info@takechi.edu.vn",
    },
    bottom: {
      copyright: "© 2025 Takechi Inc. All Rights Reserved.",
      policy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
  ja: {
    brand: {
      name: "Takechi Gengo Gakuin",
      sub: "Takechi Language Academy",
      desc: "武知は伝統的な価値観が交差する場所であり、知識を力に変え、日出ずる国への扉を開く場所です。",
    },
    sections: {
      links: "リンク",
      programs: "プログラム",
      contact: "お問い合わせ",
    },
    links: [
      { name: "当学院について", href: "/about" },
      { name: "コース一覧", href: "/courses" },
      { name: "開講スケジュール", href: "/schedule" },
      { name: "ニュース", href: "/blog" },
      { name: "お問い合わせ", href: "/contact" },
    ],
    programs: [
      { name: "初級 (N5-N4)", href: "/courses/n5-n4" },
      { name: "中級 (N3)", href: "/courses/n3" },
      { name: "上級 (N2)", href: "/courses/n2" },
      { name: "会話練習", href: "/courses/kaiwa" },
      { name: "JLPT対策", href: "/courses/jlpt" },
    ],
    contact: {
      address: "123 ABC Street, XYZ District, HCMC",
      phone: "0912 345 678",
      email: "info@takechi.edu.vn",
    },
    bottom: {
      copyright: "© 2025 Takechi Inc. All Rights Reserved.",
      policy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
};

export { navigationData, languages, footerData };
