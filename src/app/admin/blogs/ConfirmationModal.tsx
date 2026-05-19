import React from "react";
import styles from "./blogs.module.scss";

interface ConfirmationModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
    title?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    type?: "danger" | "primary";
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    show,
    onClose,
    onConfirm,
    message,
    title = "Confirm Action",
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    type = "primary"
}) => {
    if (!show) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.successModal}>
                <div className={styles.modalHeader}>
                    <div className={type === "danger" ? styles.dangerIcon : styles.confirmIcon}>
                        {type === "danger" ? (
                            <i className="bi bi-exclamation-triangle" style={{ fontSize: "2rem", color: "#dc3545" }}></i>
                        ) : (
                            <i className="bi bi-question-circle" style={{ fontSize: "2rem", color: "#007bff" }}></i>
                        )}
                    </div>
                    <h2>{title}</h2>
                </div>
                <div className={styles.modalBody}>
                    <p>{message}</p>
                </div>
                <div className={styles.modalFooter} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button className={styles.cancelBtn} onClick={onClose} style={{ background: '#6c757d' }}>{cancelLabel}</button>
                    <button
                        className={styles.okBtn}
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        style={{ background: type === "danger" ? "#dc3545" : "#007bff" }}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
