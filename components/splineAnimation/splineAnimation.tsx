import React, { memo, Suspense } from 'react'
import styles from './splineAnimation.module.scss'
const Spline = React.lazy(() => import("@splinetool/react-spline"))

const SplineAnimation = () => {
      return (
            <div className={styles['spline-wrapper']}>

                  <Suspense fallback={<div>Loading...</div>}>
                        <Spline scene="https://prod.spline.design/SpJTt-mkTnhnxEHG/scene.splinecode" />
                  </Suspense>

            </div>
      )
}

export default memo(SplineAnimation)