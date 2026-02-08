import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
