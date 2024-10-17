import React from "react";
import styles from "./occasion-voucher.module.scss";
import Heading from "@/components/heading/heading";
import Image from "next/image";
import {
  anniversaryGiftingImg,
  birthdayGiftingImg,
  corporateGiftingImg,
  festivalGiftingImg,
} from "..";

interface OccasionVoucherProps {
  voucherName: string;
  corporateGifting?: string;
  festivals?: string;
  anniversary?: string;
  birthdays?: string;
}

const OccasionVoucher: React.FC<OccasionVoucherProps> = ({
  voucherName,
  corporateGifting,
  festivals,
  anniversary,
  birthdays,
}) => {
  return (
    <div className={styles.main_container}>
      <div className={`mt-4 mb-5`}>
        <div className={`mb-1 ${styles.description_title}`}>
          <Heading title={voucherName} color="black" size="h3" weight="7" />
          <Heading
            title="s for different Occasions"
            color="black"
            size="h3"
            weight="7"
          />
        </div>
        <div className={`mb-4 ${styles.description}`}>
          <div className={`mb-3`}>
            A perfect gift for all occasions like birthdays, weddings,
            anniversaries, and festivities, the AJIO E-Gift Card is available in
            multiple BookMyShow Gift Cards are the perfect present for any
            special occasion, offering a delightful way to share the joy with
            friends, family, or colleagues. Whether it's a birthday,
            anniversary, holiday, or just to say thank you, BookMyShow Gift
            Cards are sure to bring a smile denominations.
          </div>
        </div>
        <div className={styles.occasions_container}>
          <div className={`${styles.occasion_div}`}>
            <div className={styles.text_container}>
              <Heading
                title="Corporate Gifting"
                size="h4"
                weight="7"
                color="equity-blue"
              />
              <div className={styles.description}>{corporateGifting}</div>
            </div>
            <div className={styles.image_container}>
              <Image src={corporateGiftingImg} alt="corporate gifting" />
            </div>
          </div>

          <div className={`${styles.occasion_div} ${styles.reverse_div}`}>
            <div className={styles.text_container}>
              <Heading
                title="Festivals"
                size="h4"
                weight="7"
                color="equity-blue"
              />
              <div className={styles.description}>{festivals}</div>
            </div>
            <div className={styles.image_container}>
              <Image src={festivalGiftingImg} alt="festival gifting" />
            </div>
          </div>

          <div className={`${styles.occasion_div}`}>
            <div className={styles.text_container}>
              <Heading
                title="Anniversary"
                size="h4"
                weight="7"
                color="equity-blue"
              />
              <div className={styles.description}>{anniversary}</div>
            </div>
            <div className={styles.image_container}>
              <Image src={anniversaryGiftingImg} alt="Anniversary gifting" />
            </div>
          </div>

          <div className={`${styles.occasion_div} ${styles.reverse_div}`}>
            <div className={styles.text_container}>
              <Heading
                title="Birthdays"
                size="h4"
                weight="7"
                color="equity-blue"
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
  );
};

export default OccasionVoucher;
