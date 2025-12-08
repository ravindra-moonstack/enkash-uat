// import React from "react"
// import styles from "./page.module.scss"
// import CustomBreadcrumb from "@/src/components/breadcrumb"
// import DynamicHeading from "@/src/components/dynamic-heading"
// import {
//   faqData,
//   goodsAndServiceData,
//   gstData,
//   newGstData,
//   oldGstData,
// } from "./data"
// import { Table } from "react-bootstrap"
// import Image from "next/image"
// import FaqSection from "@/src/components/faq-section"
// import { Metadata } from "next"
// import bgImg from "../../../public/images/ifscBg.webp"
// import pnbLogo from "../../../public/images/pnbLogo.svg"
// import sbiLogo from "../../../public/images/sbiLogo.svg"
// import bobLogo from "../../../public/images/bobLogo.svg"
// import boiLogo from "../../../public/images/boiLogo.svg"
// import axisLogo from "../../../public/images/axisBank.svg"
// import paymentBankLogo from "../../../public/images/paymentBankLogo.svg"
// import IfscCode from "@/src/components/ifsc-code-list"
// import IfscDetailCard from "@/src/components/ifsc-detail-card"

// export const metadata: Metadata = {
//   title: "Free GST Calculator | Calculate GST Online Free - EnKash",
//   description:
//     "Free online GST calculator to get accurate CGST, SGST & IGST breakdowns with inclusive and exclusive amounts.",
//   openGraph: {
//     title: "Free GST Calculator | Calculate GST Online Free - EnKash",
//     description:
//       "Free online GST calculator to get accurate CGST, SGST & IGST breakdowns with inclusive and exclusive amounts.",
//     url: `${process.env.NEXT_PUBLIC_URL}/gst-calculator`,
//     type: "website",
//     images: [`${process.env.NEXT_PUBLIC_URL}/images/GST_PREVIEW.webp`],
//   },
// }
// const Ifsc = (): React.JSX.Element => {
//   return (
//     <div className={` ${styles.body_container} relative`}>
//       <div className={`${styles.bgImg_container} absolute`}>
//         <Image src={bgImg} alt={"bgImg"} />
//       </div>
//       <div className={`color-white ${styles.home_container}`}>
//         <div className="max-w-auto">
//           <CustomBreadcrumb
//             items={[
//               { name: "Home", url: "/" },
//               { name: "Ifsc Code", url: "/ifsc" },
//             ]}
//             linkColor="allWhite"
//           />
//           <DynamicHeading
//             content={[
//               {
//                 title: "IFSC Codes ",
//                 color: "color-white f-7 d-block",
//               },
//               {
//                 title: "List of IFSC Code and MICR Codes of All Banks in India",
//                 color: "color-white f-2",
//               },
//             ]}
//             headingTag="h1"
//             className="text-center mt-3"
//           />

//           {/* GST Calculator Component */}

//           <IfscCode />
//           <DynamicHeading
//             content={[
//               {
//                 title: "IFSC Codes of ",
//                 color: "color-white f-7 ",
//               },
//               {
//                 title: "Top Indian Banks",
//                 color: "color-white f-4",
//               },
//             ]}
//             headingTag="h2"
//             className="text-center mt-5"
//           />
//           <div className="container row g-3 my-4">
//             <div className="col-12 col-md-4 d-flex">
//               <IfscDetailCard
//                 bankLogo={pnbLogo}
//                 bankName="Punjab National Bank"
//                 ifsc="PNBN0000454"
//                 micr="PNBN0000454"
//                 state="Madhya Pradesh"
//                 district="Chhindwara"
//                 branch="Raymond"
//                 address={`A Wing, 25th Floor,\nMarathon Futurex,\nMafatlal Mill Compounds`}
//                 phone="+91-98734-33429"
//               />{" "}
//             </div>
//             <div className="col-12 col-md-4 d-flex">
//               <IfscDetailCard
//                 bankLogo={sbiLogo}
//                 bankName="Punjab National Bank"
//                 ifsc="PNBN0000454"
//                 micr="PNBN0000454"
//                 state="Madhya Pradesh"
//                 district="Chhindwara"
//                 branch="Raymond"
//                 address={`A Wing, 25th Floor,\nMarathon Futurex,\nMafatlal Mill Compounds`}
//                 phone="+91-98734-33429"
//               />
//             </div>
//             <div className="col-12 col-md-4 d-flex">
//               <IfscDetailCard
//                 bankLogo={boiLogo}
//                 bankName="Punjab National Bank"
//                 ifsc="PNBN0000454"
//                 micr="PNBN0000454"
//                 state="Madhya Pradesh"
//                 district="Chhindwara"
//                 branch="Raymond"
//                 address={`A Wing, 25th Floor,\nMarathon Futurex,\nMafatlal Mill Compounds`}
//                 phone="+91-98734-33429"
//               />
//             </div>
//             <div className="col-12 col-md-4 d-flex">
//               <IfscDetailCard
//                 bankLogo={paymentBankLogo}
//                 bankName="Punjab National Bank"
//                 ifsc="PNBN0000454"
//                 micr="PNBN0000454"
//                 state="Madhya Pradesh"
//                 district="Chhindwara"
//                 branch="Raymond"
//                 address={`A Wing, 25th Floor,\nMarathon Futurex,\nMafatlal Mill Compounds`}
//                 phone="+91-98734-33429"
//               />
//             </div>
//             <div className="col-12 col-md-4 d-flex">
//               <IfscDetailCard
//                 bankLogo={axisLogo}
//                 bankName="Punjab National Bank"
//                 ifsc="PNBN0000454"
//                 micr="PNBN0000454"
//                 state="Madhya Pradesh"
//                 district="Chhindwara"
//                 branch="Raymond"
//                 address={`A Wing, 25th Floor,\nMarathon Futurex,\nMafatlal Mill Compounds`}
//                 phone="+91-98734-33429"
//               />
//             </div>
//             <div className="col-12 col-md-4 d-flex">
//               <IfscDetailCard
//                 bankLogo={bobLogo}
//                 bankName="Punjab National Bank"
//                 ifsc="PNBN0000454"
//                 micr="PNBN0000454"
//                 state="Madhya Pradesh"
//                 district="Chhindwara"
//                 branch="Raymond"
//                 address={`A Wing, 25th Floor,\nMarathon Futurex,\nMafatlal Mill Compounds`}
//                 phone="+91-98734-33429"
//               />
//             </div>
//           </div>

        
//           <div className={`bg-white   ${styles.gst}`}>
//             <div className="d-flex">
//               <span className={` ${styles.greenLine}`}></span>
//               <div className="ps-3">
//                 <DynamicHeading
//                   content={[
//                     {
//                       title: "What is an IFSC Code?",
//                       color: "color-grey-200 ",
//                     },
//                   ]}
//                   headingTag="h5"
//                   className="mb-0  f-6 text-start"
//                 />
//                 <DynamicHeading
//                   content={[
//                     {
//                       title:
//                         "IFSC stands for Indian Financial System Code. It is an 11-character alphanumeric code o identify bank branches participating in NEFT, RTGS, and IMPS. Every bank branch has a unique IFSC code that helps the RBI ensure secure transactions.",
//                       color: "color-grey-200  ",
//                     },
//                   ]}
//                   headingTag="p"
//                   className="mb-0 pt-3 text-start"
//                 />
//                 <DynamicHeading
//                   content={[
//                     {
//                       title:
//                         "It has streamlined India’s tax structure into “One Nation, One Tax”, ensuring transparency and uniformity across states.",
//                       color: "color-grey-200 ",
//                     },
//                   ]}
//                   headingTag="p"
//                   className="mb-0 pt-3 text-start"
//                 />
//               </div>
//             </div>
//             <div className="d-flex mt-5">
//               <span className={` ${styles.greenLine}`}></span>
//               <div className="ps-3">
//                 <DynamicHeading
//                   content={[
//                     {
//                       title: "How to Use the EnKash GST Tax Calculator",
//                       color: "color-grey-200 ",
//                     },
//                   ]}
//                   headingTag="h5"
//                   className="mb-0  f-6 text-start"
//                 />
//                 <ol>
//                   <DynamicHeading
//                     content={[
//                       {
//                         title:
//                           "Calculating GST with EnKash is fast and simple — just follow these 3 steps:",
//                         color: "color-grey-200  ",
//                       },
//                     ]}
//                     headingTag="p"
//                     className="mb-0 pt-3 text-start"
//                   />
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "Enter the amount of your goods or services.",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title:
//                             "Select the GST rate applicable to your category.",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title:
//                             "Choose Inclusive or Exclusive pricing to get the correct breakdown.",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                 </ol>

//                 <ul className="pt-4 list-disc">
//                   <DynamicHeading
//                     content={[
//                       {
//                         title: "The calculator will instantly display:",
//                         color: "color-grey-200  ",
//                       },
//                     ]}
//                     headingTag="p"
//                     className="mb-0 pt-3 text-start"
//                   />
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "GST amount",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "Total invoice value (tax inclusive)",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "Pre-GST or post-GST price",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="d-flex mt-5">
//               <span className={` ${styles.greenLine}`}></span>
//               <div className="ps-3">
//                 <DynamicHeading
//                   content={[
//                     {
//                       title: "GST Calculation Formula",
//                       color: "color-grey-200 ",
//                     },
//                   ]}
//                   headingTag="h5"
//                   className="mb-0  f-6 text-start"
//                 />
//                 <ul>
//                   <DynamicHeading
//                     content={[
//                       {
//                         title: "When the amount does NOT include GST:",
//                         color: "color-grey-200  ",
//                       },
//                     ]}
//                     headingTag="p"
//                     className="mb-0 pt-3 text-start"
//                   />
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "GST Amount = (Original Cost × GST Rate) /100",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "Total Amount = Original Cost + GST Amount",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                 </ul>

//                 <ul className="pt-4 list-disc">
//                   <DynamicHeading
//                     content={[
//                       {
//                         title: "When the amount includes GST:",
//                         color: "color-grey-200  ",
//                       },
//                     ]}
//                     headingTag="p"
//                     className="mb-0 pt-3 text-start"
//                   />
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title:
//                             "GST Amount = (Inclusive Price × GST Rate) / (100 + GST Rate)",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                   <li>
//                     <DynamicHeading
//                       content={[
//                         {
//                           title: "Base Price = Inclusive Price − GST Amount",
//                           color: "color-grey-200  ",
//                         },
//                       ]}
//                       headingTag="p"
//                       className="mb-0 pt-3 text-start"
//                     />
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="table-responsive mt-5">
//               <DynamicHeading
//                 content={[
//                   {
//                     title: "Types of GST in India",
//                     color: "color-grey-200 f-6 ",
//                   },
//                 ]}
//                 headingTag="h5"
//                 className="mb-4  f-6   text-start"
//               />
//               <Table bordered hover className="align-middle text-start mt-4">
//                 <thead className="bg-light bg-white-73">
//                   <tr>
//                     <th>Type</th>
//                     <th>Description</th>
//                     <th>Levied By</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {gstData.map((item, index) => (
//                     <tr key={index}>
//                       <td>
//                         <div className="d-flex align-items-center gap-2">
//                           {/* <Bank size={20} color="#0d6efd" /> */}
//                           <Image
//                             src={item.icon}
//                             alt={""}
//                             width={40}
//                             height={40}
//                           />
//                           <span>{item.type}</span>
//                         </div>
//                       </td>
//                       <td>{item.description}</td>
//                       <td>{item.leviedBy}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//             <DynamicHeading
//               content={[
//                 {
//                   title: " Explore more about types of GST",
//                   color: "color-equity-blue underline",
//                   link: `${process.env.NEXT_PUBLIC_URL}/resources/blog/types-of-gst-in-india`,
//                 },
//               ]}
//               headingTag="p"
//               className="mb-0 pt-4  text-start "
//             />
//             <div className="pt-5">
//               {goodsAndServiceData.map((item, index) => (
//                 <div key={index} className="mb-4">
//                   <DynamicHeading
//                     content={[
//                       {
//                         title: item.title,
//                         color: "color-black f-6",
//                       },
//                     ]}
//                     headingTag="h6"
//                     className="mb-0 pt-4 f-6 text-start"
//                   />
//                   <DynamicHeading
//                     content={[
//                       {
//                         title: item.description,
//                         color: "color-grey-200",
//                       },
//                     ]}
//                     headingTag="p"
//                     className="mb-0 pt-2  text-start "
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="table-responsive mt-5">
//               <DynamicHeading
//                 content={[
//                   {
//                     title: "Old Vs New GST Slabs in India (FY 2025-26)",
//                     color: "color-grey-200 mb-4  f-6",
//                   },
//                 ]}
//                 headingTag="h5"
//                 className="mb-4  f-6 text-start"
//               />

//               <Table bordered hover className="align-middle text-start">
//                 <thead className="bg-light bg-white-73">
//                   <tr>
//                     <th>Old GST Rate</th>
//                     <th>Common Items / Services</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {oldGstData.map((item, index) => (
//                     <tr key={index}>
//                       <td>
//                         <div className="d-flex align-items-center gap-2">
//                           <span>{item.type}</span>
//                         </div>
//                       </td>
//                       <td>{item.description}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>

//             <div className="table-responsive mt-3">
//               <Table bordered hover className="align-middle text-start mt-4">
//                 <thead className="bg-light bg-white-73">
//                   <tr>
//                     <th>New GST Rate</th>
//                     <th>Common Items/ Services</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {newGstData.map((item, index) => (
//                     <tr key={index}>
//                       <td>
//                         <div className="d-flex align-items-center gap-2">
//                           <span>{item.type}</span>
//                         </div>
//                       </td>
//                       <td>{item.description}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//             <DynamicHeading
//               content={[
//                 {
//                   title: " Explore more about GST Reforms (2025)",
//                   color: "color-equity-blue underline",
//                   link: `${process.env.NEXT_PUBLIC_URL}/resources/blog/types-of-gst-rates-in-india-new-rate-list-and-updates`,
//                 },
//               ]}
//               headingTag="p"
//               className="mb-0 pt-4  text-start "
//             />
//             <DynamicHeading
//               content={[
//                 {
//                   title:
//                     "(Source: GST Council India – Central Board of Indirect Taxes and Customs as of October 2025)",
//                   color: "color-black fs-10",
//                 },
//               ]}
//               headingTag="p"
//               className="mb-0 pt-4   f-4 text-center fst-italic "
//             />
//           </div>
//           <div className="mt-5">
//             <FaqSection faqData={faqData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Ifsc
