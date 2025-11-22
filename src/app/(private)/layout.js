import { global_CSS } from "@/styles";
import { DashboardFooter } from "@/components/Layout";

export const metadata = {
  title: "Takechi Gengo Gakuin",
  description: "Học Viện Ngôn Ngữ Takechi",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        {children}
        <DashboardFooter />
      </body>
    </html>
  );
};

export default layout;
