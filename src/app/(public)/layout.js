import { Header, Footer } from "@/components/Layout";
import { global_CSS } from "@/styles";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Takechi Gengo Gakuin",
  description: "Học Viện Ngôn Ngữ Takechi",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <LanguageProvider>
          <Header /> {children} <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
};

export default layout;
