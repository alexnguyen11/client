import { Header, Footer } from "@/components/Layout";
import { global_CSS } from "@/styles";

export const metadata = {
  title: "Takechi Gengo Gakuin",
  description: "Học Viện Ngôn Ngữ Takechi",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Header /> {children} <Footer />
      </body>
    </html>
  );
};

export default layout;
