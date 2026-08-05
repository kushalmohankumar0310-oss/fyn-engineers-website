import React from 'react';
import { siteContent } from '../data/siteContent';

export default function DynamicCustomSections() {
  const { customSections } = siteContent;

  if (!customSections || customSections.length === 0) return null;

  return (
    <div id="extra-sections">
      {customSections.map((sec) => (
        <section key={sec.id} id={sec.id} className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/60">
                {sec.badge}
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                {sec.title}
              </h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-slate-300 text-center max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-12">
              {sec.content}
            </p>

            {sec.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {sec.metrics.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-emerald-400">{m.value}</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
