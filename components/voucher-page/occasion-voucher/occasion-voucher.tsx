import React from "react"
import styles from "./occasion-voucher.module.scss"
import Heading from "@/components/heading/heading"
import Image from "next/image"
import {
  anniversaryGiftingImg,
  birthdayGiftingImg,
  corporateGiftingImg,
  festivalGiftingImg,
} from ".."
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"

interface OccasionVoucherProps {
  voucherName: string
  festivals?: string
  anniversary?: string
  birthdays?: string
}

const OccasionVoucher: React.FC<OccasionVoucherProps> = ({
  voucherName,
  festivals,
  anniversary,
  birthdays,
}) => {
  return (
    <div className={styles.main_container}>
      <div className={`mt-4 mb-5`}>
        <div className={`mb-1 ${styles.description_title}`}>
          <DynamicHeading
            content={[
              {
                title: `${voucherName}s for different Occasions`,
                color: "color-black",
              },
            ]}
            headingTag="h3"
            className="f-7 "
          />
        </div>
        <div className={`mb-4 ${styles.description}`}>
          <div className={`mb-3`}>
            {voucherName}s are the perfect present for any special occasion,
            offering a delightful way to share the joy with friends, family, or
            colleagues. Whether it's a birthday, anniversary, holiday, or just
            to say thank you, {voucherName}s are sure to bring a smile.
          </div>
        </div>
        <div className={styles.occasions_container}>
          <div className={`${styles.occasion_div} ${styles.reverse_div}`}>
            <div className={styles.text_container}>
              <DynamicHeading
                content={[
                  {
                    title: "Festivals",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h4"
                className="f-7 "
              />
              <div className={styles.description}>{festivals}</div>
            </div>
            <div className={styles.image_container}>
              <Image src={festivalGiftingImg} alt="festival gifting" />
            </div>
          </div>

          <div className={`${styles.occasion_div}`}>
            <div className={styles.text_container}>
              <DynamicHeading
                content={[
                  {
                    title: "Anniversary",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h4"
                className="f-7 "
              />
              <div className={styles.description}>{anniversary}</div>
            </div>
            <div className={styles.image_container}>
              <Image src={anniversaryGiftingImg} alt="Anniversary gifting" />
            </div>
          </div>

          <div className={`${styles.occasion_div} ${styles.reverse_div}`}>
            <div className={styles.text_container}>
              <DynamicHeading
                content={[
                  {
                    title: "Birthdays",
                    color: "color-equity-blue",
                  },
                ]}
                headingTag="h4"
                className="f-7 "
              />
              <div className={styles.description}>{birthdays}</div>
            </div>
            <div className={styles.image_container}>
              <Image src={birthdayGiftingImg} alt="birthday gifting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OccasionVoucher
