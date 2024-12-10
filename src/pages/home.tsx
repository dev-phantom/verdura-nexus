import { motion } from "framer-motion";
import Slider from "../components/home/slider";
import HowItWorks from "../components/home/howItWorks";
import CallToAction from "../components/shared/callToAction";
import DefaultLayout from "../layout/defaultLayout";

export default function Home() {
  return (
    <DefaultLayout showBrandName={true} showImg={true}>
      {/* Slider Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ amount: 0.4 }}
      >
        <Slider />
      </motion.div>

      <HowItWorks />
      <CallToAction />
    </DefaultLayout>
  );
}
