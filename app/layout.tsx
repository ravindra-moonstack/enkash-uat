import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/_base.scss";
import { ReactNode } from "react";

export interface RootProps {
  children: ReactNode;
}

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
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
