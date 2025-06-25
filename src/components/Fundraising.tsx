"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";

const Fundraising = () => {
  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg animate-flash-hu-colors"></div>
          <h2 className="text-3xl font-bold text-white">Support the Cause</h2>
        </div>
      </div>

      {/* Fundraising Card */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl outline-red-700 outline-1 outline-offset-2">
        <div>
          <p className="text-gray-700 flex-1 mr-4 mb-5 text-lg">
            Help us reach our fundraising goal of $_______ to support ________
          </p>
        </div>

        <Progress
          value={75}
          className="mb-4"
        />
        <div className="flex items-center justify-between mt-5 mb-2">
          <p className="text-lg text-blue-600 ">Raised: $____ / Goal: $_____</p>
          <Button
            className="bg-green-600 text-white hover:bg-hu-red flex-shrink-0"
            onClick={() => alert("Thank you for your support!")}
          >
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;
