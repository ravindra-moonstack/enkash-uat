import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer/page'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';


export const metadata={
  title: "Asia's 1st and Smartest Spend Management Platform | EnKash",
  description: "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more."
}

const RootLayout=({ children }) => {
  return (
    <html>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>

        <main className='app'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout

