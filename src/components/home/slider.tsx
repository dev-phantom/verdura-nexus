import { useState } from "react";
import { motion } from "framer-motion";

const flowerImages = [
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/houseplant-7367379_1280-removebg-preview_qapvtc.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/plant-8360681_1280-removebg-preview_mdnzox.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/plant-763965_1280-removebg-preview_gcpob3.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/flower-stick-564132_1280-removebg-preview_adqcn6.png",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flowerImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flowerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPosition = (index: number) => {
    if (index === currentIndex)
      return "z-20 scale-150 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"; // Center active image
    if (index === (currentIndex + 1) % flowerImages.length)
      return "z-10 -bottom-32 left-32 scale-75"; // Right-bottom next image
    if (
      index ===
      (currentIndex - 1 + flowerImages.length) % flowerImages.length
    )
      return "z-10 -bottom-32 right-32 scale-90"; // Left-bottom previous image
    return "z-0 opacity-0"; // Hide non-adjacent images
  };

  return (
    <div
      className="relative isolate aspect-video w-full mx-auto rounded-xl shadow-lg bg-contain bg-no-repeat bg-center flex items-center justify-center mb-10"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/phantom1245/image/upload/v1733607340/verdura-nexus/Rectangle_2_1_ddmgpp.png')`,
      }}
    >
      {/* Slider Container */}
      <div className="relative flex items-center justify-center h-[60vh] w-full">
        {flowerImages.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out transform ${getPosition(
              index
            )}`}
          >
            <img
              src={image}
              alt={`Flower ${index + 1}`}
              className="h-60 md:h-72 lg:h-80 object-contain rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-5 bg-amber-500 p-3 rounded-full hover:bg-amber-700 focus:outline-none"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute right-5 bg-amber-500 p-3 rounded-full hover:bg-amber-700 focus:outline-none"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  );
}
