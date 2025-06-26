"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
    },
    {
      id: 2,
      name: "Bison Pride Hoodie",
      price: "$45.00",
      originalPrice: "$60.00",
      image: "/merch/bison-hoodie.jpg",
      alt: "Howard Bison Pride Hoodie",
      category: "Apparel",
    },
    {
      id: 3,
      name: "HU Homecoming 2025 Cap",
      price: "$20.00",

      image: "/merch/hu-cap.jpg",
      alt: "Howard University Homecoming Baseball Cap",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Mecca Alumni Sweatshirt",
      price: "$40.00",
      originalPrice: "$55.00",
      image: "/merch/mecca-sweatshirt.jpg",
      alt: "Howard University Mecca Alumni Sweatshirt",
      category: "Apparel",
    },
    {
      id: 5,
      name: "HU Forever Tote Bag",
      price: "$15.00",

      image: "/merch/hu-tote.jpg",
      alt: "Howard University Forever Tote Bag",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Alumni License Plate Frame",
      price: "$12.00",
      originalPrice: "$18.00",
      image: "/merch/license-plate.jpg",
      alt: "Howard Bison Alumni License Plate Frame",
      category: "Accessories",
    },
    {
      id: 7,
      name: "HU Homecoming 2025 Mug",
      price: "$18.00",
      originalPrice: "$25.00",
      image: "/merch/hu-mug.jpg",
      alt: "Howard University Homecoming 2025 Coffee Mug",
      category: "Drinkware",
    },
    {
      id: 8,
      name: "Class of 2015 Reunion Polo",
      price: "$35.00",
      originalPrice: "$50.00",
      image: "/merch/class-polo.jpg",
      alt: "Howard University Class of 2015 Reunion Polo",
      category: "Apparel",
    },
  ];

  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg animate-flash-hu-colors"></div>
            <h2 className="text-3xl font-bold text-white">Merch</h2>
          </div>
        </div>
        <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium">
          View All Items
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
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
              <Card className="overflow-hidden bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
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

                    {/* Sale Badge */}
                    {item.originalPrice && (
                      <div className="absolute top-3 right-3 bg-hu-red text-white px-2 py-1 rounded-full text-xs font-bold">
                        SALE
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-hu-gold tracking-wider uppercase">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-bold text-hu-navy leading-tight">
                        {item.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-hu-red">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full bg-hu-navy text-white py-2 rounded-lg hover:bg-hu-light-blue transition-colors font-semibold">
                        Add to Cart
                      </button>
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
