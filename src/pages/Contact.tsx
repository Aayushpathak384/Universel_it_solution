import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "Laptop Repair", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", subject: "Laptop Repair", message: "" });
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="text-center relative z-10 px-4" ref={heroRef as React.RefObject<HTMLDivElement>}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-blue-300">Contact</span>
          </div>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">Get in touch for fast and reliable computer repair services.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div ref={formRef as React.RefObject<HTMLDivElement>}>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Send Us a Message</h3>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Message Sent!</h4>
                  <p className="text-emerald-600 text-sm">We will get back to you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1">Name *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1">Phone *</label>
                    <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Laptop Repair</option>
                      <option>Desktop Repair</option>
                      <option>Gaming PC</option>
                      <option>Software Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1">Message *</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Describe your issue..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all">
                    <Send size={18} /> Send Message
                  </button>
                  <p className="text-xs text-[#64748B] text-center">We will get back to you within 30 minutes during working hours.</p>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] text-sm">Address</h4>
                    <p className="text-[#64748B] text-sm mt-0.5">Universal IT Solution, Kalyani, Muzaffarpur, Bihar, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] text-sm">Phone</h4>
                    <a href="tel:+917667456367" className="text-[#64748B] text-sm mt-0.5 hover:text-[#2563EB]">+91 7667456367</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] text-sm">WhatsApp</h4>
                    <a href="https://wa.me/917667456367" target="_blank" rel="noopener noreferrer" className="text-[#64748B] text-sm mt-0.5 hover:text-[#10B981]">+91 7667456367</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] text-sm">Email</h4>
                    <span className="text-[#64748B] text-sm mt-0.5">contact@universalitsolution.in</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B] text-sm">Working Hours</h4>
                    <p className="text-[#64748B] text-sm mt-0.5">Monday - Saturday: 9:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex gap-3 mt-6">
                <a href="tel:+917667456367" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-colors text-sm">
                  <Phone size={16} /> Call Now
                </a>
                <a href="https://wa.me/917667456367" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#10B981] text-white font-semibold hover:bg-[#059669] transition-colors text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[21/9] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28631.137293019393!2d85.35!3d26.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11e2d30649a5%3A0x76e72cb85557389c!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Universal IT Solution Location"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/AYZdCuduDWUky1GLA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all"
            >
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
