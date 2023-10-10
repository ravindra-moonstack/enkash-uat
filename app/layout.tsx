import WebHeader from "@/components/header/web-header";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/_base.scss";
import { RootProps } from "@/types/props";
import MobileHeader from "@/components/header/mobile-header/mobile-header";

const RootLayout = ({ children }: RootProps) => {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className={`app main`}>
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
