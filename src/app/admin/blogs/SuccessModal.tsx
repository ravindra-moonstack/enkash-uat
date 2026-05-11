import React from "react";
import styles from "./blogs.module.scss";

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
  message?: string;
  title?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  show,
  onClose,
  message = "Your post has been saved successfully!",
  title = "Success"
}) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.successModal}>
        <div className={styles.modalHeader}>
          <div className={styles.successIcon}>
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.okBtn} onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
