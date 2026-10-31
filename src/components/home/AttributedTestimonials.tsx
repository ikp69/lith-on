import { Quote, CheckCircle2 } from "lucide-react";

interface Testimonial {
  name: string;
  designation: string;
  company: string;
  location: string;
  project: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. R. K. Sharma",
    designation: "Director of Infrastructure & Plant Operations",
    company: "Invertis University Campus",
    location: "Bareilly, Uttar Pradesh",
    project: "1,000 kWh Lith-On BESS + 900 kWp Solar Microgrid",
    quote: "Replacing our 2,500 kVA diesel generator cluster with the Lith-On 1 MWh battery system eliminated ₹2.26 Crore in annual fuel logistics. The sub-10ms cutover is so seamless our computer servers and research labs never experience a flicker during grid dips."
  },
  {
    name: "Vikramjit Singh",
    designation: "President, Management Board",
    company: "Sector 54 Condominium Association",
    location: "Gurugram, Delhi-NCR",
    project: "7,000 kWh High-Rise BESS (500 Flats)",
    quote: "When CAQM GRAP Stage IV banned diesel generators across NCR, Lith-On delivered our 7 MWh storage system on schedule. Our 42 high-speed elevators and water pumps operate with zero emissions and zero diesel smoke, achieving simple payback in under 1.8 years."
  },
  {
    name: "Anand Deshmukh",
    designation: "Head of EV Charging Infrastructure",
    company: "Commercial Fast-Charging Network",
    location: "Delhi-Jaipur Expressway",
    project: "450 kWh / 150 kW High-Power Buffer Skid",
    quote: "Simultaneous 150 kW fast-charging was triggering severe DHBVN maximum demand penalties every month. Integrating the Lith-On buffer completely shaved our demand spikes, saving over ₹12.9 Lakh annually in utility billing while keeping the EV bays fully energized."
  }
];

export function AttributedTestimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF8] border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0B3388]">
            <Quote className="h-3.5 w-3.5 text-[#0B3388]" />
            <span>Audited Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mt-3 tracking-tight">
            Proven Performance in <span className="font-semibold text-[#0B3388]">Real Installations</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 font-normal">
            Direct operational feedback from facility directors, institutional boards, and EV station operators running Lith-On BESS hardware.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Project Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/70 border border-blue-100 px-3 py-1 text-[11px] font-semibold text-[#0B3388] mb-4">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="truncate max-w-[240px]">{t.project}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="font-bold text-sm text-gray-900">{t.name}</div>
                <div className="text-xs text-[#0B3388] font-medium">{t.designation}</div>
                <div className="text-[11px] text-gray-500 mt-0.5 font-medium">
                  {t.company} • {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
