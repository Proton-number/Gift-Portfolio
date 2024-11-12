import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: "block" }}
      transition={{ delay: 3.5 }}
    >
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
    </motion.div>
  );
}

export default Home;
