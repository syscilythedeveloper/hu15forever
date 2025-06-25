import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Fundraising from "@/components/Fundraising";
import Events from "@/components/Events";
import Merch from "@/components/Merch";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-background min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div id="home">
            <Hero />
          </div>

          {/* Fundraising Section */}
          <div id="fundraising">
            <Fundraising />{" "}
          </div>
          {/* Events Section */}
          <div id="events">
            <Events />
          </div>

          {/* Merch Section */}
          <div id="merchandise">
            <Merch />
          </div>
        </div>
      </div>
    </>
  );
}
