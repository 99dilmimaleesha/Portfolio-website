import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Header from "./Components/Nav";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  

  return (
    <>
      <Header />

      <main>
       
        <Hero/>
        <Experience/>
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
