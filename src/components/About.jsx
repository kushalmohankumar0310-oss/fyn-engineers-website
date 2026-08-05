import React from 'react';
import { siteContent } from '../data/siteContent';
import { Compass, ShieldCheck, Leaf, Clock, Target, Eye } from 'lucide-react';

export default function About() {
  const { about } = siteContent;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-emerald-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            {about.sectionBadge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            {about.title}
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>{about.description1}</p>
            <p>{about.description2}</p>
            
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 shadow-sm text-slate-800 font-semibold italic">
              "{about.quote}"
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-emerald-100/60 w-fit mb-4">
                {getIcon(val.icon)}
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">{val.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">Our Leadership</h3>
            <p className="text-slate-500 text-sm mt-1">Seasoned industry leaders guiding our engineering precision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.leadership.map((member, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center space-y-3">
                <div className="text-4xl">{member.avatar}</div>
                <h4 className="font-heading font-bold text-lg text-slate-900">{member.name}</h4>
                <span className="inline-block text-xs font-bold text-emerald-600 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50">
                  {member.role}
                </span>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
