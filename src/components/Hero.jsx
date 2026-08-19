import React from 'react';
import { siteContent } from '../data/siteContent';
import { ShieldCheck, ArrowRight, Droplets, Sun, Zap } from 'lucide-react';

export default function Hero() {
  const { hero } = siteContent;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-6 h-6 text-sky-500" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-sky-500" />;
      default: return <Zap className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-100/60 rounded-full filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-100/60 rounded-full filter blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {hero.badge}
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight">
            {hero.headline} <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">{hero.headlineEmphasis}</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 text-white font-heading font-bold text-base hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
            >
              {hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#verticals"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-800 border-2 border-slate-200 font-heading font-bold text-base hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* 3 Quick Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-20">
          {hero.quickFeatureCards.map((card) => (
            <div
              key={card.id}
              className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                  {getIcon(card.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{card.subtitle}</span>
                  <h3 className="font-heading font-bold text-lg text-slate-900">{card.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
