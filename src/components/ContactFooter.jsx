import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, ShieldCheck, Leaf } from 'lucide-react';

export default function ContactFooter() {
  const { company, contact, navLinks } = siteContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'FYN Aqua (Water Solutions)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'FYN Aqua (Water Solutions)', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello FYN Engineers! I would like to inquire about your engineering solutions.")}`;

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              {contact.sectionBadge}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              {contact.title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {contact.subtitle}
            </p>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">{company.name}</h3>
                    <p className="text-xs text-slate-400 font-semibold">{company.tagline}</p>
                  </div>
                </div>

                <div className="space-y-5 pt-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200 font-semibold">Registered Headquarters:</strong>
                      <span className="text-slate-300">{company.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200 font-semibold">Phone Helpline:</strong>
                      <span className="text-slate-300">{company.phone} / {company.alternatePhone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200 font-semibold">Email Addresses:</strong>
                      <span className="text-slate-300">{company.email} • {company.supportEmail}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200 font-semibold">Working Hours:</strong>
                      <span className="text-slate-300">Mon – Sat: 9:00 AM – 7:00 PM IST (24/7 AMC Support)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps Box */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-64">
                <iframe
                  title="FYN Engineers Location Map"
                  src={company.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900">Consultation Request Submitted!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. An engineering specialist from FYN Engineers will contact you within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">Send Us Your Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        {contact.formFields.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        {contact.formFields.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        {contact.formFields.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        {contact.formFields.serviceLabel}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                      >
                        <option value="FYN Aqua (Water Solutions)">FYN Aqua (Water Solutions)</option>
                        <option value="FYN Solar (Photovoltaic Energy)">FYN Solar (Photovoltaic Energy)</option>
                        <option value="Electrical Solutions (Power Backup)">Electrical Solutions (Power Backup)</option>
                        <option value="Turnkey Engineering Design">Turnkey Engineering Design</option>
                        <option value="AMC & Service Support">AMC & Service Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {contact.formFields.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your site location, capacity requirements, or specific design constraints..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 text-white font-heading font-extrabold text-base hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {contact.formFields.submitButton}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat with FYN Engineers
        </span>
      </a>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <span className="font-heading font-extrabold text-lg text-white">{company.name}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {company.tagline} — {company.coreValue}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SSL Encrypted & Certified</span>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                {navLinks.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="hover:text-emerald-400 transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Verticals</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>FYN Aqua (Water Solutions)</li>
                <li>FYN Solar (Photovoltaic Energy)</li>
                <li>Electrical Solutions & Power Backup</li>
                <li>Annual Maintenance Contracts (AMC)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Contact Info</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{company.address}</p>
              <p className="text-xs text-slate-400 mt-2">Ph: {company.phone}</p>
              <p className="text-xs text-slate-400">Email: {company.email}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <p>Designed with Green Energy & Engineering Aesthetics</p>
          </div>

        </div>
      </footer>
    </>
  );
}
