"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Merch = () => {
  const merchItems = [
    {
      id: 1,
      name: "Blue Hoodie 1",
      image: "/merch/blueHoodie1.png",
      alt: "Howard University Blue Hoodie",
      url: "https://example.com/blueHoodie1",
    },
    {
      id: 2,
      name: "Blue Hoodie 2",
      image: "/merch/blueHoodie2.png",
      alt: "Howard University Blue Hoodie 2",
      url: "https://example.com/hu-blue-hoodie2",
    },
    {
      id: 3,
      name: "HU Loves Cash",
      image: "/merch/CassiusShirt.png",
      alt: "Howard University HU Loves Cash",
      url: "https://example.com/cassius-shirt",
    },
    {
      id: 4,
      name: "Gray Hoodie",
      image: "/merch/GrayHoodie.png",
      alt: "Howard University Gray Hoodie",
      url: "https://example.com/gray-hoodie",
    },
    {
      id: 5,
      name: "Letterman Jacket",
      image: "/merch/letterman.png",
      alt: "Howard University HU Loves Cash",
      url: "https://example.com/cassius-shirt",
    },
    {
      id: 6,
      name: "HU Shorts",
      image: "/merch/shorts.png",
      alt: "Howard University HU Shorts",
      url: "https://example.com/hu-shorts",
    },
    {
      id: 7,
      name: "Women's V-Neck T-Shirt",
      image: "/merch/vNeck.png",
      alt: "Howard University Women's V-Neck T-Shirt",
      url: "https://example.com/womens-vneck",
    },
    {
      id: 8,
      name: "White Hoodie",
      image: "/merch/WhiteHoodie.png",
      alt: "Howard University White Hoodie",
      url: "https://example.com/white-hoodie",
    },
  ];

  return (
    <div className="w-full py-12 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-1.5 rounded-lg animate-flash-hu-colors"></div>
        <h2 className="text-3xl font-bold text-hu-gold drop-shadow-lg font-montserrat">
          Merch
        </h2>
      </div>

      {/* Merchandise Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {merchItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="flex flex-col items-center justify-between bg-white/25 border border-blue-950 rounded-lg">
                {/* Name at top */}
                <div className="text-center font-bold text-red-950 mb-2">
                  {item.name}
                </div>

                {/* Image container with fixed height */}
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain rounded-md bg-white"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Buy button at bottom */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-hu-red text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-hu-gold hover:text-hu-navy transition-colors opacity-90 cursor-not-allowed pointer-events-none"
                  aria-label={item.name}
                  tabIndex={-1}
                >
                  Available Soon
                </a>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-blue-400/30 border border-blue-400/20 rounded-full p-1" />
        <CarouselNext className="right-2 bg-blue-400/30 border border-blue-400/20 rounded-full p-1" />
      </Carousel>
    </div>
  );
};

export default Merch;
