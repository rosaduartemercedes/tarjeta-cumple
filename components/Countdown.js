
"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-12-05T22:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seg: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // CSS en Tailwind: flex, centrado, ancho exacto en mobile (w-14 = 56px), padding y bordes finos
  const blockStyle = "flex flex-col items-center bg-black/80 text-white py-2 w-14 rounded-xl border border-white/10 shadow-lg";

  return (
    <div className="flex justify-center items-center gap-1.5 w-full font-mono">
      <div className={blockStyle}>
        <span className="text-xl font-black tracking-tight">{String(timeLeft.dias).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider font-sans font-bold text-neutral-400 mt-0.5">Días</span>
      </div>
      <span className="text-lg font-bold text-neutral-400 pb-4 animate-pulse">:</span>
      <div className={blockStyle}>
        <span className="text-xl font-black tracking-tight">{String(timeLeft.horas).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider font-sans font-bold text-neutral-400 mt-0.5">Horas</span>
      </div>
      <span className="text-lg font-bold text-neutral-400 pb-4 animate-pulse">:</span>
      <div className={blockStyle}>
        <span className="text-xl font-black tracking-tight">{String(timeLeft.min).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider font-sans font-bold text-neutral-400 mt-0.5">Min</span>
      </div>
      <span className="text-lg font-bold text-neutral-400 pb-4 animate-pulse">:</span>
      <div className={blockStyle}>
        <span className="text-xl font-black tracking-tight text-white">{String(timeLeft.seg).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider font-sans font-bold text-neutral-400 mt-0.5">Seg</span>
      </div>
    </div>
  );
}