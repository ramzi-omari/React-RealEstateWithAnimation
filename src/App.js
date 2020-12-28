import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
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
      <InfoSection {...InfoData}></InfoSection>
      <InfoSection {...InfoDataTwo}></InfoSection>
    </>
  );
}

export default App;
