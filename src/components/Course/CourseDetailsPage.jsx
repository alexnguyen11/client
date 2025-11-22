"use client";

import Link from "next/link";
import { coursesData } from "@/data/courses"; 
import {
  CheckCircle,
  AccessTime,
  MenuBook,
  School,
  PlayCircleFilled,
} from "@mui/icons-material";

const CourseDetailsPage = ({ courseId }) => {
  // Direct lookup from the imported data object (O(1) complexity)
  const course = coursesData[courseId];

  // 404 State
  if (!course)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Khóa học không tồn tại
        </h2>
        <Link href="/courses" className="text-red-600 hover:underline">
          &larr; Quay lại danh sách khóa học
        </Link>
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      {/* 1. HERO SECTION */}
      <div className="bg-gray-900 text-white pt-10 pb-16">
        <div className="h-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">
              Trang Chủ
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition">
              Khóa Học
            </Link>
            <span>/</span>
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
              {course.title}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <School className="text-yellow-400" />
                  <span>
                    Giảng viên:{" "}
                    <strong className="text-white">{course.instructor}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <AccessTime className="text-yellow-400" />
                  <span>Cập nhật lần cuối: Tháng 10/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN (Detailed Info) */}
          <div className="lg:col-span-2 space-y-8">
            {/* What you will learn */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bạn sẽ học được gì?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements (Outcomes) */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kết quả sau khóa học
              </h2>
              <ul className="space-y-4">
                {course.achieve.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Yêu cầu đầu vào
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-gray-400">
                {course.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN (Sticky Sidebar) */}
          <div className="lg:col-span-1 relative">
            <div className="sticky top-24 space-y-6">
              {/* Video Preview Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="relative aspect-video group cursor-pointer bg-black">
                  {/* Placeholder for video thumbnail */}
                  <video
                    className="w-full h-full object-cover opacity-90"
                    poster={course.image}
                    controls
                  >
                    <source src={course.video} type="video/mp4" />
                  </video>
                  {/* Overlay Play Button if using custom image instead of native controls */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                     <PlayCircleFilled className="text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div> */}
                </div>

                <div className="p-6">
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      {course.price}
                    </span>
                    <span className="text-gray-500 line-through text-sm mb-1">
                      6.000.000đ
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-md">
                      Đăng ký ngay
                    </button>
                    <button className="w-full py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg transition">
                      Tư vấn miễn phí
                    </button>
                  </div>

                  <div className="mt-6 space-y-4 text-sm text-gray-600">
                    <div className="flex justify-between border-b pb-2 border-gray-100">
                      <span className="flex items-center gap-2">
                        <AccessTime className="text-gray-400 text-lg" /> Thời
                        lượng
                      </span>
                      <span className="font-medium text-gray-900">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2 border-gray-100">
                      <span className="flex items-center gap-2">
                        <MenuBook className="text-gray-400 text-lg" /> Số bài
                        học
                      </span>
                      <span className="font-medium text-gray-900">
                        {course.lessons} bài
                      </span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="flex items-center gap-2">
                        <School className="text-gray-400 text-lg" /> Trình độ
                      </span>
                      <span className="font-medium text-gray-900">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
