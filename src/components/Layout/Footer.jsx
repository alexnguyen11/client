"use client"

import { logoNoBg } from "@/assets/logo";
import Image from "next/image";
import Link from "next/link";
import { notoSansJP } from "@/utils/textFont";
import { Facebook, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext"; // Import Context
import { footerData } from "@/data/navigation"; // Import Data


const Footer = () => {
  const { lang } = useLanguage(); // Get current language
  const t = footerData[lang] || footerData["vi"]; // Fallback to Vietnamese

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-[#290000] text-white pt-16 pb-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* COLUMN 1: BRANDING */}
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
                  {t.brand.name}
                </span>
                <span className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-[0.25em] mt-1.5 transition-colors duration-300 group-hover:text-white">
                  {t.brand.sub}
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              {t.brand.desc}
            </p>
            
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook fontSize="small"/>} href="#" />
              <SocialIcon icon={<Instagram fontSize="small"/>} href="#" />
              <SocialIcon icon={<YouTube fontSize="small"/>} href="#" />
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className={`text-base font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-red-700 inline-block pb-1 ${notoSansJP.className}`}>
              {t.sections.links}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {t.links.map((link, idx) => (
                <FooterLink key={idx} href={link.href}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: COURSES */}
          <div className="lg:col-span-2">
            <h3 className={`text-base font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-red-700 inline-block pb-1 ${notoSansJP.className}`}>
              {t.sections.programs}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {t.programs.map((prog, idx) => (
                <FooterLink key={idx} href={prog.href}>{prog.name}</FooterLink>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="lg:col-span-3">
            <h3 className={`text-base font-bold mb-5 text-white uppercase tracking-wider border-b-2 border-red-700 inline-block pb-1 ${notoSansJP.className}`}>
              {t.sections.contact}
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <LocationOn className="text-red-500 mt-0.5 shrink-0 w-5" fontSize="small" />
                <span className="leading-tight">
                  {t.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0 w-5" fontSize="small" />
                <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {t.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Email className="text-red-500 shrink-0 w-5" fontSize="small" />
                <a href={`mailto:${t.contact.email}`} className="hover:text-white transition-colors">
                  {t.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER & COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">
            {t.bottom.copyright}
          </span>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">{t.bottom.policy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.bottom.terms}</Link>
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