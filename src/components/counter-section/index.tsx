'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import styles from './counterSection.module.scss';
import { DynamicHeading } from '..';
import Image from 'next/image';

interface StatItem {
    value: string | number;
    prefix?: string;
    suffix?: string;
    label: string;
    animationDuration?: number;
}

interface StatsSectionProps {
    titleContent?: {
        content: { title: string; color: string }[]
        headingTag?: keyof JSX.IntrinsicElements | string
        className?: string
    };
    stats: StatItem[];
    className?: string;
    backgroundImage?: string | any;
}

const CounterSection: React.FC<StatsSectionProps> = ({
    titleContent,
    stats,
    className = '',
    backgroundImage,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section
            ref={sectionRef}
            className={`${styles.statsSection} ${className}`}
        >
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className={styles.backgroundImg}
                    priority
                />
            )}
            <div className={'max-w-auto'}>
                {titleContent && (
                    <DynamicHeading
                        content={titleContent.content}
                        headingTag={"h2"}
                        className={titleContent.className || "f-5 mb-4 mb-md-5 text-center"}
                    />
                )}
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <CounterCard
                            key={index}
                            stat={stat}
                            isVisible={isVisible}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CounterCardProps {
    stat: StatItem;
    isVisible: boolean;
    delay: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ stat, isVisible, delay }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const animationRef = useRef<number | null>(null);

    const parseValue = (value: string | number): number => {
        if (typeof value === 'number') return value;
        if (value.toUpperCase() === 'ZERO') return 0;

        const cleanValue = value.replace(/[^0-9.]/g, '');
        return parseFloat(cleanValue) || 0;
    };

    const formatValue = (value: number, originalValue: string | number): string => {
        if (typeof originalValue === 'string' && originalValue.toUpperCase() === 'ZERO') {
            return originalValue;
        }
        if (typeof originalValue === 'number') return Math.round(value).toString();

        const precision = originalValue.includes('.')
            ? originalValue.split('.')[1].replace(/[^0-9]/g, '').length
            : 0;

        return value.toFixed(precision);
    };

    useEffect(() => {
        if (!isVisible) return;

        const targetValue = parseValue(stat.value);

        if (targetValue === 0) {
            setDisplayValue(0);
            return;
        }

        const duration = stat.animationDuration || 2000;
        const startTime = performance.now() + delay;

        const animate = (currentTime: number) => {
            if (currentTime < startTime) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const current = targetValue * easeOutQuart;
            setDisplayValue(current);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isVisible, stat.value, stat.animationDuration, delay]);

    const prefix = stat.prefix || '';
    const suffix = stat.suffix || '';

    return (
        <div className={styles.statCard}>
            <DynamicHeading
                content={[
                    { text: prefix, className: 'bxs-white color-white f-4' },
                    { text: formatValue(displayValue, stat.value), className: 'bxs-white color-white f-7' },
                    { text: suffix, className: 'bxs-white color-white f-4' },
                ]}
                headingTag="h3"
                className={`mb-1 `}
            />
            <DynamicHeading
                content={[{ text: stat.label, className: 'subHeading' }]}
                headingTag="p"
                className={'mb-0'}
            />
        </div>
    );
};

export default CounterSection;