"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailjs_public_key, emailjs_service_id } from "@/src/constants";
import CommanButton from "../buttons/index";
import styles from "../../app/resources/blogs/featured_top.module.scss";

const BellIcon = () => (
    <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
            fill="currentColor"
        />
    </svg>
);

export default function SubscribeBox() {
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();

        const form = document.getElementById("subscribe-form-featured") as HTMLFormElement;
        if (!form) return;

        setLoading(true);
        setStatus({ type: null, message: "" });

        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const email = emailInput.value;

        if (!email.trim()) {
            setStatus({ type: "error", message: "Email is required." });
            setLoading(false);
            return;
        }

        try {
            await emailjs.sendForm(
                emailjs_service_id,
                "template_kpixwp8",
                form,
                emailjs_public_key
            );

            setStatus({
                type: "success",
                message: "Subscribed successfully!",
            });
            emailInput.value = "";
        } catch (err) {
            console.error("FAILED...", err);
            setStatus({
                type: "error",
                message: "Something went wrong.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <form id="subscribe-form-featured" className={styles.subscribe_box} onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your work email"
                    className={styles.input}
                    required
                />

                <CommanButton
                    title={loading ? "..." : "Subscribe"}
                    theme="blue"
                    iconSize={19}
                    icon={<BellIcon />}
                    iconPosition="end"
                    className={styles.subscribe_btn}
                    url={() => handleSubmit()}
                    isDisabled={loading}
                />
            </form>
            {status.type && (
                <p style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    color: status.type === 'success' ? '#2ce6b4' : '#ff4d4f',
                    textAlign: 'center',
                    fontWeight: 500
                }}>
                    {status.message}
                </p>
            )}
        </div>
    );
}
