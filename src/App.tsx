import { motion } from "framer-motion";
import Hero from "./components/home/hero";
import Slider from "./components/home/slider";

export default function App() {
  return (
    <div className="bg-darkGreen w-full text-white overflow-hidden">
      {/* Hero Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ amount: 0.4 }}
      >
        <Hero />
      </motion.div>

      {/* Slider Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ amount: 0.4 }}
      >
        <Slider />
      </motion.div>
    </div>
  );
}
