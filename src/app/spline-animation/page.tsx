import React, { Suspense } from "react"
import styles from "./page.module.scss"
const Spline = React.lazy(() => import("@splinetool/react-spline"))

const page = () => {
  return (
    <div>
      <div className={`${styles.spline_container} `}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Spline scene="https://prod.spline.design/ljGW-FUjmmMBrg2W/scene.splinecode" />
        {/* </Suspense> */}
      </div>

      <div>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}

export default page
