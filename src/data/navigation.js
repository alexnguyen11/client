export const navigation = [
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
];