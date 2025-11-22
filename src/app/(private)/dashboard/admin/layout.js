import { global_CSS } from "@/styles";
import Link from "next/link";
import { AdminDashboard } from "@/components/Layout";

export const metadata = {
  title: "Takechi Gengo Gakuin",
  description: "Học Viện Ngôn Ngữ Takechi",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <AdminDashboard>{children}</AdminDashboard>
      </body>
    </html>
  );
};

export default layout;
