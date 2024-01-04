import react from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solution/>
    </>
  );
}

export default App;
