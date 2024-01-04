import Script from "next/script";

const Head = () => {
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
      {/* Twitter */}
      {/* <meta content="summary" property="twitter:card" />
      <meta
        content="EnKash - The Ultimate Platform for Businesses"
        property="twitter:title"
      />
      <meta
        content="EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more."
        property="twitter:description"
      />
      <meta content="@EnkashBusiness" property="twitter:site" />
      <meta content="@EnkashBusiness" property="twitter:creator" />
      <meta
        content="https://www.enkash.com/enkash-logo.png"
        name="twitter:image:src"
      /> */}

      {/* Facebook and Others */}
      {/* <meta
        content="EnKash - The Ultimate Platform for Businesses"
        property="og:title"
      />
      <meta
        content="EnKash is the ultimate platform for businesses that offer services like Account Payable, Accounts Receivable, Expense Management, Corporate Cards, Employee Rewards, Channel Incentive, automation solutions & many more."
        property="og:description"
      />
      <meta
        name="image"
        property="og:image"
        content="https://www.enkash.com/enkash-logo.png"
      />
      <meta content="https://www.enkash.com/{{urlPath}}" property="og:url" />
      <meta
        content="EnKash - The Ultimate Platform for Businesses"
        property="og:site_name"
      />
      <meta content="website" property="og:type" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <meta content="#ffffff" name="theme-color" />
      <meta
        name="facebook-domain-verification"
        content="4ddju6t091u1tktgqszeltsh8guiq5"
      /> */}
    </head>
  );
};

export default Head;
