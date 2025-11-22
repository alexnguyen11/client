"use client"
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    dob: "",
    studyGoal: "",
    pastExperience: "",
    expectations: "",
    weeklyAvailability: "",
    currentJob: "",
    workingHours: "",
    futurePlans: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.");
    // TODO: gửi dữ liệu lên backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
          Đăng Ký Học Viên
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* I) Thông tin cơ bản */}
          <h2 className="text-xl font-semibold text-gray-800">
            I. Thông Tin Cơ Bản
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Họ tên học viên
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Ngày tháng năm sinh
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Địa chỉ cư trú hiện tại
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
          </div>

          {/* II) Mục câu hỏi */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            II. Câu Hỏi
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">
                A. Mục tiêu học tập và thời gian dự định trong bao lâu?
              </label>
              <textarea
                name="studyGoal"
                value={formData.studyGoal}
                onChange={handleChange}
                rows={2}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                B. Đã từng học tiếng Nhật trong bao lâu và từng học ở trung tâm
                nào?
              </label>
              <textarea
                name="pastExperience"
                value={formData.pastExperience}
                onChange={handleChange}
                rows={2}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                C. Mong muốn đạt được điều gì sau khóa học?
              </label>
              <textarea
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                rows={2}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                D. Thời gian 1 tuần có thể học được bao nhiêu buổi?
              </label>
              <input
                type="text"
                name="weeklyAvailability"
                value={formData.weeklyAvailability}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                E. Công việc hiện tại
              </label>
              <input
                type="text"
                name="currentJob"
                value={formData.currentJob}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                F. Thời gian làm việc
              </label>
              <input
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                G. Có dự định thay đổi công việc trong tương lai không?
              </label>
              <input
                type="text"
                name="futurePlans"
                value={formData.futurePlans}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 text-white rounded-xl font-semibold shadow hover:bg-red-700 transition"
            >
              Đăng Ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
