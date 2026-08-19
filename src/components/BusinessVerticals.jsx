import React from 'react';
import { siteContent } from '../data/siteContent';
import { Droplets, Sun, Zap, CheckCircle } from 'lucide-react';

export default function BusinessVerticals() {
  const { verticals } = siteContent;

  const getVerticalHeader = (color, iconName) => {
    switch (iconName) {
      case 'Droplets':
        return {
          bg: 'bg-sky-50 border-sky-200 text-sky-700',
          icon: <Droplets className="w-8 h-8 text-sky-600" />,
          accent: 'border-t-4 border-t-sky-500'
        };
      case 'Sun':
        return {
          bg: 'bg-amber-50 border-amber-200 text-amber-700',
          icon: <Sun className="w-8 h-8 text-amber-600" />,
          accent: 'border-t-4 border-t-amber-500'
        };
      case 'Zap':
        return {
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
          icon: <Zap className="w-8 h-8 text-emerald-600" />,
          accent: 'border-t-4 border-t-emerald-500'
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200 text-slate-700',
          icon: <Zap className="w-8 h-8 text-slate-600" />,
          accent: 'border-t-4 border-t-slate-500'
        };
    }
  };

  return (
    <section id="verticals" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-100/60 border border-emerald-200">
            {verticals.sectionBadge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            {verticals.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {verticals.subtitle}
          </p>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* 2 Business Verticals Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
          {verticals.items.map((vert) => {
            const style = getVerticalHeader(vert.accentColor, vert.icon);
            return (
              <div
                key={vert.id}
                className={`rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${style.accent}`}
              >
                <div className="p-8 space-y-6">
                  <div className="h-16 flex items-center mb-2">
                    <img src={vert.logo} alt={vert.name} className="h-16 object-contain" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 tracking-wide uppercase mt-1">{vert.tagline}</p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {vert.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Offerings</h4>
                    <ul className="space-y-2.5">
                      {vert.offerings.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 rounded-xl bg-slate-900 text-white font-heading font-bold text-sm hover:bg-emerald-600 transition-colors shadow-sm"
                  >
                    Inquire For {vert.name} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
