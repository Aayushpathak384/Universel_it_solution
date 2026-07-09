import { Phone, Search, Wrench, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { services, pricingData } from "@/data/services";

export default function ServicesPage() {
  const heroRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const cardsRef = useStaggeredAnimation(12);

  const steps = [
    { icon: Phone, title: "Contact Us", desc: "Call or WhatsApp us with your issue" },
    { icon: Search, title: "Diagnosis", desc: "Free diagnosis by our expert technician" },
    { icon: Wrench, title: "Repair", desc: "Quick and professional repair service" },
    { icon: CheckCircle, title: "Delivery", desc: "Quality check and doorstep delivery" },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4" ref={heroRef as React.RefObject<HTMLDivElement>}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Services</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">Services</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">Complete laptop, desktop, and IT solutions for homes and businesses in Muzaffarpur.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={gridRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="What We Offer" title="Professional Computer Services" description="We provide comprehensive IT solutions to keep your devices running at their best." />
          </div>
          <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <Icon size={24} className="text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-lg mb-2">{s.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">{f}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+917667456367" className="text-xs px-3 py-2 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-blue-50 transition-colors">Call Now</a>
                    <a href="https://wa.me/917667456367" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-2 rounded-lg bg-[#10B981] text-white font-semibold hover:bg-[#059669] transition-colors">WhatsApp</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={pricingRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="Pricing" title="Laptop Repair Services Price" description="Transparent pricing with no hidden charges. Prices may vary based on laptop model and issue complexity." />
          </div>
          <div className="mt-12 rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="grid grid-cols-12 bg-[#2563EB] text-white text-sm font-semibold">
              <div className="col-span-4 sm:col-span-5 px-5 py-4">Service</div>
              <div className="col-span-5 sm:col-span-5 px-5 py-4 hidden sm:block">Description</div>
              <div className="col-span-8 sm:col-span-2 px-5 py-4 text-right">Price</div>
            </div>
            {pricingData.map((item, i) => (
              <div key={i} className={`grid grid-cols-12 text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <div className="col-span-4 sm:col-span-5 px-5 py-4 font-medium text-[#1E293B]">{item.service}</div>
                <div className="col-span-5 px-5 py-4 text-[#64748B] hidden sm:block">{item.description}</div>
                <div className="col-span-8 sm:col-span-2 px-5 py-4 text-right font-semibold text-[#2563EB]">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#64748B] italic mt-4">* Prices are indicative and may vary depending on laptop model and issue. Contact us for exact quote.</p>
          <div className="text-center mt-8">
            <a
              href="https://wa.me/917667456367?text=Hello%20Universal%20IT%20Solution%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20laptop%20repair."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#10B981] text-white font-bold hover:bg-[#059669] transition-all shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Get a Free Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={processRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="How It Works" title="Our Service Process" description="We make computer repair simple and hassle-free with our streamlined process." />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-200" />
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[#2563EB] text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon size={24} />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-[#1E293B] mb-1">{step.title}</h4>
                <p className="text-[#64748B] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Any of These Services?</h2>
          <p className="text-blue-100 text-lg mb-8">Contact us today for a free diagnosis and quote. We are ready to help!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+917667456367" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#2563EB] font-bold hover:bg-blue-50 transition-all shadow-xl">
              <Phone size={20} /> Call Now
            </a>
            <a href="https://wa.me/917667456367" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#10B981] text-white font-bold hover:bg-[#059669] transition-all shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
