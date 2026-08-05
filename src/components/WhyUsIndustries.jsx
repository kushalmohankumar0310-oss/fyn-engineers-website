import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { MapPin, Award, ShieldAlert, CheckSquare, Factory, Pill, Utensils, FlaskConical, Hotel, Building2, Hospital, GraduationCap, Home } from 'lucide-react';

export default function WhyUsIndustries() {
  const { whyUs, industries } = siteContent;
  const [activeCategory, setActiveCategory] = useState('All');

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-emerald-600" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6 text-emerald-600" />;
      default: return <Award className="w-6 h-6 text-emerald-600" />;
    }
  };

  const getIndustryIcon = (iconName) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-5 h-5 text-emerald-600" />;
      case 'Factory': return <Factory className="w-5 h-5 text-emerald-600" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-emerald-600" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'Hotel': return <Hotel className="w-5 h-5 text-emerald-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'Hospital': return <Hospital className="w-5 h-5 text-emerald-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'Home': return <Home className="w-5 h-5 text-emerald-600" />;
      default: return <Building2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  const filteredIndustries = activeCategory === 'All'
    ? industries.list
    : industries.list.filter(ind => ind.category === activeCategory);

  return (
    <div className="bg-slate-50 border-t border-slate-200/60">
      
      {/* 1. WHY CHOOSE US SECTION */}
      <section id="why-us" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-100/60 border border-emerald-200">
              {whyUs.sectionBadge}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              {whyUs.title}
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 w-fit">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. INDUSTRIES SERVED SECTION */}
      <section id="industries" className="py-20 md:py-28 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              {industries.sectionBadge}
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              {industries.title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {industries.subtitle}
            </p>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Category Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-heading font-bold text-xs sm:text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Industries Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-emerald-100/60 shrink-0">
                  {getIndustryIcon(ind.icon)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">{ind.name}</h4>
                  <span className="text-xs font-semibold text-slate-400">{ind.category}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
