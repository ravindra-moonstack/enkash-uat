import styles from "./pop-up.module.scss"
import boltImage from "./bolt-img.png"
import Image from "next/image"
import 


const PopUp = () => {
  return (
    <div className={styles.popup_container}>
        <div className={styles.left_container}>
            <Image src={boltImage} alt="bolt image"/>
        </div>
        <div className={styles.right_container}>
            <div>
            Enjoy up to 30% savings on 400+ top brands
            </div>
            <div>Join the league of 5 million+ buyers for instant discounts on brand gift vouchers</div>
            <PrimaryButton
              title="Buy Now"
              theme="blue"
              url="https://home.enkash.com/signup?utm_source=corporate_cards"
            />
        </div>
    </div>
  )
}

export default PopUp;
