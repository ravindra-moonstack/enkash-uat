import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/_base.scss";
import { RootProps } from "@/types/props";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({ children }: RootProps) => {
  return (
    <html className={`${poppins.variable}`}>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <div className="mobile-header">
            <MobileHeader />
          </div>
          <div className="desktop-header">{<Header />}</div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
