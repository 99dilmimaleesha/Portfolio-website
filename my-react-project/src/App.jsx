import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Header from "./Components/Nav";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Education from "./Components/Education";


function App() {
  

  return (
    <>
      <Header />

      <main>
       
        <Hero/>
        <Experience/>
      
        <Skills/>
        <Project />
          <Education/>
        <Services/>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
