import "./App.css";
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
    </>
  );
}

export default App;
