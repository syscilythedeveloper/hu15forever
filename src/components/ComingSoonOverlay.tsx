import React from "react";

const ComingSoonOverlay = () => {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center  text-white text-center p-4 rounded-2xl"
      style={{
        background:
          `repeating-linear-gradient(90deg, #b91c1c 0 20px, #991b1b 20px 40px, #b91c1c 40px 60px, #991b1b 60px 80px),` +
          `radial-gradient(ellipse at 20px 0, #fff3 0 12px, transparent 16px),` +
          `radial-gradient(ellipse at 60px 0, #fff2 0 10px, transparent 14px),` +
          `radial-gradient(ellipse at 100px 0, #fff3 0 8px, transparent 12px),` +
          `radial-gradient(ellipse at 40px 100%, #0002 0 16px, transparent 20px),` +
          `radial-gradient(ellipse at 80px 100%, #0003 0 12px, transparent 16px)`,
        boxShadow: "inset 0 0 80px #7f1d1d, inset 0 0 120px #991b1b",
        animation: "curtain-wave 7s infinite alternate ease-in-out",
        backgroundSize: "80px 100%",
      }}
    >
      <style>{`
        @keyframes curtain-wave {
          15% { background-position-x: 0; }
          100% { background-position-x: 40px; }
        }
      `}</style>
      <div className="bg-black/40 px-4 py-2 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold tracking-widest">Coming Soon</h2>
      </div>
    </div>
  );
};

export default ComingSoonOverlay;
