"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { wallpaper_signin } from "@/assets/japan";
import Link from "next/link";
import Image from "next/image";

const SignInPage = () => {
  const router = useRouter();
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
        setError(data.error || "Đăng nhập thất bại");
      }
    } catch (err) {
      console.error(err);
      setError("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
        {/* Left Side – Intro */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Chào Mừng Đến Với{" "}
            <span className="text-red-500 block mt-2">
              Takechi Gengo Gakuin
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
            Học tiếng Nhật, mở ra cánh cửa tương lai. Cùng đội ngũ giáo viên
            chuyên nghiệp, bạn sẽ chinh phục ngôn ngữ và văn hóa Nhật Bản.
          </p>

          <p className="italic text-gray-300">
            <Link
              href="/sign-up"
              className="underline text-red-400 font-semibold hover:text-red-500"
            >
              Đăng ký
            </Link>{" "}
            ngay để bắt đầu hành trình của bạn!
          </p>
        </div>

        {/* Right Side – Form */}
        <div className="w-full md:w-1/2 bg-white p-10 py-20 sm:p-30 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Đăng Nhập
          </h2>

          {error && (
            <div className="mb-4 text-center text-red-600 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full 
                focus:border-red-500 focus:ring-2 focus:ring-red-300 outline-none transition"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3 pl-12 pr-12 border border-gray-300 rounded-full 
                focus:border-red-500 focus:ring-2 focus:ring-red-300 outline-none transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-red-600 cursor-pointer"
                />
                <span>Ghi nhớ đăng nhập</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-red-600 hover:underline"
              >
                Quên mật khẩu?
              </Link>
            </div>

            {/* Submit */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="w-48 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 rounded-full
                hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
