import Script from "next/script";

const CustomHead = () => {
  return (
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
        rel="stylesheet"
      />
      {process.env.NEXT_PUBLIC_ENV === "production" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <Script strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}

      {/* <!-- HTML Meta Tags --> */}

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.enkash.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="EnKash - The Ultimate Platform for Businesses"
      />
      <meta
        property="og:description"
        content="EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more."
      />
      <meta property="og:image" content="https://www.enkash.com/og-image.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="enkash.com" />
      <meta property="twitter:url" content="https://www.enkash.com/" />
      <meta
        name="twitter:title"
        content="EnKash - The Ultimate Platform for Businesses"
      />
      <meta
        name="twitter:description"
        content="EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more."
      />
      <meta
        name="twitter:image"
        content="https://www.websitev2-uat.enkash.in/og-image.png"
      />

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
    </head>
  );
};

export default CustomHead;
