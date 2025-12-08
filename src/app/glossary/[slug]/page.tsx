// import Image from "next/image"

// interface GlossaryItem {
//   status: string
//   id: number
//   title: string
//   slug: string
//   content: string
//   link: string
//   image?: string
// }

// async function getGlossaryData(slug: string): Promise<GlossaryItem | null> {
//   try {
//     const res = await fetch(
//       `https://uat.blogs.enkash.com/wp-json/custom/v1/glossary-by-slug?slug=${slug}`,
//       { cache: "no-store" }
//     )

//     if (!res.ok) return null

//     const json = await res.json()

//     // API returns an object, not array
//     if (json?.status === "success") {
//       return json
//     }

//     return null
//   } catch (err) {
//     return null
//   }
// }

// export default async function GlossaryPage({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const data = await getGlossaryData(params.slug)

//   if (!data) {
//     return (
//       <div className="container mt-5">
//         <h3 className="text-danger">No data found</h3>
//       </div>
//     )
//   }

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-3">{data.title}</h1>

//       {data.image && (
//         <Image
//           src={data.image}
//           alt={data.title}
//           className="img-fluid mb-4 rounded"
//           style={{ maxHeight: "300px", objectFit: "cover" }}
//         />
//       )}

//       {/* WordPress HTML content */}
//       <div
//         className="lead"
//         dangerouslySetInnerHTML={{ __html: data.content }}
//       />
//     </div>
//   )
// }
