"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import ComingSoonOverlay from "./ComingSoonOverlay";

const Fundraising = () => {
  const raised = 500;
  const goal = 5000;
  return (
    <div className="w-full py-12 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-1.5 rounded-lg animate-flash-hu-colors"></div>
        <h2 className="text-3xl font-bold text-hu-gold drop-shadow-lg font-montserrat">
          Support the Cause
        </h2>
      </div>

      {/* Fundraising Card */}

      <div className="max-w-xl w-full bg-white/80 border border-hu-gold rounded-xl shadow-2xl backdrop-blur-md p-8 flex flex-col items-center relative">
        <ComingSoonOverlay />
        <p className="text-lg text-white mb-5 font-semibold font-montserrat text-center">
          Help us reach our goal to fund scholarships, events, and community
          initiatives for Howard alumni. Every dollar brings us closer to an
          unforgettable Homecoming week!
        </p>
        <Progress
          value={(raised / goal) * 100}
          className="mb-4 w-full bg-gray-300 [&>div]:bg-green-600"
        />
        <p className="text-lg text-hu-gold font-bold mb-4 font-montserrat">
          <span>Raised: ${raised}</span>
          <br />
          <span>Goal: ${goal}</span>
        </p>

        <a
          href="https://gofundme.com/your-campaign-url"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block bg-hu-red text-white py-3 rounded-lg hover:bg-hu-gold transition-colors font-bold text-center font-montserrat text-lg shadow-md"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default Fundraising;
