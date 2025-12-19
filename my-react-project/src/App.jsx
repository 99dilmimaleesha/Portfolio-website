import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import About from "./Components/About";
import Loader from "./Components/Loader"; // import Loader
import RecentWriting from "./Components/RecentWriting";

function App() {
  return (
    <>
     
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <RecentWriting/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
