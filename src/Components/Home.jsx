import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="works">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
