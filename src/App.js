import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Hero slides={SliderData}></Hero>
    </>
  );
}

export default App;
