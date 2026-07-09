import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="shrink-0">
                <rect width="36" height="36" rx="8" fill="#2563EB"/>
                <path d="M10 12h12v8H10z" fill="white" fillOpacity="0.9"/>
                <path d="M14 22h4v2h-4z" fill="white" fillOpacity="0.9"/>
                <circle cx="24" cy="22" r="4" fill="white" fillOpacity="0.3"/>
                <path d="M22 22l1.5-1.5M24 20v4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div className="leading-tight">
                <span className="text-[#2563EB] font-bold text-lg tracking-tight">Universal IT</span>
                <span className="text-[#0F172A] font-bold text-lg tracking-tight ml-1">Solution</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-[#64748B] hover:text-[#1E293B] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917667456367"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="https://wa.me/917667456367?text=Hello%20Universal%20IT%20Solution%2C%20I%20found%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#10B981] text-white font-semibold text-sm hover:bg-[#059669] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#64748B] hover:bg-slate-100"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-[72px] px-4 sm:px-6">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="8" fill="#2563EB"/>
                  <path d="M10 12h12v8H10z" fill="white" fillOpacity="0.9"/>
                  <path d="M14 22h4v2h-4z" fill="white" fillOpacity="0.9"/>
                  <circle cx="24" cy="22" r="4" fill="white" fillOpacity="0.3"/>
                  <path d="M22 22l1.5-1.5M24 20v4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span className="text-[#2563EB] font-bold text-base">Universal IT</span>
                <span className="text-[#0F172A] font-bold text-base">Solution</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-[#64748B] hover:bg-slate-100"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium ${
                    isActive(link.path)
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-[#1E293B] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-4 flex flex-col gap-3 border-t border-slate-100">
              <a
                href="tel:+917667456367"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-[#2563EB] text-[#2563EB] font-semibold"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/917667456367?text=Hello%20Universal%20IT%20Solution%2C%20I%20found%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#10B981] text-white font-semibold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
