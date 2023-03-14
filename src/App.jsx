import "./App.css";
import React, { useRef } from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Treatment from "./components/Treatment";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";
import Clinic from "./components/Clinic";

//TODO: CORRIGIR TAMANHO DOS TEXTOS DO TRATAMENTO QUANDO FICA RESPONSIVO
//TODO: RODAPE
//TODO: DESIGN DE FORMA GERAL
//TODO: LOGO

//TODO: CORRIGIR TODOS OS LINKS (_BLANK, etc)
//TODO: CORRIGIR TAMANHO TEXTO DA LOGO
//TODO: FAVICON E TITULO DO SITE
//TODO: SEO COM REACT HELMET?
//TODO: CORRIGIR TEXT ALIGN DO FOOTER

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <MyWork />
        <About />
        <Clinic />
        <Treatment />
        {/* <Testimonials /> */}
        <Map />
      </main>
    </Layout>
  );
}

export default App;
