import React from "react";
import Image from "next/image";
import bgImage from "../../public/howard-background.png";

const BackgroundImage = () => (
  <div className="fixed inset-0 w-full h-full -z-10">
    <Image
      src={bgImage}
      alt="Howard University Background"
      layout="fill"
      objectFit="cover"
      priority
    />
    <div className="absolute inset-0 bg-[#001229] opacity-85"></div>
  </div>
);

export default BackgroundImage;
