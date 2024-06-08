import About from "./components/about";
import Gallery from "./components/gallery";
import Info from "./components/info";
import Navbar from "./components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurBest from "./components/ourBest";
import ClientTestimonials from "./components/clientTestimonials";
import GetInTouch from "./components/getInTouch";
import UpArrow from "./components/upArrow";
import { Slide } from "react-awesome-reveal";


function App() {
  return (
    <div className="font-[Nirmala UI] overflow-hidden">
      <Navbar />
      <Slide direction="up" >
        <Info />
      </Slide>

      <Slide direction="up" >
        <About />
      </Slide>

      <Gallery />

      <OurBest/>

      <Slide direction="up" >
        <ClientTestimonials />
      </Slide>

      <GetInTouch />

      <UpArrow />
    </div>
  );
}

export default App;
