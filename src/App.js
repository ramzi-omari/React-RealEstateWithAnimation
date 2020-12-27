import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Hero slides={SliderData}></Hero>
    </>
  );
}

export default App;
