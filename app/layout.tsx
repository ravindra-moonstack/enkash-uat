import Footer from "@/components/footer/footer";
import "../styles/_base.scss";
import "../styles/_about_old.scss";

import "bootstrap/dist/css/bootstrap.css";

export interface RootProps {
  children: any;
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
