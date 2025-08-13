"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number; // Target number
  suffix?: string; // +, %, etc.
  duration?: number; // Animation time in ms
  label: string; // Text below counter
  prefix?: string; // Optional prefix like "$"
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 2000,
  label,
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Observe when the counter enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Run the count-up animation when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} style={{ textAlign: "start" }}>
      <div style={{ fontSize: "2rem", fontWeight: 700, color: "#0066FF", fontStyle:"italic"}}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div style={{ fontSize: "0.9rem", color: "#555" }}>{label}</div>
    </div>
  );
};

export default Counter;
