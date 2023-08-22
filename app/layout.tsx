import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/_base.scss";
import { RootProps } from "@/types/props";
import MobileHeader from "@/components/header/mobile-header/mobile-header";

const RootLayout = ({ children }: RootProps) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <div className="mobile-header">
            <MobileHeader />
          </div>
          <div className="desktop-header">
            <Header />
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
