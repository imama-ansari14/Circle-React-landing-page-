import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import SecTwo from "./components/Sect-two.jsx";
import SecThree from "./components/Sect-three.jsx";
import SectFour from "./components/Sect-four.jsx";
import SectFive from "./components/Sect-five.jsx";
import SectSix from "./components/Sect-six.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <SecTwo />
      <SecThree />
      <SectFour />
      <SectFive />
      <SectSix />
      <Footer />
    </div>
  );
}

export default App;
