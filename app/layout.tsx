import "../styles/_base.scss";
import "bootstrap/dist/css/bootstrap.css";
import PopUp from "@/components/pop-up/pop-up";
import Head from "@/components/head/head";

export interface RootProps {
  children: any;
}

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en">
      <Head />
      <body>
        <PopUp />
        <main className={`app main`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
