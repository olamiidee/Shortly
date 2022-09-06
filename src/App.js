import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
