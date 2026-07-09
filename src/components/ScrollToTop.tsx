import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-[88px] right-6 z-40 w-[44px] h-[44px] rounded-full bg-white border border-slate-200 text-[#64748B] flex items-center justify-center shadow-md hover:bg-slate-50 transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
