import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Facebook, Twitter } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-[72px] min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1E293B] mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-[#2563EB] font-medium hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  // Convert content with ## headers to proper HTML
  const formatContent = (content: string) => {
    const lines = content.split("\n\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-bold text-[#1E293B] mt-10 mb-4">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return <h3 key={i} className="text-lg font-semibold text-[#1E293B] mt-6 mb-3">{line.replace(/\*\*/g, "")}</h3>;
      }
      if (line.startsWith("- ")) {
        const items = line.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.replace("- ", ""));
        return (
          <ul key={i} className="list-disc pl-6 space-y-2 my-4 text-[#64748B]">
            {items.map((item, j) => (
              <li key={j}>
                <strong className="text-[#1E293B]">{item.split(":")[0]}:</strong>
                {item.split(":")[1] || ""}
              </li>
            ))}
          </ul>
        );
      }
      if (line.startsWith("| ")) {
        // Skip markdown tables for now, render as text
        return null;
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote key={i} className="border-l-4 border-[#2563EB] pl-4 py-2 my-6 bg-blue-50/50 rounded-r-lg italic text-[#1E293B]">
            {line.replace("> ", "")}
          </blockquote>
        );
      }
      if (line.trim() === "") return null;
      return <p key={i} className="text-[#64748B] leading-relaxed mb-4">{line}</p>;
    });
  };

  return (
    <div className="pt-[72px]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#2563EB] transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-[#2563EB] mb-3">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B] leading-tight mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-[#64748B] mb-8">
          <span>Universal IT Solution</span>
          <span>&bull;</span>
          <span>{post.date}</span>
          <span>&bull;</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} read</span>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {formatContent(post.content)}
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h4 className="font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
            <Share2 size={18} /> Share this article
          </h4>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
              <Twitter size={18} />
            </button>
            <a
              href={`https://wa.me/?text=Check%20out%20this%20article%3A%20${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#10B981] text-white flex items-center justify-center hover:bg-[#059669] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-[#1E293B] mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group">
                  <div className="aspect-video rounded-xl overflow-hidden mb-3">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B] text-sm group-hover:text-[#2563EB] transition-colors line-clamp-2">{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
