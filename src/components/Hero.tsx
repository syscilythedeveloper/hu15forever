"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  // Set your reunion start date here
  const targetDate = new Date("2025-10-23T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "0", hours: "0", minutes: "0", seconds: "0" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimeLeft({
          days: days.toString(),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4">
      <div className="max-w-4xl w-full flex flex-col justify-center items-center h-full py-8 gap-8">
        <h3 className="uppercase text-base sm:text-lg md:text-xl tracking-widest mb-3 font-semibold">
          Class of 2015
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide drop-shadow-md mb-4">
          HOWARD UNIVERSITY
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 text-hu-red tracking-widest drop-shadow-lg mb-4">
          10-YEAR REUNION
        </h2>
        <p className="text-hu-gold text-base sm:text-lg md:text-xl mt-1 font-semibold tracking-wider mb-6">
          OCT 19, 2025 – OCT 26, 2025
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {[
            { value: timeLeft.days, label: "DAYS" },
            { value: timeLeft.hours, label: "HOURS" },
            { value: timeLeft.minutes, label: "MINUTES" },
            { value: timeLeft.seconds, label: "SECONDS" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white rounded-lg px-6 py-6 bg-white/10 min-w-[90px] flex flex-col items-center"
            >
              <div className="text-3xl font-extrabold mb-1">{item.value}</div>
              <div className="mt-1 text-sm tracking-widest uppercase border-t border-hu-red pt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
