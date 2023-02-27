import React from "react";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Services from "./Services";
import WorkSection from "./WorkSection";
import Contact from "./Contact";
// import Reducer from "./Reducer";
// import { useState } from 'react';

function Home() {
  // props are passing
  const data = {
    name: "Haris Sheikh",
    image: "Images/this.jpg",
    para: "I'm Haris Sheikh from Multan. I cleared my Metic from Muslim Public School Multan and Intermediate from Muslim College Multan. Now Graduated from City College Multan in Computer Science",
  };
  // const [count, setcount] = useState(0);
  // const decrement = () => {
  //   setcount(count-1);
  // }
  // const increment = () => {
  //   setcount(count+1);
  // }
  return (
    <>
      {/* <button className='btn btn-primary mx-2' onClick={decrement}>-</button>
    <h2>{count}</h2>
    <button className='btn btn-primary mx-2' onClick={increment}>+</button> */}
      {/* <Reducer /> */}
      <HeroSection {...data} />
      <Portfolio />
      <WorkSection />
      <Services />
      <Contact />
    </>
  );
}

export default Home;
