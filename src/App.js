import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { smoothScroll } from './smoothScroll';

function App() {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
