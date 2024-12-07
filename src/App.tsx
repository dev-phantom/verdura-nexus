import Hero from "./components/home/hero";
import Slider from "./components/home/slider";

export default function App() {
  return (
    <div className="bg-darkGreen w-full text-white overflow-hidden">
      <Hero/>
      <Slider/>
    </div>
  );
}
