import "./App.css";
import About from "./Components/About/About";
import Counter from "./Components/Counter/Counter";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Service from "./Components/Service/Service";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Counter />
      <Service />
      <About />
    </>
  );
}

export default App;
