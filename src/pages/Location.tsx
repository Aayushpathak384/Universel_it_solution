import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { locations } from "@/data/locations";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-[#1E293B] pr-4">{q}</span>
        <ChevronDown size={20} className={`text-[#2563EB] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "300px" : "0" }}>
        <p className="px-5 pb-5 text-[#64748B] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Location() {
  const { city } = useParams<{ city: string }>();
  const location = locations.find((l) => l.slug === city);
  const contentRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  if (!location) {
    return (
      <div className="pt-[72px] min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1E293B] mb-4">Location Not Found</h1>
          <Link to="/" className="text-[#2563EB] font-medium hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const serviceList = [
    "Laptop Screen Replacement",
    "Keyboard & Battery Replacement",
    "Motherboard Repair",
    "Virus & Malware Removal",
    "Data Recovery Services",
    "RAM & SSD Upgrades",
    "Windows Installation",
    "Gaming PC Assembly",
    "Annual Maintenance Contracts",
    "Home & Office Visits",
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">{location.title}</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">{location.name}</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">{location.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2" ref={contentRef as React.RefObject<HTMLDivElement>}>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
                Computer Repair Services in {location.name}
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                {location.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Service List */}
              <h3 className="text-xl font-bold text-[#1E293B] mt-10 mb-4">Services Available in {location.name}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceList.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-[#64748B]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="tel:+917667456367" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all">
                  <Phone size={16} /> Call Now
                </a>
                <a href="https://wa.me/917667456367" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10B981] text-white font-semibold hover:bg-[#059669] transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h4 className="font-semibold text-[#1E293B] mb-4">Quick Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-[#2563EB] shrink-0" />
                    <span className="text-[#64748B]">{location.distance}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-[#2563EB] shrink-0" />
                    <a href="tel:+917667456367" className="text-[#64748B] hover:text-[#2563EB]">+91 7667456367</a>
                  </div>
                </div>
              </div>

              {/* Nearby Areas */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h4 className="font-semibold text-[#1E293B] mb-4">Areas We Serve in {location.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyAreas.map((area) => (
                    <span key={area} className="text-xs bg-white text-[#64748B] px-3 py-1.5 rounded-full border border-slate-200">{area}</span>
                  ))}
                </div>
              </div>

              {/* Other Locations */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h4 className="font-semibold text-[#1E293B] mb-4">Other Service Areas</h4>
                <div className="space-y-2">
                  {locations.filter((l) => l.slug !== city).map((l) => (
                    <Link key={l.slug} to={`/locations/${l.slug}`} className="flex items-center justify-between text-sm text-[#64748B] hover:text-[#2563EB] py-1.5 transition-colors">
                      <span>{l.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City FAQ */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="FAQ" title={`Frequently Asked Questions - ${location.name}`} />
          </div>
          <div className="space-y-3 mt-10">
            {location.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
