import VoucherData from "@/app/bolt/data/voucher-data";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./voucher-page.module.scss";
import { apparels } from "../header";

interface Voucher {
  voucherId: string;
  name: string;
  category: string;
  discount: number;
  description: string;
  aboutCompany: string;
  backgroundImg: string;
  howToRedeem: string[];
}

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  //for metadata image url fetch from public
  const backgroundImage = require(`./../../public/images/voucher-bg/${voucher.backgroundImg}`);

  return (
    <div>
      <div className={styles.voucher_card}>
        <div className={styles.discount}>
          Up to <strong>{voucher.discount}%</strong> OFF
        </div>
        <Link href={`/bolt/voucher/${voucher.voucherId}`}>
          <Image
            src={backgroundImage}
            alt={voucher.name}
            className={styles.background_img}
          />
        </Link>
        <Link
          href={`/bolt/voucher/${voucher.voucherId}`}
          className={styles.buy_now_button}
          target="_blank"
        >
          Buy Now
        </Link>
        <div className={styles.voucher_name}>{voucher.name}</div>
      </div>
    </div>
  );
};

export default VoucherCard;
