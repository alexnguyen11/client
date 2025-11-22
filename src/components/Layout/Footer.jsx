import { logoNoBg } from "@/assets/logo";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { Facebook, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["japanese"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-[#290000] text-white pt-16 pb-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* LAYOUT FIX: 
            Used 'lg:grid-cols-12' to fine-tune widths.
            - Branding gets 5 cols (40%+).
            - Links get 2 cols each (making them narrower and closer).
            - Contact gets 3 cols (for wider address text).
            - Gap reduced to 'gap-8'.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* COLUMN 1: BRANDING (Takes 5/12 space) */}
          <div className="lg:col-span-5 lg:pr-12">
            <Link href="/" className="group flex items-center gap-3 mb-6 select-none w-fit">
              <div className="shrink-0 transition-transform duration-500 ease-out group-hover:scale-110">
                <Image
                  src={logoNoBg}
                  width={68} 
                  height={68}
                  alt="Takechi Logo"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`${notoSansJP.className} text-xl md:text-2xl font-bold leading-none text-white transition-colors duration-300 group-hover:text-red-500`}>
                  Takechi Gengo Gakuin
                </span>
                <span className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.25em] mt-1.5 transition-colors duration-300 group-hover:text-white">
                  Takechi Language Academy
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Takechi là nơi giao thoa của những giá trị truyền thống, nơi chắp cánh cho tri thức hóa thành sức mạnh, mở ra cánh cửa đến với xứ sở Phù Tang.
            </p>
            
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook fontSize="small"/>} href="#" />
              <SocialIcon icon={<Instagram fontSize="small"/>} href="#" />
              <SocialIcon icon={<YouTube fontSize="small"/>} href="#" />
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Takes 2/12 space - Compact) */}
          <div className="lg:col-span-2">
            <h3 className={`text-base font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-red-700 inline-block pb-1 ${notoSansJP.className}`}>
              Liên Kết
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <FooterLink href="/about">Về Chúng Tôi</FooterLink>
              <FooterLink href="/courses">Các Khóa Học</FooterLink>
              <FooterLink href="/schedule">Lịch Khai Giảng</FooterLink>
              <FooterLink href="/blog">Tin Tức</FooterLink>
              <FooterLink href="/contact">Liên Hệ</FooterLink>
            </ul>
          </div>

          {/* COLUMN 3: COURSES (Takes 2/12 space - Compact) */}
          <div className="lg:col-span-2">
            <h3 className={`text-base font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-red-700 inline-block pb-1 ${notoSansJP.className}`}>
              Chương Trình
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <FooterLink href="/courses/n5-n4">Sơ Cấp (N5-N4)</FooterLink>
              <FooterLink href="/courses/n3">Trung Cấp (N3)</FooterLink>
              <FooterLink href="/courses/n2">Cao Cấp (N2)</FooterLink>
              <FooterLink href="/courses/kaiwa">Luyện Kaiwa</FooterLink>
              <FooterLink href="/courses/jlpt">Luyện Thi JLPT</FooterLink>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO (Takes 3/12 space - Wider) */}
          <div className="lg:col-span-3">
            <h3 className={`text-base font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-red-700 inline-block pb-1 ${notoSansJP.className}`}>
              Liên Hệ
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <LocationOn className="text-red-500 mt-0.5 shrink-0 w-5" fontSize="small" />
                <span className="leading-tight">
                  Số 123, Đường ABC, Quận XYZ, TP. HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0 w-5" fontSize="small" />
                <a href="tel:+84912345678" className="hover:text-white transition-colors">
                  0912 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Email className="text-red-500 shrink-0 w-5" fontSize="small" />
                <a href="mailto:info@takechi.edu.vn" className="hover:text-white transition-colors">
                  info@takechi.edu.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER & COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">
            © 2025 <span className="text-gray-300 font-medium">Takechi Inc.</span>. All Rights Reserved.
          </span>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-red-400 hover:translate-x-1 transition-all duration-300 block w-fit">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;