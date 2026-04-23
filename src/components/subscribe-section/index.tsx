"use client";
import React from "react";
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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const input = form.email as HTMLInputElement;

        if (!input.value.trim()) return;

        onSubmit?.(input.value);
        input.value = "";
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

                    <button type="submit" className={styles.button}>
                        {buttonText}
                        {/* <Bell size={20} /> */}
                    </button>
                </form>
            </div>
        </section>
    );
}