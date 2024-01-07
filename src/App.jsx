import react from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solution from "./components/Solution";
import Solutions from "./components/Solutions";
import Proven from "./components/Proven";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solution />
      <Solutions />
      <Proven />
    </>
  );
}

export default App;
