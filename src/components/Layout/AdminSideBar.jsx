import Link from "next/link";

const AdminSideBar = ({ open, navItems }) => {
  return (
    <aside
      className={`${
        open ? "w-64" : "w-0 lg:w-64"
      } bg-white border-r shadow-sm transition-all duration-300 overflow-hidden h-screen sticky top-0`}
    >
      <div className="flex flex-col p-4 space-y-2">
        <div className="text-xs text-gray-500 font-semibold tracking-wide px-4 mb-1">
          NAVIGATION
        </div>

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-2 rounded-md text-gray-700 hover:bg-red-100 hover:text-red-600 transition font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AdminSideBar;