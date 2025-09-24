"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const Events = () => {
  const events = [
    {
      id: 1,
      date: "OCTOBER 23, 2025",
      title: "HU15 Welcome Happy Hour",
      alt: "HU15 Welcome Happy Hour",
      location: "TBD",
      time: "6-10 PM",
    },
    {
      id: 2,
      date: "OCTOBER 23, 2025",
      title: "Twerk Tape Party",
      image: "/events/twerkTapeFlyer.png",
      link: "https://www.ticketmaster.com/event/1500630BF0363D4F",
      alt: "Twerk Tape Party",
      location: "SoundCheck Lounge - 1420 K St NW, Washington, DC 20005",
      time: "9PM - ???",
    },
    {
      id: 3,
      date: "OCTOBER 24, 2025",
      title: "Visitation",
      image: "/events/visitationFlyer.jpeg",
      link: "https://www.eventbrite.com/e/visitation-hu-homecoming-tickets-1633061574129?aff=oddtdtcreator",
      alt: "Visitation Party",
      location: "Next Level DC - 17 K Street Northeast Washington, DC 20002",
      time: "10PM - 3AM",
    },
    {
      id: 4,
      date: "OCTOBER 24, 2025",
      title: "Official HU15 10-Year Celebration",
      alt: "Official HU15 10-Year Celebration",
      location: "TBD",
      time: "TBD",
    },
    {
      id: 5,
      date: "OCTOBER 25, 2025",
      title: "Off the Yard (Tailgate)",
      image: "/events/offTheYard.png",
      link: "https://www.gohamhu.com/offtheyard",
      alt: "Off the Yard (Tailgate)",
      location: "The Bullpen - 1201 Half Street SW DC",
      time: "12PM - 7PM",
    },
    {
      id: 6,
      date: "OCTOBER 25, 2025",
      title: "Close Friends (Invite Only)",
      alt: "Close Friends (Invite Only)",
      location: "TBA 10/25",
      time: "10PM - 3AM",
    },
  ];

  return (
    <div className="w-full py-12 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-1.5 rounded-lg animate-flash-hu-colors"></div>
        <h2 className="text-3xl font-bold text-hu-gold drop-shadow-lg font-montserrat">
          Events
        </h2>
      </div>

      {/* Events Carousel with external arrows */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {/* Row: prev | content | next */}
        <div className="flex w-full items-center gap-4">
          {/* Prev button OUTSIDE the track */}

          {/* Slide track */}
          <div className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event) => (
                <CarouselItem
                  key={event.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="event-card relative aspect-[3/4] p-0 overflow-hidden border border-blue-950">
                    {/* If we have an image, show the image card (no overlay) */}
                    {event.image ? (
                      event.link ? (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative block w-full h-full"
                          aria-label={event.title}
                        >
                          <Image
                            src={event.image}
                            alt={event.alt}
                            fill
                            className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </a>
                      ) : (
                        <div
                          className="relative w-full h-full"
                          aria-label={event.title}
                        >
                          <Image
                            src={event.image}
                            alt={event.alt}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )
                    ) : (
                      /* If no image, show a text info layout */
                      <div className="relative flex h-full w-full rounded-lg">
                        {/* Background */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-950/90 via-neutral-700 to-red-950/80  backdrop-blur" />
                        {/* Content */}
                        <div className="relative z-10 flex h-full w-full flex-col justify-between items-center p-4 text-white">
                          {/* Date pill at the top */}
                          <div className="flex justify-center w-full">
                            <span className="inline-flex items-center rounded-md bg-white/15 px-2 py-1 text-xs font-medium tracking-wide backdrop-blur">
                              {event.date}
                            </span>
                          </div>

                          {/* Title in the middle */}
                          <div className="flex-1 flex items-center justify-center w-full">
                            <h3 className="text-lg md:text-xl font-semibold leading-snug text-center ">
                              {(() => {
                                const words = event.title.split(" ");
                                const firstLine = words.slice(0, 2).join(" ");
                                const secondLine = words.slice(2).join(" ");
                                return (
                                  <>
                                    <span>{firstLine}</span>
                                    {secondLine && (
                                      <>
                                        <br />
                                        {secondLine}
                                      </>
                                    )}
                                  </>
                                );
                              })()}
                            </h3>
                          </div>

                          {/* Meta: location + time at the bottom */}
                          <div className="space-y-1 text-sm text-white/90 text-center w-full rounded-md bg-white/15 px-2 py-1 ">
                            {event.location && (
                              <p className="line-clamp-2">
                                Location: {event.location}
                              </p>
                            )}
                            {event.time && (
                              <p className="font-medium">Time: {event.time}</p>
                            )}
                          </div>
                        </div>

                        {/* Clickable layer if link exists */}
                        {event.link ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={event.title}
                            className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          />
                        ) : null}
                      </div>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <CarouselPrevious className="left-2 bg-blue-200/30 border border-blue-200/20 rounded-full p-1" />
          <CarouselNext className="right-2 bg-blue-200/30 border border-blue-200/20 rounded-full p-1" />
        </div>
      </Carousel>
    </div>
  );
};

export default Events;
