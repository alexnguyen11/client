// src/data/registrationForm.js
import { japan_whychooseus } from "@/assets/japan";

// 1. STATIC UI TEXT (Buttons, Success Messages, Headers)
export const registrationText = {
  vi: {
    page_title: "Đăng Ký Học Viên",
    page_sub: "Hãy điền thông tin chi tiết bên dưới để nhận lộ trình tư vấn.",
    step: "Bước",
    btn_back: "Quay lại",
    btn_next: "Tiếp theo",
    btn_submit: "Hoàn Tất Đăng Ký",
    btn_loading: "Đang xử lý...",
    // Success View
    success_title: "Đăng Ký Thành Công!",
    success_desc_1: "Cảm ơn bạn đã chọn",
    success_desc_2: "Chúng tôi đã nhận được hồ sơ và sẽ liên hệ tư vấn lộ trình cho bạn trong vòng:",
    success_badge: "24h Làm Việc",
    follow_us: "Theo dõi chúng tôi tại",
    menu_home: { title: "Trang Chủ", desc: "Quay về màn hình chính" },
    menu_courses: { title: "Xem Khóa Học", desc: "Tìm hiểu lộ trình N5 - N1" },
    menu_japan: { title: "Khám Phá Nhật Bản", desc: "Văn hóa & Du lịch" }
  },
  en: {
    page_title: "Student Registration",
    page_sub: "Please fill in the details below to receive a consultation roadmap.",
    step: "Step",
    btn_back: "Back",
    btn_next: "Next",
    btn_submit: "Complete Registration",
    btn_loading: "Processing...",
    // Success View
    success_title: "Registration Successful!",
    success_desc_1: "Thank you for choosing",
    success_desc_2: "We have received your profile and will contact you for consultation within:",
    success_badge: "24 Working Hours",
    follow_us: "Follow us on",
    menu_home: { title: "Home", desc: "Back to main screen" },
    menu_courses: { title: "View Courses", desc: "Explore N5 - N1 roadmap" },
    menu_japan: { title: "Explore Japan", desc: "Culture & Travel" }
  },
  ja: {
    page_title: "受講申し込み",
    page_sub: "以下の詳細をご記入ください。最適な学習プランをご提案します。",
    step: "ステップ",
    btn_back: "戻る",
    btn_next: "次へ",
    btn_submit: "登録を完了する",
    btn_loading: "処理中...",
    // Success View
    success_title: "登録が完了しました！",
    success_desc_1: "この度は",
    success_desc_2: "をお選びいただきありがとうございます。プロフィールを受け取りました。以下の時間内にご連絡いたします：",
    success_badge: "24営業時間以内",
    follow_us: "公式SNSをフォロー",
    menu_home: { title: "ホーム", desc: "トップ画面に戻る" },
    menu_courses: { title: "コースを見る", desc: "N5〜N1のロードマップ" },
    menu_japan: { title: "日本探訪", desc: "文化と旅行" }
  }
};

// 2. FORM FIELDS DATA (Dynamic per language)
export const formSectionsData = {
  vi: [
    {
      id: "basic_info",
      title: "I. Thông Tin Cơ Bản",
      sideContent: {
        image: japan_whychooseus,
        title: "Khởi đầu hành trình Nhật ngữ",
        description: "Hãy chia sẻ thông tin liên lạc chính xác để chúng tôi có thể kết nối và hỗ trợ bạn nhanh nhất. Mọi thông tin cá nhân đều được bảo mật tuyệt đối.",
      },
      fields: [
        { name: "fullName", label: "Họ tên học viên", type: "text", required: true, placeholder: "Nguyễn Văn A", colSpan: 1 },
        { name: "dob", label: "Ngày tháng năm sinh", type: "date", required: true, colSpan: 1 },
        { name: "phone", label: "Số điện thoại", type: "tel", required: true, placeholder: "0912 345 678", colSpan: 1 },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "example@gmail.com", colSpan: 1 },
        { name: "address", label: "Địa chỉ cư trú hiện tại", type: "text", required: true, placeholder: "Số nhà, đường, quận/huyện, thành phố...", colSpan: 2 },
      ],
    },
    {
      id: "survey",
      title: "II. Khảo Sát Học Tập & Công Việc",
      sideContent: {
        image: japan_whychooseus,
        title: "Định hướng tương lai",
        description: "Những câu hỏi này giúp giảng viên nắm bắt mục tiêu sự nghiệp và kỳ vọng của bạn, từ đó tối ưu hóa lộ trình học tập để đạt kết quả cao nhất.",
      },
      fields: [
        { name: "studyGoal", label: "A. Mục tiêu học tập và thời gian dự định?", type: "textarea", required: true, placeholder: "VD: Muốn lấy bằng N3 trong 6 tháng...", colSpan: 2 },
        { name: "pastExperience", label: "B. Đã từng học tiếng Nhật bao lâu và ở đâu?", type: "textarea", required: false, placeholder: "VD: Đã học 3 tháng tại trung tâm X...", colSpan: 2 },
        { name: "expectations", label: "C. Mong muốn đạt được điều gì sau khóa học?", type: "textarea", required: false, placeholder: "VD: Giao tiếp tự tin, thi đỗ chứng chỉ...", colSpan: 2 },
        { name: "weeklyAvailability", label: "D. Thời gian 1 tuần có thể học bao nhiêu buổi?", type: "text", required: false, placeholder: "VD: 3 buổi tối (2-4-6)...", colSpan: 2 },
        { name: "currentJob", label: "E. Công việc hiện tại", type: "text", required: false, placeholder: "VD: Sinh viên / Kỹ sư IT...", colSpan: 1 },
        { name: "workingHours", label: "F. Thời gian làm việc", type: "text", required: false, placeholder: "VD: 8h00 - 17h00...", colSpan: 1 },
        { name: "futurePlans", label: "G. Có dự định đổi việc trong tương lai không?", type: "text", required: false, placeholder: "VD: Có, dự định sang công ty Nhật...", colSpan: 2 },
        { name: "salaryExpectations", label: "H. Mức lương hiện tại & mong muốn?", type: "textarea", required: false, placeholder: "Hiện tại: ... / Mong muốn: ...", colSpan: 2 },
      ],
    },
  ],
  en: [
    {
      id: "basic_info",
      title: "I. Basic Information",
      sideContent: {
        image: japan_whychooseus,
        title: "Start Your Japanese Journey",
        description: "Please provide accurate contact information so we can connect and support you fastest. All personal information is strictly confidential.",
      },
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true, placeholder: "John Doe", colSpan: 1 },
        { name: "dob", label: "Date of Birth", type: "date", required: true, colSpan: 1 },
        { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "0912 345 678", colSpan: 1 },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "example@gmail.com", colSpan: 1 },
        { name: "address", label: "Current Address", type: "text", required: true, placeholder: "House No, Street, District, City...", colSpan: 2 },
      ],
    },
    {
      id: "survey",
      title: "II. Study & Work Survey",
      sideContent: {
        image: japan_whychooseus,
        title: "Future Orientation",
        description: "These questions help instructors understand your career goals and expectations, optimizing the learning path for the best results.",
      },
      fields: [
        { name: "studyGoal", label: "A. Study goal and intended duration?", type: "textarea", required: true, placeholder: "Ex: Want N3 within 6 months...", colSpan: 2 },
        { name: "pastExperience", label: "B. Previous Japanese learning experience?", type: "textarea", required: false, placeholder: "Ex: Studied 3 months at Center X...", colSpan: 2 },
        { name: "expectations", label: "C. What do you wish to achieve?", type: "textarea", required: false, placeholder: "Ex: Speak confidently, pass JLPT...", colSpan: 2 },
        { name: "weeklyAvailability", label: "D. Sessions per week available?", type: "text", required: false, placeholder: "Ex: 3 evenings (Mon-Wed-Fri)...", colSpan: 2 },
        { name: "currentJob", label: "E. Current Job", type: "text", required: false, placeholder: "Ex: Student / IT Engineer...", colSpan: 1 },
        { name: "workingHours", label: "F. Working Hours", type: "text", required: false, placeholder: "Ex: 8:00 AM - 5:00 PM...", colSpan: 1 },
        { name: "futurePlans", label: "G. Any plans to change jobs?", type: "text", required: false, placeholder: "Ex: Yes, planning to join a Japanese firm...", colSpan: 2 },
        { name: "salaryExpectations", label: "H. Current & Expected Salary?", type: "textarea", required: false, placeholder: "Current: ... / Expected: ...", colSpan: 2 },
      ],
    },
  ],
  ja: [
    {
      id: "basic_info",
      title: "I. 基本情報",
      sideContent: {
        image: japan_whychooseus,
        title: "日本語の旅を始めましょう",
        description: "迅速なサポートのため、正確な連絡先情報をご提供ください。個人情報は厳重に管理されます。",
      },
      fields: [
        { name: "fullName", label: "氏名", type: "text", required: true, placeholder: "山田 太郎", colSpan: 1 },
        { name: "dob", label: "生年月日", type: "date", required: true, colSpan: 1 },
        { name: "phone", label: "電話番号", type: "tel", required: true, placeholder: "0912 345 678", colSpan: 1 },
        { name: "email", label: "メールアドレス", type: "email", required: true, placeholder: "example@gmail.com", colSpan: 1 },
        { name: "address", label: "現住所", type: "text", required: true, placeholder: "番地、通り、区、市...", colSpan: 2 },
      ],
    },
    {
      id: "survey",
      title: "II. 学習と仕事に関するアンケート",
      sideContent: {
        image: japan_whychooseus,
        title: "将来の方向性",
        description: "これらの質問は、講師があなたのキャリア目標と期待を把握し、最高の結果を出すための学習計画を最適化するのに役立ちます。",
      },
      fields: [
        { name: "studyGoal", label: "A. 学習目標と予定期間は？", type: "textarea", required: true, placeholder: "例：6ヶ月以内にN3を取得したい...", colSpan: 2 },
        { name: "pastExperience", label: "B. 日本語学習の経験は？", type: "textarea", required: false, placeholder: "例：センターXで3ヶ月学習...", colSpan: 2 },
        { name: "expectations", label: "C. コース修了後の希望は？", type: "textarea", required: false, placeholder: "例：自信を持って会話したい、JLPT合格...", colSpan: 2 },
        { name: "weeklyAvailability", label: "D. 週に何回学習できますか？", type: "text", required: false, placeholder: "例：週3回の夜（月・水・金）...", colSpan: 2 },
        { name: "currentJob", label: "E. 現在の職業", type: "text", required: false, placeholder: "例：学生 / ITエンジニア...", colSpan: 1 },
        { name: "workingHours", label: "F. 勤務時間", type: "text", required: false, placeholder: "例：8:00 - 17:00...", colSpan: 1 },
        { name: "futurePlans", label: "G. 将来、転職の予定はありますか？", type: "text", required: false, placeholder: "例：はい、日系企業へ転職予定...", colSpan: 2 },
        { name: "salaryExpectations", label: "H. 現在の給与と希望給与は？", type: "textarea", required: false, placeholder: "現在：... / 希望：...", colSpan: 2 },
      ],
    },
  ],
};

// Helper: Generate empty state using the 'vi' structure (keys are identical across languages)
export const initialFormData = formSectionsData['vi'].reduce((acc, section) => {
  section.fields.forEach((field) => {
    acc[field.name] = "";
  });
  return acc;
}, {});