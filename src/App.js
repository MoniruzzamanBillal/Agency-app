import "./App.css";

import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Counter from "./Components/Counter/Counter";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Counter />
      <Service />
      <About />
      <Blog />
      <Testimonial />
      <NewsLetter />
    </>
  );
}

export default App;
