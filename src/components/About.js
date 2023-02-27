import React from 'react';
import HeroSection from './HeroSection';

function About() {
  const data = {
    name: "Haris Babar",
    image: "Images/pic.jpg",
    para: "I am a person who is positive about every aspect of life. I like to read, I like to write; I like to think, I like to dream; I like to look at the clouds in the sky. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like delicious food and comfortable shoes; I like the land and the nature, I like people. And, I like to laugh."
  };
  return (
    <>
      <HeroSection {...data} />
    </>
  )
}

export default About;