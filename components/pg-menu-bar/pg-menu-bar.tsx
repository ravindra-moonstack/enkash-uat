"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./pg-menu-bar.module.scss";
import LottieDynamicLoadComponent from "../lottie-client/lottie-dynamic-load-client";
import { cardBg } from "@/app/vouchers";
import Image from "next/image";
import Heading from "../heading/heading";
import { space } from "@/common/constant";
import { greenLottieBg } from ".";

const PgMenuBar = () => {
  const items = [
    "Cards",
    "Net Banking",
    "Current Account",
    "UPI/ Scan QR",
    "Walllets",
    "Rewards",
  ];

  const [selectedItem, setSelectedItem] = useState<string>("Cards");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const changeTab = () => {
    setSelectedItem((prevSelectedItem) => {
      const currentIdx = items.indexOf(prevSelectedItem);
      const newIdx = (currentIdx + 1) % items.length;
      const newItem = items[newIdx];
      return newItem;
    });
  };

  useEffect(() => {
    const timer = setInterval(changeTab, 10000);
    return () => clearInterval(timer);
  }, [selectedItem]);

  return (
    <div className={`row ${styles.main_container}`}>
      <div className="d-inline text-center mb-2">
        <Heading
          title="The EnKash Way is "
          color="black"
          size="h1"
          weight="6"
        />
        <Heading
          title={`${space}the better way`}
          color="equity-blue"
          size="h1"
          weight="6"
        />
      </div>
      <div className="d-inline text-center mb-5">
        <Heading
          title={`Switch to EnKash today!`}
          color="black"
          size="h1"
          weight="6"
        />
      </div>
      <div className={styles.nav_container}>
        {items.map((item) => (
          <div key={item}>
            <div
              className={`${styles.item} ${
                selectedItem === item ? styles.active : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
            {selectedItem === item && (
              <div className={styles.activeUnderline} />
            )}
          </div>
        ))}
      </div>
      <div className={`row ${styles.content_div_container}`}>
        {selectedItem == "Cards" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"CreditAndDebitPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>
                    Credit Card/Debit Card
                  </div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>
                        Enter valid card details like card number, name, expiry
                        date, and CVV
                      </li>
                      <li>
                        Enter the OTP sent to your registered number. Validate
                        the same.
                      </li>
                      <li>Click on ‘Proceed to Pay’ </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedItem == "Net Banking" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"NetBankingPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>Net Banking</div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>Select your choice of bank</li>
                      <li>Enter valid net-banking login credentials</li>
                      <li>
                        Enter the OTP sent to your registered number. Validate
                        the same.
                      </li>
                      <li>Click on ‘Proceed to Pay’ </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedItem == "Current Account" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"CurrentAccountPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>Current Account</div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>Search or select your current bank account</li>
                      <li>Check the amount and other details visible</li>
                      <li>Click on ‘Proceed to Pay’ </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedItem == "UPI/ Scan QR" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"UpiPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>UPI/ Scan QR</div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>Scan the QR code using any UPI app on your phone</li>
                      <li>Alternatively, enter your UPI ID/VPA</li>
                      <li>
                        Go to the UPI ID app, accept the payment request from
                        Olympus PG 
                      </li>
                      <li>Click on ‘Pay’ and enter your M-PIN </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedItem == "BNPL" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"BnplPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>BNPL</div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>Enter your registered mobile number</li>
                      <li>Select your choice of BNPL provider</li>
                      <li>Click on ‘Proceed to Pay’</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedItem == "Walllets" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"WalletsPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>Wallets</div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>Select your choice of wallet</li>
                      <li>Check all the details mentioned</li>
                      <li>Click on ‘Proceed to Pay’ </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedItem == "Rewards" && (
          <div className={`m-4 ${styles.content_div}`}>
            <div className={`row bg-white ${styles.section}`}>
              <div
                className={`col-md-6 col-12 order-md-1 order-2 d-flex my-md-5 my-3 d-flex justify-content-start  ${styles.first_container}`}
              >
                <Image
                  src={greenLottieBg}
                  alt="card background"
                  className={styles.card_bg}
                  height={500}
                  width={500}
                />

                <div className={styles.lottie_container}>
                  <LottieDynamicLoadComponent
                    animationName={"RewardsPgMenu"}
                    loop={true}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1 my-md-5 my-3 ">
                <div className={`${styles.text_section}`}>
                  <div className={styles.gradient_text}>Rewards</div>
                  <div className={styles.bullet_text}>
                    <ul>
                      <li>Check your available reward balance</li>
                      <li>Check all the transaction details</li>
                      <li>Click on ‘Proceed to Pay’</li>
                      <li>
                        Enter the OTP sent on your mobile number, and click on
                        “Verify”
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PgMenuBar;
