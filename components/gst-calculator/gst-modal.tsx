import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./gst-calculator.module.scss";
import Image from "next/image";
import arrowRight from "./img/right-arrow-gst.svg";
import gstBreakup from "./img/gst-breakup.svg";
import { Form } from "react-bootstrap";

interface ModalProps {
  costOfGoods: number;
  profitPercentage: number;
  profitAmount: number;
  gstPercentage: number;
  gstAmount: number;
  totalSellingPrice: number;
}

const GSTBreakDownModal: React.FC<ModalProps> = ({
  costOfGoods,
  profitPercentage,
  profitAmount,
  gstPercentage,
  gstAmount,
  totalSellingPrice,
}) => {
  const cgst = (gstPercentage / 2).toFixed(2);
  const cgstAmount = (gstAmount / 2).toFixed(2);
  const sgst = (gstPercentage / 2).toFixed(2);
  const sgstAmount = (gstAmount / 2).toFixed(2);

  const [show, setShow] = useState(false);
  const [billingStateSameAsProduction, setBillingStateSameAsProduction] =
    useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSwitchChange = () => {
    setBillingStateSameAsProduction(!billingStateSameAsProduction);
  };

  return (
    <>
      <div onClick={handleShow}>
        Check full breakup
        <Image src={arrowRight} alt="" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary font-weight-bold d-flex w-75 justify-content-between align-items-center">
            <Image
              src={gstBreakup}
              alt="GST Breakup"
              width={25}
              className="mr-3"
            />
            GST Calculation Full Breakup
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="g-0">
          <div className={styles.breakdown_modal}>
            <div>
              <div className={styles.switch}>
                <p>State of Billing is same as the State of Production</p>
                <Form.Check
                  type="switch"
                  label=""
                  checked={billingStateSameAsProduction}
                  onChange={handleSwitchChange}
                />
              </div>
            </div>
            <div className={styles.data_row}>
              <p>Cost of Goods/Services</p>
              <p className={styles.data_value}>₹ {costOfGoods}</p>
            </div>
            <div className={styles.data_row}>
              <p>Profit Amount {profitPercentage}%:</p>
              <p className={styles.data_value}>₹ {profitAmount}</p>
            </div>
            <div className={styles.data_row}>
              <p>GST Amount {gstPercentage}%:</p>
              <p className={styles.data_value}>₹ {gstAmount}</p>
            </div>
            {billingStateSameAsProduction ? (
              <div className={styles.data_row}>
                <p>IGST Amount {gstPercentage}%:</p>
                <p className={styles.data_value}>₹ {gstAmount}</p>
              </div>
            ) : (
              <>
                <div className={styles.data_row}>
                  <p>CGST Amount {cgst}%:</p>
                  <p className={styles.data_value}>₹ {cgstAmount}</p>
                </div>
                <div className={styles.data_row}>
                  <p>SGST Amount {sgst}%:</p>
                  <p className={styles.data_value}>₹ {sgstAmount}</p>
                </div>
              </>
            )}
            <div className={`${styles.data_row} ${styles.last_row}`}>
              <p className={styles.data_value}>Total Amount</p>
              <p className={styles.data_value}>₹ {totalSellingPrice}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GSTBreakDownModal;
