"use client";

import { useState } from "react";
import {
  LocationOn,
  Phone,
  Email,
  ChatBubbleOutline,
  Map,
} from "@mui/icons-material";

const ContactPage = () => {
  // 1. DATA CONFIGURATION
  // Converted to an array to make mapping easier
  const locations = [
    {
      id: "japan",
      name: "Takechi Tochigi",
      sub: "TRỤ SỞ CHÍNH", // Updated: Head Office
      city: "Tochigi",
      country: "JAPAN",
      phone: "+81 90 1234 5678",
      email: "japan@takechi.edu.vn",
      address: ["1-2-3 Nishi-Shinjuku", "Shinjuku-ku, Tochigi, Japan"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.843797619234!2d139.81432131527715!3d36.37564797993074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f67a2b9795555%3A0x3344605963565012!2sTochigi%20Station!5e0!3m2!1sen!2sjp!4v1647855421234!5m2!1sen!2sjp",
    },
    {
      id: "vietnam",
      name: "Takechi Hồ Chí Minh",
      sub: "VĂN PHÒNG ĐẠI DIỆN", // Updated: Rep Office
      city: "Hồ Chí Minh",
      country: "VIETNAM",
      phone: "0912 345 678",
      email: "hcm@takechi.edu.vn",
      address: ["Số 123, Đường ABC, Quận 1", "TP. Hồ Chí Minh, Việt Nam"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424167419799!2d106.69847231480074!3d10.77665399232148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2sHo%20Chi%20Minh%20City%20Hall!5e0!3m2!1sen!2s!4v1647855364821!5m2!1sen!2s",
    },
  ];

  // State stores the ID of the active location
  const [activeId, setActiveId] = useState("japan");

  // Helper to find the current active data object
  const currentData = locations.find((loc) => loc.id === activeId);

  return (
    <div className="min-h-screen bg-[#8B0000] flex flex-col font-sans">
      <div className="h-20" /> {/* Spacer */}

      {/* ------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------ */}
      <div className="text-white pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wide">
            Liên Hệ Với Takechi
          </h1>
          <p className="text-red-100 mb-12 max-w-2xl mx-auto text-lg font-light">
            Takechi luôn sẵn sàng lắng nghe và hỗ trợ bạn trên hành trình chinh
            phục tiếng Nhật.
          </p>

          {/* 2. MAPPED LOCATION SWITCHER */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            
            {locations.map((loc, index) => {
              const isActive = activeId === loc.id;
              // Logic: Even index (0) aligns right, Odd index (1) aligns left (on desktop)
              const isFirstItem = index === 0; 
              const alignmentClass = isFirstItem
                ? "md:text-right md:pr-12"
                : "md:text-left md:pl-12";

              return (
                <div key={loc.id} className="contents">
                  {/* LOCATION BUTTON */}
                  <button
                    onClick={() => setActiveId(loc.id)}
                    className={`group flex-1 text-center transition-all duration-300 ${alignmentClass} ${
                      isActive
                        ? "opacity-100 scale-105"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <h2 className="text-2xl font-bold mb-1 group-hover:text-[#F3CD67] transition-colors">
                      {loc.name}
                    </h2>
                    <p className="text-[#F3CD67] text-xs uppercase tracking-[0.2em] font-bold mb-3">
                      {loc.sub}
                    </p>
                    <div className="text-red-50 text-sm leading-relaxed hidden md:block">
                      {loc.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    {/* Active Indicator Dot (Mobile only) */}
                    {isActive && (
                      <div className="md:hidden w-2 h-2 bg-[#F3CD67] rounded-full mx-auto mt-2"></div>
                    )}
                  </button>

                  {/* DIVIDER LOGIC: Render divider if it's not the last item */}
                  {index < locations.length - 1 && (
                    <>
                      {/* Vertical Divider (Desktop) */}
                      <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-red-400 to-transparent"></div>
                      {/* Horizontal Divider (Mobile) */}
                      <div className="md:hidden w-16 h-px bg-white/20"></div>
                    </>
                  )}
                </div>
              );
            })}

          </div>

          {/* CTA Button */}
          <div className="mt-12 md:mt-16 animate-bounce-slow">
            <button className="bg-[#F3CD67] hover:bg-white hover:text-[#8B0000] text-gray-900 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto ring-4 ring-[#F3CD67]/30">
              <ChatBubbleOutline />
              <span>Tư vấn ngay</span>
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          2. MAP & INFO SECTION
          ------------------------------------------------ */}
      <div className="flex-1 relative bg-gray-100 flex flex-col md:block">
        
        {/* INFO CARD */}
        <div className="relative z-10 md:absolute md:top-12 md:left-12 lg:left-24 w-full md:w-auto md:max-w-sm">
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-8 border-[#8B0000] md:rounded-b-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-light text-gray-800">
                  {currentData.city}
                </h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">
                  {currentData.country}
                </p>
              </div>
              <Map className="text-gray-200 text-4xl" />
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 text-gray-600 group">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#8B0000] transition-colors duration-300">
                  <LocationOn className="text-[#8B0000] group-hover:text-white transition-colors text-sm" />
                </div>
                <p className="text-sm leading-relaxed pt-1">
                  {currentData.address.join(", ")}
                </p>
              </div>

              <div className="flex items-center gap-4 text-gray-600 group">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#8B0000] transition-colors duration-300">
                  <Phone className="text-[#8B0000] group-hover:text-white transition-colors text-sm" />
                </div>
                <p className="text-sm font-medium pt-1">{currentData.phone}</p>
              </div>

              <div className="flex items-center gap-4 text-gray-600 group">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-[#8B0000] transition-colors duration-300">
                  <Email className="text-[#8B0000] group-hover:text-white transition-colors text-sm" />
                </div>
                <p className="text-sm font-medium pt-1">{currentData.email}</p>
              </div>
            </div>

          </div>
        </div>

        {/* MAP CONTAINER */}
        <div className="h-[400px] md:h-[600px] w-full bg-gray-200 relative z-0">
          <iframe
            key={currentData.id} // Force re-render on switch
            src={currentData.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(10%)" }}
            allowFullScreen=""
            loading="lazy"
            title={`${currentData.city} Map`}
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;