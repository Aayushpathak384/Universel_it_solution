import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, Tag, Shield, ChevronDown, Star, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * end);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-[#1E293B] pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-[#2563EB] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0" }}
      >
        <p className="px-5 pb-5 text-[#64748B] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const whyRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const featureCardsRef = useStaggeredAnimation(9);
  const serviceCardsRef = useStaggeredAnimation(6);
  const reviewCardsRef = useStaggeredAnimation(3);

  const faqs = [
    { q: "How long does laptop repair take?", a: "Most laptop repairs are completed the same day. Simple issues like software installation or virus removal take 1-2 hours. Hardware repairs like screen replacement or keyboard replacement typically take 2-4 hours. Complex motherboard repairs may take 1-2 days." },
    { q: "Do you provide home service in Muzaffarpur?", a: "Yes, we provide home and office visit services across Muzaffarpur and nearby areas including Kalyani, Bhagwanpur, Kanti, and Motipur. Our technician will come to your location with all necessary tools and parts." },
    { q: "What brands do you repair?", a: "We repair all major laptop and desktop brands including Dell, HP, Lenovo, Acer, Asus, Apple MacBook, MSI, Samsung, Toshiba, Sony Vaio, and all assembled/desktop brands." },
    { q: "Do you use genuine spare parts?", a: "Yes, we use only genuine and high-quality spare parts for all repairs. We source parts directly from authorized distributors. All parts come with warranty coverage." },
    { q: "How much does laptop screen replacement cost?", a: "Laptop screen replacement cost depends on the brand and model. Basic screens start from Rs. 2,499. Premium screens for gaming laptops and MacBooks may cost more. Contact us for a free quote." },
    { q: "Do you offer warranty on repairs?", a: "Yes, all our repairs come with warranty. Screen and keyboard replacements have 3-6 months warranty. Software services have 1-month warranty. Hardware repairs have warranty ranging from 3 months to 1 year depending on the service." },
    { q: "Can you recover lost data from my laptop?", a: "Yes, we provide professional data recovery services. We can recover data from failed hard drives, corrupted systems, formatted drives, and physically damaged storage. Success rate is very high for logical failures." },
    { q: "Do you build custom gaming PCs?", a: "Absolutely! We specialize in custom gaming PC builds. We help you select the right components based on your budget and requirements. We also do RGB lighting setup, liquid cooling installation, and performance optimization." },
  ];

  const galleryImages = [
    { src: "/gallery-1.jpg", alt: "Laptop screen replacement" },
    { src: "/gallery-2.jpg", alt: "Gaming PC with RGB" },
    { src: "/gallery-3.jpg", alt: "Motherboard repair" },
    { src: "/gallery-4.jpg", alt: "Organized workbench tools" },
    { src: "/gallery-5.jpg", alt: "Customer receiving laptop" },
    { src: "/gallery-6.jpg", alt: "Desktop cleaning" },
    { src: "/gallery-7.jpg", alt: "Multiple laptop repairs" },
    { src: "/gallery-8.jpg", alt: "RGB gaming setup" },
  ];

  const featuredReviews = reviews.slice(0, 3);
  const featuredServices = services.slice(0, 6);

  const features = [
    { icon: Clock, title: "17+ Years Experience", desc: "Serving customers since 2007 with honest and professional service." },
    { icon: Shield, title: "Expert Technicians", desc: "Certified and trained professionals for all laptop and desktop brands." },
    { icon: CheckCircle, title: "Genuine Spare Parts", desc: "We use only original and high-quality replacement parts." },
    { icon: Tag, title: "Affordable Pricing", desc: "Best prices in Muzaffarpur with no hidden charges." },
    { icon: Phone, title: "Same Day Service", desc: "Most repairs completed within 24 hours." },
    { icon: MapPin, title: "Home & Office Visits", desc: "We come to your location for repairs and service." },
    { icon: Star, title: "Gaming PC Specialists", desc: "Custom gaming desktop builds and upgrades." },
    { icon: Shield, title: "Data Security", desc: "Your data is safe with us. We ensure complete privacy." },
    { icon: CheckCircle, title: "Warranty Support", desc: "All repairs come with warranty for peace of mind." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef as React.RefObject<HTMLDivElement>}>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6">
                17+ Years of Experience
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.1] tracking-tight">
                Universal IT Solution
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mt-4">
                Your Trusted Partner for Laptop, Desktop & IT Solutions in Muzaffarpur
              </h2>
              <p className="text-slate-400 mt-5 max-w-lg text-base leading-relaxed">
                Professional laptop and desktop repair services with 17+ years of experience. Fast, reliable, and affordable IT solutions at your doorstep in Muzaffarpur and nearby areas.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="tel:+917667456367"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/917667456367?text=Hello%20Universal%20IT%20Solution%2C%20I%20found%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#10B981] text-white font-semibold hover:bg-[#059669] transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Now
                </a>
                {/* "Get Free Quote" button removed */}
              </div>
              {/* Trust bar */}
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
                {[
                  { icon: Clock, label: "Same Day Service" },
                  { icon: Tag, label: "Affordable Pricing" },
                  { icon: Shield, label: "Certified Technicians" },
                  { icon: CheckCircle, label: "Genuine Parts" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon size={16} className="text-blue-400" />
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero Image */}
            <div className="hidden lg:flex justify-center relative">
              <img
                src="/hero-illustration.png"
                alt="Professional laptop repair technician"
                className="max-w-[480px] w-full h-auto animate-float drop-shadow-2xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: 17, suffix: "+", label: "Years Experience" },
              { value: 10000, suffix: "+", label: "Happy Customers" },
              { value: 0, suffix: "Same Day", label: "Service Available" },
              { value: 50, suffix: "+", label: "Services Offered" },
              { value: 0, suffix: "4.9", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-[#2563EB]">
                  {stat.value > 0 ? <AnimatedCounter end={stat.value} suffix={stat.suffix} /> : stat.suffix}
                </span>
                <span className="text-sm text-[#64748B] mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whyRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="The Most Trusted Computer Service in Muzaffarpur"
              description="With over 17 years of experience, we have built a reputation for quality, honesty, and customer satisfaction."
            />
          </div>
          <div
            ref={featureCardsRef as React.RefObject<HTMLDivElement>}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <f.icon size={24} className="text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">{f.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader
              eyebrow="Our Services"
              title="Complete Laptop & Desktop Solutions"
              description="We offer a wide range of professional computer services to meet all your technology needs."
            />
          </div>
          <div
            ref={serviceCardsRef as React.RefObject<HTMLDivElement>}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {featuredServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <Icon size={24} className="text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-lg mb-2">{s.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+917667456367" className="text-xs px-3 py-2 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-blue-50 transition-colors">
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/917667456367?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(s.title)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-2 rounded-lg bg-[#10B981] text-white font-semibold hover:bg-[#059669] transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={reviewsRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader
              eyebrow="Customer Reviews"
              title="What Our Customers Say"
              description="Read reviews from our 10,000+ satisfied customers across North Bihar."
            />
          </div>
          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <span className="text-5xl font-extrabold text-amber-500">4.9</span>
              <div className="flex gap-1 justify-center mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-sm text-[#64748B] mt-1">Based on 100+ reviews</p>
            </div>
          </div>
          {/* Review Cards */}
          <div
            ref={reviewCardsRef as React.RefObject<HTMLDivElement>}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredReviews.map((r) => (
              <div key={r.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB] font-bold text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] text-sm">{r.name}</h4>
                    <p className="text-xs text-[#94A3B8]">{r.date}</p>
                  </div>
                  {r.verified && (
                    <span className="ml-auto text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <CheckCircle size={10} />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < r.rating ? "text-amber-500 fill-amber-500" : "text-slate-200"} />
                  ))}
                </div>
                <h4 className="font-semibold text-[#1E293B] text-sm mb-1">{r.title}</h4>
                <p className="text-[#64748B] text-sm leading-relaxed">{r.text}</p>
                <span className="inline-block mt-3 text-xs bg-blue-50 text-[#2563EB] px-2 py-1 rounded-full font-medium">
                  {r.service}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
            >
              Read All Reviews
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={galleryRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader
              eyebrow="Our Work"
              title="See Our Repair Work in Action"
              description="Browse through our gallery of repair work, gaming builds, and happy customers."
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to the most common questions about our services."
            />
          </div>
          <div className="space-y-3 mt-12">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ctaRef as React.RefObject<HTMLDivElement>}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Computer Repair Service?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Call us now or send a WhatsApp message for instant support. We are available 7 days a week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917667456367"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#2563EB] font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              <Phone size={20} />
              Call Now: +91 7667456367
            </a>
            <a
              href="https://wa.me/917667456367?text=Hello%20Universal%20IT%20Solution%2C%20I%20found%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#10B981] text-white font-bold hover:bg-[#059669] transition-all shadow-xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
          <p className="text-blue-200/70 text-sm mt-6">
            Free diagnosis &bull; No hidden charges &bull; Same day service
          </p>
        </div>
      </section>
    </div>
  );
}
