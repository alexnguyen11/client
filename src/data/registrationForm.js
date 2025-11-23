// src/data/registrationForm.js

import { japan_whychooseus } from "@/assets/japan";

export const formSections = [
  {
    id: "basic_info",
    title: "I. Thông Tin Cơ Bản",
    // Content for the right-hand sidebar when on Step 1
    sideContent: {
      image: japan_whychooseus,
      title: "Khởi đầu hành trình Nhật ngữ",
      description:
        "Hãy chia sẻ thông tin liên lạc chính xác để chúng tôi có thể kết nối và hỗ trợ bạn nhanh nhất. Mọi thông tin cá nhân đều được bảo mật tuyệt đối.",
    },
    fields: [
      {
        name: "fullName",
        label: "Họ tên học viên",
        type: "text",
        required: true,
        placeholder: "Nguyễn Văn A",
        colSpan: 1, // 1 = Half width
      },
      {
        name: "dob",
        label: "Ngày tháng năm sinh",
        type: "date",
        required: true,
        colSpan: 1,
      },
      {
        name: "phone",
        label: "Số điện thoại",
        type: "tel",
        required: true,
        placeholder: "0912 345 678",
        colSpan: 1,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "example@gmail.com",
        colSpan: 1,
      },
      {
        name: "address",
        label: "Địa chỉ cư trú hiện tại",
        type: "text",
        required: true,
        placeholder: "Số nhà, đường, quận/huyện, thành phố...",
        colSpan: 2, // 2 = Full width
      },
    ],
  },
  {
    id: "survey",
    title: "II. Khảo Sát Học Tập & Công Việc",
    // Content for the right-hand sidebar when on Step 2
    sideContent: {
      image: japan_whychooseus,
      title: "Định hướng tương lai",
      description:
        "Những câu hỏi này giúp giảng viên nắm bắt mục tiêu sự nghiệp và kỳ vọng của bạn, từ đó tối ưu hóa lộ trình học tập để đạt kết quả cao nhất.",
    },
    fields: [
      {
        name: "studyGoal",
        label: "A. Mục tiêu học tập và thời gian dự định trong bao lâu?",
        type: "textarea",
        required: true,
        placeholder: "VD: Muốn lấy bằng N3 trong 6 tháng để đi làm...",
        colSpan: 2,
      },
      {
        name: "pastExperience",
        label: "B. Đã từng học tiếng Nhật bao lâu và ở đâu?",
        type: "textarea",
        required: false,
        placeholder: "VD: Đã học 3 tháng tại trung tâm X hoặc tự học online...",
        colSpan: 2,
      },
      {
        name: "expectations",
        label: "C. Mong muốn đạt được điều gì sau khóa học?",
        type: "textarea",
        required: false,
        placeholder: "VD: Giao tiếp tự tin, thi đỗ chứng chỉ...",
        colSpan: 2,
      },
      {
        name: "weeklyAvailability",
        label: "D. Thời gian 1 tuần có thể học được bao nhiêu buổi?",
        type: "text",
        required: false,
        placeholder: "VD: 3 buổi tối (thứ 2-4-6) hoặc cuối tuần...",
        colSpan: 2,
      },
      {
        name: "currentJob",
        label: "E. Công việc hiện tại",
        type: "text",
        required: false,
        placeholder: "VD: Sinh viên / Kỹ sư IT / Nhân viên văn phòng...",
        colSpan: 1,
      },
      {
        name: "workingHours",
        label: "F. Thời gian làm việc",
        type: "text",
        required: false,
        placeholder: "VD: 8h00 - 17h00...",
        colSpan: 1,
      },
      {
        name: "futurePlans",
        label: "G. Có dự định thay đổi công việc trong tương lai không?",
        type: "text",
        required: false,
        placeholder: "VD: Có, dự định chuyển sang công ty Nhật...",
        colSpan: 2,
      },
      {
        name: "salaryExpectations",
        label: "H. Mức lương hiện tại & Mức lương mong muốn sau khi chuyển việc?",
        type: "textarea",
        required: false,
        placeholder: "Hiện tại: ... / Mong muốn: ...",
        colSpan: 2,
      },
    ],
  },
];

// Helper function to generate the empty state object automatically based on the fields above
export const initialFormData = formSections.reduce((acc, section) => {
  section.fields.forEach((field) => {
    acc[field.name] = "";
  });
  return acc;
}, {});