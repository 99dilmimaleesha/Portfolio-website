import { useState, useEffect } from "react";
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
import About from "./Components/About";
import Loader from "./Components/Loader"; // import Loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Loader shows for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Project />
            <Services />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

