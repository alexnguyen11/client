"use client";

import { AdminHeader, AdminSideBar } from ".";

import { useState } from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard/admin" },
  { name: "News", href: "/dashboard/admin/news" },
  { name: "Feedback", href: "/dashboard/admin/feedback" },
  { name: "Staff", href: "/dashboard/admin/staff" },
  { name: "Students", href: "/dashboard/admin/students" },
  { name: "Instructors", href: "/dashboard/admin/instructors" },
  { name: "Student Feedback", href: "/dashboard/admin/student-feedback" },
];

const AdminDashboard = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader open={open} setOpen={setOpen} />

      {/* Body: sidebar + main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AdminSideBar open={open} navItems={navItems} />

        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
