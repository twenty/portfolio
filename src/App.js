import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';

function App() {
  return (
    <div className="Page">
      <Hero />
      <Section sectionName="Work" />
      <Section sectionName="Contact" />
    </div>
  );
}

export default App;
