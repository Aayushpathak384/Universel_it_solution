import { Target, Eye, Award, Users, BookOpen, Shield, Lightbulb, Heart } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Heart, title: "Integrity", desc: "We believe in honest pricing and transparent communication. No hidden charges, no unnecessary repairs." },
  { icon: Award, title: "Quality", desc: "Every repair meets our high quality standards. We use genuine parts and follow best practices." },
  { icon: Users, title: "Customer First", desc: "Your satisfaction is our priority. We listen, understand, and deliver solutions that work for you." },
  { icon: BookOpen, title: "Expertise", desc: "Our team stays updated with the latest technology to provide the best solutions." },
  { icon: Shield, title: "Reliability", desc: "We stand behind our work with warranties and after-service support." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new technologies to provide cutting-edge solutions to our customers." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & Lead Technician", exp: "17 years", bio: "Expert in motherboard repair and complex hardware diagnostics.", img: "/team-1.jpg" },
  { name: "Vikash Sharma", role: "Senior Laptop Specialist", exp: "10 years", bio: "Specializes in all major laptop brands and screen replacements.", img: "/team-2.jpg" },
  { name: "Amit Patel", role: "Gaming PC Expert", exp: "8 years", bio: "Custom gaming builds, RGB setups, and performance optimization specialist.", img: "/team-3.jpg" },
  { name: "Priya Singh", role: "Customer Relations", exp: "5 years", bio: "Ensures smooth communication and handles service coordination.", img: "/team-4.jpg" },
];

export default function About() {
  const storyRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const valueCardsRef = useStaggeredAnimation(6);
  const teamCardsRef = useStaggeredAnimation(4);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Universal IT Solution</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">About</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">Your trusted computer service partner in Muzaffarpur for over 17 years.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "17+", label: "Years of Service" },
              { value: "10,000+", label: "Customers Served" },
              { value: "50+", label: "Services Offered" },
              { value: "15+", label: "Expert Technicians" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-3xl md:text-4xl font-extrabold text-[#2563EB]">{s.value}</span>
                <p className="text-sm text-[#64748B] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/about-workshop.jpg" alt="Universal IT Solution Workshop" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div ref={storyRef as React.RefObject<HTMLDivElement>}>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#2563EB] mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">Serving Muzaffarpur Since 2007</h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>Universal IT Solution was founded in 2007 with a simple mission — to provide honest, reliable, and affordable computer repair services to the people of Muzaffarpur and surrounding areas. What started as a small repair shop has grown into one of the most trusted names in IT services across North Bihar.</p>
                <p>Over the past 17 years, we have repaired thousands of laptops and desktops, built hundreds of custom gaming PCs, and helped countless businesses with their IT infrastructure. Our commitment to quality service and customer satisfaction has earned us a loyal customer base of over 10,000 happy clients.</p>
                <p>We take pride in using only genuine spare parts, employing certified technicians, and offering transparent pricing with no hidden charges. Whether it is a simple software installation or a complex motherboard repair, we treat every job with the same level of professionalism and care.</p>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={missionRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <Target size={28} className="text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">Our Mission</h3>
              <p className="text-[#64748B] leading-relaxed">To provide fast, reliable, and affordable computer repair services to every home and business in Muzaffarpur and surrounding areas. We aim to be the first choice for all IT solutions through excellence in service and customer care.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <Eye size={28} className="text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">Our Vision</h3>
              <p className="text-[#64748B] leading-relaxed">To become the most trusted and comprehensive IT service provider in Bihar, known for quality workmanship, genuine parts, and customer-first approach. We envision a digitally empowered community where technology issues never hold anyone back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={valuesRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="Our Values" title="What We Stand For" />
          </div>
          <div ref={valueCardsRef as React.RefObject<HTMLDivElement>} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <v.icon size={22} className="text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E293B] mb-1">{v.title}</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={teamRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="Our Team" title="Meet the Experts" description="Our skilled team of professionals is dedicated to providing you with the best IT services." />
          </div>
          <div ref={teamCardsRef as React.RefObject<HTMLDivElement>} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-[#1E293B]">{t.name}</h4>
                  <p className="text-xs text-[#2563EB] font-medium mt-0.5">{t.role}</p>
                  <p className="text-xs text-[#64748B] mt-1">{t.exp} experience</p>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
