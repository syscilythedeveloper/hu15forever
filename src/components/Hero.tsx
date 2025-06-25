import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-background min-h-screen pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
                <span
                  className="block bg-gradient-to-r from-white via-hu-blue to-white bg-clip-text text-transparent font-black uppercase tracking-wider"
                  style={{
                    fontFamily:
                      'Impact, "Arial Black", "Franklin Gothic Bold", Charcoal, sans-serif',
                  }}
                >
                  Insert Some
                </span>
                <span
                  className="block text-hu-gold font-light bg-clip-text text-transparent uppercase tracking-wider"
                  style={{
                    fontFamily:
                      'Impact, "Arial Black", "Franklin Gothic Bold", Charcoal, sans-serif',
                  }}
                >
                  Text Here
                </span>
              </h1>

              <div className="text-2xl lg:text-3xl text-white font-light tracking-wide">
                <p className="mb-2">October 19, 2025</p>
                <p className="text-hu-gold">—</p>
                <p>October 26, 2025</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl lg:text-2xl text-white font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Celebrating ______________ and{" "}
                <span className="text-hu-gold font-semibold italic">
                  FILL THIS IN LATER
                </span>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/Howard.png"
                  width={600}
                  height={400}
                  alt="HU Forever Homecoming 2025"
                  className="w-full h-auto rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-hu-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-hu-red/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}

      <div className="absolute top-1/2 right-20 w-3 h-3 bg-white/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-hu-red rounded-full animate-ping"></div>
    </div>
  );
};

export default Hero;
