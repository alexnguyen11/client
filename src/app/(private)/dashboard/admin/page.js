import React from 'react'

const page = () => {
  return (
    <div className="p-6">
      <div className="text-3xl font-bold text-gray-700 mb-4">
        Welcome, Admin 👋
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">News</h2>
          <p className="text-gray-600">Manage school announcements and news.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Students</h2>
          <p className="text-gray-600">Add, edit, and monitor student records.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Instructors</h2>
          <p className="text-gray-600">Manage teacher and staff details.</p>
        </div>
      </div>
    </div>
  )
}

export default page