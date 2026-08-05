import React from 'react';
import { siteContent } from '../data/siteContent';
import { Search, FileCode2, PackageCheck, Wrench, CheckCircle2, Headphones } from 'lucide-react';

export default function ProcessStepper() {
  const { process } = siteContent;

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-emerald-600" />;
      case 'FileCode2': return <FileCode2 className="w-6 h-6 text-emerald-600" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-emerald-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-emerald-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            {process.sectionBadge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            {process.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {process.subtitle}
          </p>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* 6-Step Workflow Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.steps.map((item) => (
            <div
              key={item.step}
              className="relative group p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-100/60 group-hover:scale-110 transition-transform">
                  {getStepIcon(item.icon)}
                </div>
                <span className="font-heading font-black text-3xl text-slate-300 group-hover:text-emerald-500 transition-colors">
                  {item.step}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
