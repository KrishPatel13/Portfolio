import React from 'react';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import './index.css'; // Tailwind CSS included

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-5">
        <h1 className="text-3xl font-bold">Krish Patel</h1>
        <p className="mt-2">Aspiring Data Scientist and Mathematician</p>
      </header>
      <main>
        <Section title="About Me">
          <p>Introduction and background.</p>
        </Section>
        <Section title="Work Experience">
          <p>Details of internships and work experiences.</p>
        </Section>
        <Section title="Teaching Experience">
          <p>Details of teaching experiences as a TA.</p>
        </Section>
        <Section title="Projects">
          <p>Details of assignments and projects done in undergrad.</p>
        </Section>
        <Section title="Research Courses">
          <p>Details of research courses taken under professors.</p>
        </Section>
        <Section title="Resume">
          <a href="/path-to-your-resume.pdf" target="_blank" className="text-blue-500">Download my resume</a>
        </Section>
        <ContactForm />
      </main>
      <footer className="bg-gray-800 text-white p-5">
        <p>&copy; 2024 Krish Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
