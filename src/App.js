import React from 'react';
import NavBar from './components/NavBar';
import PageContent from './components/PageContent';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skills from './pages/Skills';




function App() {
  return (
    <>
    <div>
    <NavBar />
    <PageContent/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      
      </div>
        
      
    </>
  );
}

export default App;

