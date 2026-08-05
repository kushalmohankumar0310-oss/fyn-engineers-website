import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { Sun, Droplets, Zap, MapPin, Star, Quote } from 'lucide-react';

export default function ProjectsPortfolio() {
  const { projects } = siteContent;
  const [activeTab, setActiveTab] = useState('All');

  const getVerticalIcon = (iconName) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-sky-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-500" />;
      default: return <Zap className="w-5 h-5 text-emerald-500" />;
    }
  };

  const filteredProjects = activeTab === 'All'
    ? projects.items
    : projects.items.filter(item => item.category === activeTab);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-100/60 border border-emerald-200">
            {projects.sectionBadge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            {projects.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {projects.subtitle}
          </p>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Portfolio Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {projects.tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm transition-all ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                    item.category === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {item.category === 'Completed' ? '✓ Completed' : '🔄 In Progress'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                    {getVerticalIcon(item.icon)}
                    <span>{item.vertical}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900">{item.title}</h3>
                
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-heading font-extrabold text-sm text-slate-900">{item.metric}</span>
                <a href="#contact" className="text-xs font-bold text-emerald-600 hover:underline">
                  Inquire Similar Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Grid */}
        <div className="pt-16 border-t border-slate-200/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">What Our Clients Say</h3>
            <p className="text-slate-500 text-sm mt-1">Real feedback from industrial and pharma operations leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 relative">
                <Quote className="w-8 h-8 text-emerald-200 absolute top-6 right-6" />
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2">
                  <h4 className="font-heading font-bold text-base text-slate-900">{t.client}</h4>
                  <span className="text-xs font-semibold text-slate-500">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
