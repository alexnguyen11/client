"use client";

import { useState } from "react";
import { Add, Delete, Edit } from "@mui/icons-material";

// Dummy data
const initialInstructors = [
  {
    id: 1,
    name: "Nguyễn Thu Hằng",
    specialization: "N5 - N4",
    phone: "0901234567",
  },
  { id: 2, name: "Lê Hoàng Long", specialization: "N3", phone: "0987654321" },
];

const page = () => {
  const [instructors, setInstructors] = useState(initialInstructors);
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null); // null = add new
  const [form, setForm] = useState({ name: "", specialization: "", phone: "" });

  const openAddModal = () => {
    setEditing(null);
    setForm({ name: "", specialization: "", phone: "" });
    setOpenModal(true);
  };

  const openEditModal = (item) => {
    setEditing(item);
    setForm(item);
    setOpenModal(true);
  };

  const saveInstructor = () => {
    // Editing mode
    if (editing) {
      setInstructors((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...form, id: editing.id } : p))
      );
    } else {
      // Add new
      setInstructors((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const deleteInstructor = (id) => {
    if (!confirm("Bạn có chắc muốn xóa giảng viên này?")) return;
    setInstructors((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Instructors</h1>
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center gap-2"
        >
          <Add /> Add Instructor
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg border">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Specialization</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3 w-32 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {instructors.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.specialization}</td>
                <td className="px-4 py-3">{item.phone}</td>

                <td className="px-4 py-3 text-center flex gap-2 justify-center">
                  <button
                    onClick={() => openEditModal(item)}
                    className="text-blue-600 hover:bg-blue-50 p-2 rounded"
                  >
                    <Edit fontSize="small" />
                  </button>

                  <button
                    onClick={() => deleteInstructor(item.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded"
                  >
                    <Delete fontSize="small" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {instructors.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            Chưa có giảng viên nào.
          </div>
        )}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {editing ? "Edit Instructor" : "Add Instructor"}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Specialization"
                className="w-full p-2 border rounded"
                value={form.specialization}
                onChange={(e) =>
                  setForm({ ...form, specialization: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 border rounded"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-100"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={saveInstructor}
              >
                {editing ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
