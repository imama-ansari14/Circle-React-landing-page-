import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecTwo from "./components/Sect-two";
import SecThree from "./components/Sect-three";
import SectFour from './components/Sect-four';
import SectFive from './components/Sect-five';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <SecTwo />
      <SecThree />
      <SectFour />
      <SectFive />  
      <Footer />
    </div>
  );
}

export default App;
