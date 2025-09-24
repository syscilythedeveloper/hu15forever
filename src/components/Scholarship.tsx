import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ScholarshipFund() {
  const donateUrl = "https://givebutter.com/HU15";

  return (
    <>
      <h2 className="text-3xl font-bold text-hu-gold drop-shadow-lg font-montserrat text-center mt-4">
        Scholarship
      </h2>

      <section className="w-full px-4 py-12 flex justify-center">
        <div className="relative w-full max-w-5xl rounded-2xl shadow-elegant overflow-hidden bg-blue-900/10 border border-blue-900/80">
          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8 px-6 md:px-10 pb-10 pt-2">
            {/* Left: Headings & taglines */}
            <div>
              <div className="flex justify-left  w-25 bg-blue-800/10 p-2 rounded-lg mb-4 gap-3">
                <Image
                  src="/hu15forever.jpeg"
                  width={40}
                  height={40}
                  alt="HU15 Forever Logo"
                  className="h-8 w-auto object-contain rounded-lg shadow-sm"
                />

                <Image
                  src="/Givebutter-logo.avif"
                  width={40}
                  height={40}
                  alt="Givebutter Logo"
                  className="h-8 w-8 object-contain rounded-lg shadow-sm "
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
                10-Year Reunion Scholarship Fund
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-hu-gold text-sm font-semibold uppercase mb-2 text-center">
                  Donate today. Share with classmates. Make an impact.
                </span>
              </div>
            </div>

            {/* Right: Goal + CTA */}
            <div className="bg-white/15 rounded-xl border border-white/10 p-5 md:p-6 text-white">
              <dl className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-white/80">Goal</dt>
                  <dd className="font-semibold">
                    $5,000 Goal – Every Dollar Counts!
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-white/80">Deadline</dt>
                  <dd className="font-semibold">Donate by December 1, 2025</dd>
                </div>
              </dl>

              <Button
                asChild
                variant="secondary"
                className="mt-6 w-full gap-2 font-semibold py-3 h-auto bg-green-400"
              >
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate on Givebutter
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 md:px-10 pb-8 -mt-4">
            <p className="text-[10px] md:text-sm text-hu-gold ">
              Your gift directly supports a Class of 2015 senior by helping
              cover their remaining Spring 2026 balance.
            </p>
          </div>

          {/* Bottom-right logos */}
        </div>
      </section>
    </>
  );
}
