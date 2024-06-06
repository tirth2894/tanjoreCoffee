import About from "./components/about";
import Gallery from "./components/gallery";
import Info from "./components/info";
import Navbar from "./components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurBest from "./components/ourBest";

function App() {
  return (
    <div className="font-[Nirmala UI] ">
      <Navbar/>
      <Info/>
      <About/>
      <Gallery/>
      <OurBest/>
    </div>
  );
}

export default App;
