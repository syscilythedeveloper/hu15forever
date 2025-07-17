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

const Events = () => {
  const events = [
    {
      id: 1,
      date: "OCTOBER 19, 2025",
      title: "Royal Court Coronation | Homecoming 2025",
      image: "/events/royal-court.jpg",
      alt: "Royal Court Coronation with crown",
      status: "unreleased",
    },
    {
      id: 2,
      date: "OCTOBER 20, 2025",
      title: "Tail gate @ _____ | Homecoming 2025",
      image: "/events/bison-madness.jpg",
      alt: "Tail Gate",
      status: "unreleased",
    },
    {
      id: 3,
      date: "OCTOBER 22, 2025",
      title: "Lavender Reception | Homecoming 2025",
      image: "/events/lavender-reception.jpg",
      alt: "Lavender Reception party",
      status: "unreleased",
    },
    {
      id: 4,
      date: "OCTOBER 23, 2025",
      title: "Fashion Show | Homecoming 2025",
      image: "/events/fashion-show.jpg",
      alt: "Fashion Show",
      status: "unreleased",
    },

    {
      id: 5,
      date: "OCTOBER 23, 2025",
      title: "Club ____  | Homecoming 2025",
      image: "/events/fashion-show.jpg",
      alt: "Fashion Show",
      status: "unreleased",
    },

    {
      id: 6,
      date: "OCTOBER 23, 2025",
      title: "After Move | Homecoming 2025",
      image: "/events/fashion-show.jpg",
      alt: "Fashion Show",
      status: "unreleased",
    },
  ];

  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg animate-flash-hu-colors"></div>
            <h2 className="text-3xl font-bold text-white">Events</h2>
          </div>
        </div>
      </div>

      {/* Events Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {events.map((event) => (
            <CarouselItem
              key={event.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-md border border-hu-gold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {event.status === "unreleased" && <ComingSoonOverlay />}
                <div className="relative">
                  {/* Event Image */}
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
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm opacity-75">Event Image</p>
                      </div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-blue-600 tracking-wider">
                        {event.date}
                      </p>
                      <h3 className="text-xl font-bold text-hu-navy leading-tight">
                        {event.title}
                      </h3>
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

export default Events;
