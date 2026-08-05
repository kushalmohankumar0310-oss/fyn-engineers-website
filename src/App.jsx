import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BusinessVerticals from './components/BusinessVerticals';
import ProcessStepper from './components/ProcessStepper';
import WhyUsIndustries from './components/WhyUsIndustries';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import DynamicCustomSections from './components/DynamicCustomSections';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Business Verticals */}
        <BusinessVerticals />

        {/* 5. Workflow Process Stepper */}
        <ProcessStepper />

        {/* 6. Why Choose Us & Target Industries */}
        <WhyUsIndustries />

        {/* 7. Projects & Portfolio */}
        <ProjectsPortfolio />

        {/* 8. Dynamic Custom Extra Sections */}
        <DynamicCustomSections />

        {/* 9. Contact & Footer */}
        <ContactFooter />
      </main>
    </div>
  );
}
