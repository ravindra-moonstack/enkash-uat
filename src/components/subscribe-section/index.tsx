"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailjs_public_key, emailjs_service_id } from "@/src/constants";
import styles from "./style.module.scss";

type SubscribeSectionProps = {
    title?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
};

export default function SubscribeSection({
    title = "Subscribe to get updates",
    placeholder = "Enter your work email",
    buttonText = "Subscribe",
    onSubmit,
}: SubscribeSectionProps) {
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: "" });

        const form = e.currentTarget;
        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const email = emailInput.value;

        if (!email.trim()) {
            setStatus({ type: "error", message: "Email field is required." });
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
                message: "Your form has been successfully submitted!",
            });
            emailInput.value = "";
            onSubmit?.(email);
        } catch (err) {
            console.error("FAILED...", err);
            setStatus({
                type: "error",
                message: "Oops! Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder={placeholder}
                        className={styles.input}
                        required
                    />

                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? "Submitting..." : buttonText}
                    </button>
                </form>
                {status.type && (
                    <p className={`${styles.message} ${status.type === "success" ? styles.success : styles.error}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </section>
    );
}