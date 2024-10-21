"use client";
import React, { useState } from "react";
import styles from "./voucher-calculator.module.scss";
import { whiteCart } from "..";
import Image from "next/image";

interface VoucherOption {
  mrp: number;
}

interface SavingsCalculatorProps {
  voucherName: string;
  category: string;
  savingsPercentage: number;
  voucherImg?: string;
}

const voucherOptions: VoucherOption[] = [
  { mrp: 250 },
  { mrp: 500 },
  { mrp: 1000 },
];

const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  voucherName,
  category,
  savingsPercentage,
  voucherImg,
}) => {
  // Intially Select 2 vouchers
  const [quantities, setQuantities] = useState<number[]>(
    new Array(voucherOptions.length - 1).fill(0).concat(2)
  );
  const [totalCount, setTotalCount] = useState(0);

  const handleQuantityChange = (index: number, change: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
    setTotalCount(Math.max(0, totalCount + change));
  };

  const calculateSavings = (mrp: number) => {
    return (mrp * savingsPercentage) / 100;
  };

  const totalSavings = voucherOptions.reduce((acc, option, index) => {
    return acc + calculateSavings(option.mrp) * quantities[index];
  }, 0);

  const totalAmount = voucherOptions.reduce((acc, option, index) => {
    return acc + option.mrp * quantities[index];
  }, 0);

  return (
    <div className={styles.savingsCalculator}>
      <div className={styles.header}>
        <h2>Savings Calculator</h2>
      </div>
      <div className={styles.voucherInfo}>
        <div className={styles.voucherInfoLeft}>
          <div className={styles.voucherImageContainer}>
            {voucherImg && (
              <Image
                src={voucherImg}
                alt={voucherName}
                className={styles.voucherImage}
                width={100}
                height={60}
              />
            )}
          </div>
          <div className={styles.voucherDetails}>
            <h3>{voucherName}</h3>
            <span className={styles.discount}>{savingsPercentage}% Off</span>
            <span className={styles.category}>Category: {category}</span>
          </div>
        </div>
        <div className="desktop-only">
          <div className={`${styles.totalContainer}`}>
            <div className={styles.total}>
              <span>Total ₹{totalAmount.toFixed(2)}</span>
              <span className={styles.savings}>
                Savings ₹{totalSavings.toFixed(2)}
              </span>
            </div>
            <div className={styles.cartButton}>
              <div className={styles.item_count}>{totalCount}</div>
              <Image src={whiteCart} alt="Cart Icon" />
            </div>
          </div>
        </div>
      </div>
      <table className={styles.voucherTable}>
        <thead>
          <tr>
            <th>MRP</th>
            <th className="desktop-only">Discount</th>
            <th>Your Savings</th>
            <th>Quantity</th>
            <th className="desktop-only">Total</th>
          </tr>
        </thead>
        <tbody>
          {voucherOptions.map((option, index) => (
            <tr key={index}>
              <td>₹{option.mrp}</td>
              <td className="desktop-only">{savingsPercentage}%</td>
              <td className={styles.savings}>
                ₹{calculateSavings(option.mrp * quantities[index]).toFixed(2)}
              </td>
              <td>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </button>
                </div>
              </td>
              <td className="desktop-only">
                ₹{(option.mrp * quantities[index]).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mobile-only">
        <div className={`${styles.totalContainer}`}>
          <div className={styles.total}>
            <span>Total ₹{totalAmount.toFixed(2)}</span>
            <span className={styles.savings}>
              Savings ₹{totalSavings.toFixed(2)}
            </span>
          </div>
          <div className={styles.cartButton}>
            <div className={styles.item_count}>{totalCount}</div>
            <Image src={whiteCart} alt="Cart Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
