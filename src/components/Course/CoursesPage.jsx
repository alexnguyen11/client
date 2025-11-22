"use client";

import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/data/courses";

const CoursesPage = () => {
  // Convert the object back to an array for mapping
  const coursesList = Object.values(coursesData);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="h-20" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Các Chương Trình Đào Tạo
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Lộ trình học tập được thiết kế bài bản từ sơ cấp đến chuyên sâu,
            giúp bạn chinh phục tiếng Nhật một cách hiệu quả nhất.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Level Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {course.level}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors line-clamp-2 h-14">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {course.shortDesc}
                </p>

                {/* Footer Info */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    {course.duration}
                  </span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-red-600 font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    Xem chi tiết <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
