import { useState } from "react";
import { X, Play } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  { src: "/gallery-1.jpg", alt: "Laptop screen replacement process", category: "Laptop Repair" },
  { src: "/gallery-2.jpg", alt: "Gaming PC with RGB lighting", category: "Gaming PC" },
  { src: "/gallery-3.jpg", alt: "Technician working on motherboard", category: "Laptop Repair" },
  { src: "/gallery-4.jpg", alt: "Organized workbench with tools", category: "Shop" },
  { src: "/gallery-5.jpg", alt: "Customer receiving repaired laptop", category: "Shop" },
  { src: "/gallery-6.jpg", alt: "Desktop hardware cleaning", category: "Desktop Repair" },
  { src: "/gallery-7.jpg", alt: "Multiple laptops on repair station", category: "Laptop Repair" },
  { src: "/gallery-8.jpg", alt: "RGB gaming setup complete build", category: "Gaming PC" },
  { src: "/gallery-9.jpg", alt: "SSD and RAM upgrade components", category: "Desktop Repair" },
  { src: "/gallery-10.jpg", alt: "Shop front exterior", category: "Shop" },
  { src: "/gallery-11.jpg", alt: "Technician installing Windows", category: "Desktop Repair" },
  { src: "/gallery-12.jpg", alt: "Gaming PC side panel internals", category: "Gaming PC" },
  { src: "/gallery-13.jpg", alt: "Laptop keyboard replacement", category: "Laptop Repair" },
  { src: "/gallery-14.jpg", alt: "Freshly repaired laptop", category: "Laptop Repair" },
  { src: "/gallery-15.jpg", alt: "Custom water-cooled gaming build", category: "Gaming PC" },
  { src: "/gallery-16.jpg", alt: "Team photo at workshop", category: "Shop" },
];

const videos = [
  { title: "Gaming PC Build Timelapse", duration: "2:34", thumb: "/gallery-2.jpg" },
  { title: "Laptop Screen Replacement Guide", duration: "3:15", thumb: "/gallery-1.jpg" },
  { title: "Shop Tour - Universal IT Solution", duration: "1:45", thumb: "/about-workshop.jpg" },
  { title: "Customer Testimonials", duration: "2:08", thumb: "/gallery-5.jpg" },
];

const filters = ["All", "Laptop Repair", "Desktop Repair", "Gaming PC", "Shop"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const heroRef = useScrollAnimation();
  const photoRef = useScrollAnimation();
  const videoRef = useScrollAnimation();

  const filtered = activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4" ref={heroRef as React.RefObject<HTMLDivElement>}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Gallery</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">Gallery</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">See our repair work, gaming builds, and happy customers.</p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={photoRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="Photos" title="Our Repair Work" />
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === f ? "bg-[#2563EB] text-white" : "bg-slate-100 text-[#64748B] hover:bg-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={videoRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="Videos" title="Watch Our Work" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {videos.map((v, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-[#0F172A]/30 group-hover:bg-[#0F172A]/50 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#2563EB]/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">{v.duration}</span>
                </div>
                <h4 className="font-semibold text-[#1E293B] mt-3 text-sm">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors">
            <X size={32} />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[90vh] rounded-lg object-contain" />
        </div>
      )}
    </div>
  );
}
