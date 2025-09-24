import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Scholarship from "@/components/Scholarship";
import Events from "@/components/Events";
import Merch from "@/components/Merch";
import Memories from "@/components/Memories";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-background min-h-screen pt-5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div id="home">
            <Hero />
          </div>
          <Separator />
          {/* Memories Section */}
          <div id="memories">
            <Memories />
          </div>
          <Separator />

          {/* Fundraising Section */}
          {/* Events Section */}
          <div id="events">
            <Events />
          </div>
          <Separator />

          {/* Merch Section */}
          <div id="merchandise">
            <Merch />
          </div>
          <Separator />

          {/* Fundraising Section */}
          <div id="fundraising">
            <Scholarship />{" "}
          </div>
          <Separator />
        </div>
      </div>
    </>
  );
}
