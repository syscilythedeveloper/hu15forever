"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ComingSoonOverlay from "./ComingSoonOverlay";

const Merch = () => {
  const merchItems = [
    {
      id: 1,
      name: "HU Forever 2025 T-Shirt",
      price: "$25.00",
      image: "/merch/hu-tshirt.jpg",
      alt: "Howard University Homecoming 2025 T-Shirt",
      category: "Apparel",
      url: "https://example.com/hu-forever-tshirt",
      status: "unreleased",
    },
    {
      id: 2,
      name: "Bison Pride Hoodie",
      price: "$45.00",
      image: "/merch/bison-hoodie.jpg",
      alt: "Howard Bison Pride Hoodie",
      category: "Apparel",
      url: "https://example.com/hu-forever-tshirt",
      status: "unreleased",
    },
    {
      id: 3,
      name: "HU Homecoming 2025 Cap",
      price: "$20.00",
      image: "/merch/hu-cap.jpg",
      alt: "Howard University Homecoming Baseball Cap",
      category: "Accessories",
      url: "https://example.com/hu-forever-tshirt",
      status: "unreleased",
    },
    {
      id: 4,
      name: "Mecca Alumni Sweatshirt",
      price: "$40.00",
      image: "/merch/mecca-sweatshirt.jpg",
      alt: "Howard University Mecca Alumni Sweatshirt",
      category: "Apparel",
      url: "https://example.com/hu-forever-tshirt",
      status: "unreleased",
    },
    {
      id: 5,
      name: "HU Forever Tote Bag",
      price: "$15.00",
      image: "/merch/hu-tote.jpg",
      alt: "Howard University Forever Tote Bag",
      category: "Accessories",
      url: "https://twitter.com",
      status: "unreleased",
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
              <Card className="overflow-hidden bg-white/80 backdrop-blur-md border border-hu-gold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {item.status === "unreleased" && <ComingSoonOverlay />}
                <div className="relative">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-hu-navy to-hu-light-blue">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm opacity-75">Product Image</p>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-hu-navy leading-tight">
                        {item.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-hu-red">
                          {item.price}
                        </span>
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block bg-hu-red text-white py-2 rounded-lg hover:bg-hu-gold transition-colors font-bold text-center mt-2"
                      >
                        Buy Now
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default Merch;
