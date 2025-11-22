import { global_CSS } from "@/styles";

export default function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
