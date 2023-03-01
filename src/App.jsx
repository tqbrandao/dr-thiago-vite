import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Treatment from "./components/Treatment";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";

//TODO: CORRIGIR TAMANHO DOS TEXTOS DO TRATAMENTO QUANDO FICA RESPONSIVO
//TODO: RODAPE
//TODO: DESIGN DE FORMA GERAL
//TODO: LOGO

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <MyWork />
        <About />
        <Treatment />
        <Testimonials />
        <Map></Map>
      </main>
    </Layout>
  );
}

export default App;
