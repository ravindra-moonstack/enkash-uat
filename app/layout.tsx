import WebHeader from "@/components/header/web-header";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/_base.scss";
import { RootProps } from "@/types/props";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/grotesque.ttf" });

const RootLayout = ({ children }: RootProps) => {
  return (
    <html>
      <body>
        <main className={`app main ${myFont.className}`}>
          <div className="mobile-header">
            <MobileHeader />
          </div>
          <div className="desktop-header">{<WebHeader />}</div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
