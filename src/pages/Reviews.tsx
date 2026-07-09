import { useState } from "react";
import { Star, Search, CheckCircle, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { reviews } from "@/data/reviews";

export default function ReviewsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(9);
  const heroRef = useScrollAnimation();
  const ratingRef = useScrollAnimation();

  const filtered = reviews.filter((r) => {
    const matchFilter = filter === "All" || r.rating === parseInt(filter);
    const matchSearch = search === "" || r.name.toLowerCase().includes(search.toLowerCase()) || r.text.toLowerCase().includes(search.toLowerCase()) || r.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const avgRating = 4.9;
  const total = reviews.length;
  const distribution = [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 10 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4" ref={heroRef as React.RefObject<HTMLDivElement>}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">Reviews</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">Read what our 10,000+ customers say about our services.</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ratingRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <span className="text-6xl font-extrabold text-amber-500">{avgRating}</span>
              <div className="flex gap-1 justify-center md:justify-start mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={22} className="text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-sm text-[#64748B] mt-1">out of 5</p>
              <p className="text-sm text-[#64748B]">Based on {total}+ reviews</p>
              <a
                href="https://wa.me/917667456367?text=Hello%2C%20I%20would%20like%20to%20share%20my%20review%20about%20Universal%20IT%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Write a Review
              </a>
            </div>
            <div className="space-y-2">
              {distribution.map((d) => (
                <div key={d.stars} className="flex items-center gap-3">
                  <span className="text-sm text-[#64748B] w-12 text-right">{d.stars} star</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="text-sm text-[#64748B] w-10">{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {["All", "5", "4", "3"].map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setVisible(9); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === f ? "bg-[#2563EB] text-white" : "bg-white text-[#64748B] border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {f === "All" ? "All" : `${f} Stars`}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setVisible(9); }}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, visible).map((r) => (
              <div key={r.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB] font-bold text-sm">
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#1E293B] text-sm truncate">{r.name}</h4>
                    <p className="text-xs text-[#94A3B8]">{r.date}</p>
                  </div>
                  {r.verified && (
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1 shrink-0">
                      <CheckCircle size={10} /> Verified
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
                <span className="inline-block mt-3 text-xs bg-blue-50 text-[#2563EB] px-2 py-1 rounded-full font-medium">{r.service}</span>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748B]">No reviews found matching your search.</p>
            </div>
          )}

          {visible < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisible((v) => v + 9)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all"
              >
                Load More Reviews
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
