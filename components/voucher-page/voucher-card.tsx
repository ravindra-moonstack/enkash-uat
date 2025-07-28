import React from "react"
import Image from "next/image"
import styles from "./voucher-page.module.scss"
import { Voucher } from "@/src/app/vouchers/data/voucher-data"
import { nameToUrl } from "@/common/utils/stringUtils"

interface VoucherCardProps {
  voucher: Voucher
  routeToBolt?: boolean
}

const sanitizeUTM = (utm: string): string => {
  utm = utm.toLowerCase()
  utm = utm.replace(/ /g, "_")
  return utm
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  voucher,
  routeToBolt = false,
}) => {
  //for metadata image url fetch from public
  // const backgroundImage = require(`./../../public/images/voucher-bg/${voucher.backgroundImg}`);
  const backgroundImage = `/images/voucher-bg/${voucher.urlName}.png`

  const boltUTM = `https://bolt.enkash.com/signup?utm_source=Bolt&utm_medium=enkash_website&utm_campaign=redeem_${sanitizeUTM(
    voucher.name
  )}`
  const voucherURL = `/vouchers/${voucher.category}/${nameToUrl(voucher.name)}`
  console.log("Voucher URL:", voucherURL)
  return (
    <div>
      <div className={styles.voucher_card}>
        <div className={styles.discount}>
          Up to <strong>{voucher.discount}%</strong> OFF
        </div>
        <a href={voucherURL} title={`${voucher.name}`}>
          <Image
            src={backgroundImage}
            alt={voucher.name}
            className={styles.background_img}
            width={100}
            height={100}
          />
        </a>
        {routeToBolt ? (
          <a href={boltUTM} target="_blank" className={styles.buy_now_button}>
            Buy Now
          </a>
        ) : (
          <a href={voucherURL} className={styles.buy_now_button}>
            Buy Now
          </a>
        )}

        <div className={styles.voucher_name}>
          <a href={voucherURL} title={`${voucher.name}`}>
            {voucher.name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default VoucherCard
