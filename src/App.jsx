import "./App.css";
import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Qualification } from "./components/Qualification/Qualification";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUp/ScrollUp";
import { Work } from "./components/Work/Work";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
}
