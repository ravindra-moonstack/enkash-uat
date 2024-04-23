import React from "react";
import Image from "next/image";
import styles from "./voucher-page.module.scss";

type Voucher = {
  voucherId: string;
  name: string;
  brandName?: string;
  category: string;
  discount: number;
  description: string;
  aboutCompany: string;
  backgroundImg: string;
  howToRedeem: string[];
};

interface VoucherCardProps {
  voucher: Voucher;
  routeToBolt?: boolean;
}

const sanitizeUTM = (utm: string): string => {
  utm = utm.toLowerCase();
  utm = utm.replace(/ /g, "_");
  return utm;
};

const VoucherCard: React.FC<VoucherCardProps> = ({
  voucher,
  routeToBolt = false,
}) => {
  //for metadata image url fetch from public
  const backgroundImage = require(`./../../public/images/voucher-bg/${voucher.backgroundImg}`);
  const boltUTM = `https://bolt.enkash.com/signup?utm_source=Bolt&utm_medium=enkash_website&utm_campaign=redeem_${sanitizeUTM(
    voucher.name
  )}`;

  return (
    <div>
      <div className={styles.voucher_card}>
        <div className={styles.discount}>
          Up to <strong>{voucher.discount}%</strong> OFF
        </div>
        <a href={`/bolt/voucher/${voucher.voucherId}`}>
          <Image
            src={backgroundImage}
            alt={voucher.name}
            className={styles.background_img}
          />
        </a>
        {routeToBolt ? (
          <a href={boltUTM} target="_blank" className={styles.buy_now_button}>
            Buy Now
          </a>
        ) : (
          <a
            href={`/bolt/voucher/${voucher.voucherId}`}
            className={styles.buy_now_button}
          >
            Buy Now
          </a>
        )}

        <div className={styles.voucher_name}>{voucher.name}</div>
      </div>
    </div>
  );
};

export default VoucherCard;
