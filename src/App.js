import React from 'react';
import NavBar from './components/NavBar';
import PageContent from './components/PageContent';
import About from './pages/About';
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
      
      </div>
        
      
    </>
  );
}

export default App;

