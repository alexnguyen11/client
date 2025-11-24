"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { wallpaper_signin } from "@/assets/japan";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // 1. Import Context
import { authText } from "@/data/auth"; // 2. Import Data

const SignInPage = () => {
  const router = useRouter();
  const { lang } = useLanguage(); // 3. Get language
  
  // 4. Select text based on language
  const t = authText[lang] || authText["vi"];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://your-backend.com/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        const data = await res.json();
        setError(data.error || t.error_failed);
      }
    } catch (err) {
      console.error(err);
      setError(t.error_generic);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <Image
        src={wallpaper_signin}
        alt="Takechi Gengo Gakuin Signin Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 m-4">
        
        {/* Left Side – Intro */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white bg-black/20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            {t.welcome_prefix}
            <span className="text-red-500 block mt-2 drop-shadow-sm">
              {t.brand_name}
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
            {t.intro}
          </p>

          <p className="italic text-gray-300">
            <Link
              href="/sign-up"
              className="underline text-red-400 font-semibold hover:text-red-500"
            >
              {t.register_link}
            </Link>
            {t.register_suffix}
          </p>
        </div>

        {/* Right Side – Form */}
        <div className="w-full md:w-1/2 bg-white p-10 py-12 sm:p-16 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            {t.login_title}
          </h2>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-center text-red-600 font-medium rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder={t.placeholder_email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3.5 pl-12 pr-4 border border-gray-300 rounded-full 
                focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t.placeholder_password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3.5 pl-12 pr-12 border border-gray-300 rounded-full 
                focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition bg-gray-50 focus:bg-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition p-1"
              >
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition">
                <input
                  type="checkbox"
                  className="accent-red-600 cursor-pointer w-4 h-4"
                />
                <span>{t.remember_me}</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-red-600 hover:text-red-700 hover:underline font-medium"
              >
                {t.forgot_password}
              </Link>
            </div>

            {/* Submit */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-48 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3.5 rounded-full
                hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/30 transform transition-all duration-300"
              >
                {t.btn_login}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;