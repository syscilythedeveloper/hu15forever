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
        <div className="w-full max-w-5xl rounded-2xl shadow-elegant overflow-hidden bg-blue-900/10 border border-blue-900/80">
          {/* Top bar with logos */}
          <div className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-blue-900/40">
            <div className="flex items-center gap-4">
              {/* Placeholder for HU15 logo */}
              <div className="inline-block  border border-slate-600 rounded-2xl ">
                <Image
                  src="/hu15forever.jpeg"
                  width={200}
                  height={200}
                  alt="HU15 Forever Logo"
                  className="h-12 md:h-16 w-auto object-contain rounded-lg shadow-sm"
                />
              </div>
              <div className="text-white/80 text-sm">×</div>
              {/* GiveButter logo placeholder */}
              <div className="inline-block border border-slate-600 rounded-2xl bg-slate-400">
                <Image
                  src="/Givebutter-logo.avif"
                  width={200}
                  height={200}
                  alt="Givebutter Logo"
                  className="h-12  md:h-16 w-16 object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="text-white/60 text-sm font-medium">
              Powered by Givebutter
            </div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8 px-6 md:px-10 py-10">
            {/* Left: Headings & taglines */}
            <div>
              <p className="text-hu-gold text-sm tracking-widest font-semibold uppercase mb-2">
                Howard University · Class of 2015
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                10‑Year Reunion Scholarship Fund
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs md:text-sm text-white/90 bg-white/10 border border-white/15 rounded-full px-3 py-1">
                  Donate today. Share with classmates. Make an impact.
                </span>
                <span className="text-xs md:text-sm text-white/90 bg-white/10 border border-white/15 rounded-full px-3 py-1">
                  All proceeds go directly toward helping a graduating senior
                  cover their Spring 2026 balance.
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
                className="mt-6 w-full gap-2 font-semibold py-3 h-auto"
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

              <p className="mt-3 text-xs text-white/70 text-center break-all">
                givebutter.com/HU15
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="px-6 md:px-10 pb-8 -mt-4">
            <p className="text-white/70 text-sm">
              Your gift directly supports a Class of 2015 senior by helping
              cover their remaining Spring 2026 balance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
