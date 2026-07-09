import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogPosts, blogCategories } from "@/data/blog";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(6);
  const heroRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4" ref={heroRef as React.RefObject<HTMLDivElement>}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Blog</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">Blog</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">Tips, guides, and insights about laptop and desktop maintenance.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={gridRef as React.RefObject<HTMLDivElement>}>
            <SectionHeader eyebrow="Latest Articles" title="Computer Tips & Guides" />
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCategory(c); setVisible(6); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === c ? "bg-[#2563EB] text-white" : "bg-slate-100 text-[#64748B] hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, visible).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs bg-blue-50 text-[#2563EB] px-2 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[#94A3B8]">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-lg mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {visible < filtered.length && (
            <div className="text-center mt-10">
              <button onClick={() => setVisible((v) => v + 6)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all">
                Load More Articles <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
