"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { formSections, initialFormData } from "@/data/registrationForm";
import {
  ArrowForward,
  Check,
  ArrowBack,
  Home,
  MenuBook,
  TravelExplore,
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const SignupPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const topRef = useRef(null);

  const totalSteps = formSections.length;
  const currentSectionData = formSections[currentStep - 1];
  const isLastStep = currentStep === totalSteps;

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep, isSubmitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Final Data:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Spacer: Matches the top of the dark gradient or the light gray */}
      <div
        className={`h-20 transition-all duration-700 ease-in-out 
        ${isSubmitted ? "bg-gray-900" : "bg-gray-50"}`}
      ></div>

      {/* OUTER CONTAINER: Now uses a rich dark radial gradient on success */}
      <div
        className={`min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans transition-all duration-700 ease-in-out bg-fixed
        ${
          isSubmitted
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black"
            : "bg-gray-50"
        }`}
      >
        <div
          ref={topRef}
          className={`max-w-6xl w-full overflow-hidden flex flex-col lg:flex-row min-h-[650px] animate-fadeIn transition-all duration-700
            ${
              isSubmitted
                ? "bg-transparent shadow-none" // Transparent wrapper so SuccessView (White) pops
                : "bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100"
            }`}
        >
          {isSubmitted ? (
            <SuccessView />
          ) : (
            <>
              {/* --- MOBILE BANNER --- */}
              <div className="lg:hidden w-full h-56 relative bg-red-900 shrink-0">
                <Image
                  src={currentSectionData.sideContent.image}
                  alt={currentSectionData.sideContent.title}
                  fill
                  className="object-cover opacity-60 mix-blend-overlay"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {currentStep}/{totalSteps}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight shadow-sm">
                    {currentSectionData.sideContent.title}
                  </h3>
                </div>
              </div>

              {/* --- LEFT COLUMN: FORM --- */}
              <div className="w-full lg:w-3/5 p-8 sm:p-12 flex flex-col relative">
                <div className="hidden lg:flex items-center justify-between mb-10">
                  <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                      Đăng Ký Học Viên
                    </h1>
                    <p className="text-gray-500 text-sm mt-2 font-medium">
                      Điền thông tin để nhận lộ trình tư vấn.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {[...Array(totalSteps)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2.5 w-12 rounded-full transition-all duration-500 ease-in-out ${
                          idx + 1 <= currentStep
                            ? "bg-gradient-to-r from-red-600 to-red-500"
                            : "bg-gray-100"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                <form
                  ref={formRef}
                  onSubmit={isLastStep ? handleFinalSubmit : handleNext}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100 lg:hidden">
                      {currentSectionData.title}
                    </h2>
                    <h2 className="hidden lg:block text-lg font-bold text-red-700 uppercase tracking-wide mb-6">
                      {currentSectionData.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {currentSectionData.fields.map((field) => (
                        <div
                          key={field.name}
                          className={
                            field.colSpan === 2
                              ? "md:col-span-2"
                              : "md:col-span-1"
                          }
                        >
                          <label
                            htmlFor={field.name}
                            className="block text-sm font-bold text-gray-700 mb-2 ml-1"
                          >
                            {field.label}{" "}
                            {field.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </label>

                          {field.type === "textarea" ? (
                            <textarea
                              id={field.name}
                              name={field.name}
                              rows={3}
                              value={formData[field.name]}
                              onChange={handleChange}
                              placeholder={field.placeholder || ""}
                              required={field.required}
                              className="w-full px-5 py-4 rounded-xl border border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-red-200 focus:ring-4 focus:ring-red-500/10 transition-all duration-200 resize-none font-medium text-[15px]"
                            />
                          ) : (
                            <input
                              id={field.name}
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              placeholder={field.placeholder || ""}
                              required={field.required}
                              className="w-full px-5 py-4 rounded-xl border border-transparent bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-red-200 focus:ring-4 focus:ring-red-500/10 transition-all duration-200 font-medium text-[15px]"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 mt-auto flex items-center gap-4">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold rounded-xl transition-all flex items-center gap-2 group"
                      >
                        <ArrowBack
                          className="text-gray-400 group-hover:text-gray-600 transition-colors"
                          fontSize="small"
                        />
                        <span className="hidden sm:inline">Quay lại</span>
                      </button>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-red-500/30 transition-all duration-300 
                        ${
                          loading
                            ? "bg-gray-400 cursor-not-allowed shadow-none"
                            : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 hover:shadow-red-600/40 hover:-translate-y-0.5"
                        }`}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Đang xử lý...
                        </span>
                      ) : isLastStep ? (
                        <>
                          <span className="text-lg tracking-wide">
                            Hoàn Tất Đăng Ký
                          </span>
                          <span className="bg-white/20 rounded-full p-1">
                            <Check
                              fontSize="small"
                              className="transform transition-transform group-hover:scale-110"
                            />
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-lg tracking-wide">
                            Tiếp Theo
                          </span>
                          <ArrowForward
                            fontSize="small"
                            className="transform transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* --- DESKTOP SIDEBAR --- */}
              <div className="hidden lg:block lg:w-2/5 relative bg-red-950">
                <Image
                  src={currentSectionData.sideContent.image}
                  alt={currentSectionData.sideContent.title}
                  fill
                  className="object-cover opacity-40 mix-blend-overlay transition-opacity duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/20 to-transparent p-12 flex flex-col justify-between text-white z-10">
                  <div className="flex justify-end">
                    <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 shadow-sm">
                      {currentStep} / {totalSteps}
                    </span>
                  </div>
                  <div className="animate-fadeIn">
                    <h3 className="text-4xl font-bold mb-6 leading-tight text-white/95 drop-shadow-sm">
                      {currentSectionData.sideContent.title}
                    </h3>
                    <p className="text-red-100 text-lg leading-relaxed opacity-90 font-light">
                      {currentSectionData.sideContent.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

/* ==========================================
   Success View Component (WHITE CARD)
   ========================================== */
const SuccessView = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center p-8 sm:p-20 text-center bg-white h-full animate-fadeIn overflow-hidden rounded-3xl shadow-2xl">
      {/* Decorative Background Blobs (Adjusted for Light Mode) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Success Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl shadow-green-100 ring-8 ring-green-50">
            <Check className="text-green-500 text-[5rem] drop-shadow-sm animate-bounce-short" />
          </div>
        </div>

        {/* Text: Dark Gray for Light Background */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Đăng Ký Thành Công!
        </h2>

        <p className="text-gray-500 max-w-xl text-lg leading-relaxed mb-12">
          Cảm ơn bạn đã chọn <strong>Takechi Language Academy</strong>. <br />
          Chúng tôi đã nhận được hồ sơ và sẽ liên hệ tư vấn lộ trình cho bạn
          trong vòng:
          <br />
          <span className="inline-block mt-3 px-4 py-1 bg-red-50 text-red-600 font-bold rounded-full border border-red-100 text-sm uppercase tracking-wider shadow-sm">
            24h Làm Việc
          </span>
        </p>

        {/* Menu Links */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-5">
          <SuccessCard
            href="/"
            icon={<Home fontSize="large" className="text-red-600" />}
            title="Trang Chủ"
            desc="Quay về màn hình chính"
          />

          <SuccessCard
            href="/courses"
            icon={<MenuBook fontSize="large" className="text-blue-600" />}
            title="Xem Khóa Học"
            desc="Tìm hiểu lộ trình N5 - N1"
          />

          <SuccessCard
            href="/japan-explore"
            icon={<TravelExplore fontSize="large" className="text-pink-600" />}
            title="Khám Phá Nhật Bản"
            desc="Văn hóa & Du lịch"
          />
        </div>

        {/* Social Footer */}
        <div className="mt-16 flex flex-col items-center gap-5">
          <div className="flex items-center gap-3 w-full justify-center">
            <div className="h-px w-12 bg-gray-200"></div>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Theo dõi chúng tôi
            </span>
            <div className="h-px w-12 bg-gray-200"></div>
          </div>

          <div className="flex gap-6">
            <SocialLink
              href="#"
              icon={<Facebook />}
              color="hover:text-[#1877F2] hover:bg-blue-50"
            />
            <SocialLink
              href="#"
              icon={<Instagram />}
              color="hover:text-[#E4405F] hover:bg-pink-50"
            />
            <SocialLink
              href="#"
              icon={<YouTube />}
              color="hover:text-[#FF0000] hover:bg-red-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessCard = ({ href, icon, title, desc }) => (
  <Link
    href={href}
    className="group relative bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 overflow-hidden"
  >
    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>

    <div className="mb-4 p-4 bg-gray-50 rounded-2xl shadow-sm group-hover:bg-white group-hover:shadow-md group-hover:scale-110 transition-all duration-300 ring-1 ring-gray-100 relative z-10">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 mb-2 relative z-10 transition-colors">
      {title}
    </h3>
    <p className="text-sm text-gray-500 group-hover:text-gray-600 relative z-10">
      {desc}
    </p>
  </Link>
);

const SocialLink = ({ href, icon, color }) => (
  <a
    href={href}
    // CHANGED: bg-gray-100 (Light) for Light card background
    className={`w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 
    transition-all duration-300 transform hover:scale-110 hover:shadow-md
    ${color}
    `}
  >
    {icon}
  </a>
);

export default SignupPage;
