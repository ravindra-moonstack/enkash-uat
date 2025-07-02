import styles from "./mobile-talk-to-sales.module.scss"

import RectangleButton from "../buttons/rectangle-button/rectangle-button"

const TalkToSales = () => {
  return (
    <>
      <div className="mobile-only">
        <div className={`${styles.mobile_talk_sales}`}>
          <RectangleButton
            title={"Talk to Sales"}
            theme="blue"
            url="/sales/?source=expense_management"
            width="276px"
          />
        </div>
      </div>
    </>
  )
}

export default TalkToSales
