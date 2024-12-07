import { useState } from "react";
import { motion } from "framer-motion";

const flowerImages = [
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545773/verdura-nexus/faux-watermelon-peperomia-plant-gray-pot_kknxhs.jpg",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545769/verdura-nexus/plant-8360681_1280_ez2zif.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/houseplant-7367379_1280-removebg-preview_qapvtc.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545747/verdura-nexus/flower-stick-564132_1280_hu0nkc.jpg",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/plant-763965_1280-removebg-preview_gcpob3.png",
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

  return (
    <div
      className="isolate aspect-video w-full mx-auto rounded-xl shadow-lg   bg-contain bg-no-repeat bg-center flex items-center justify-center mb-10"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/phantom1245/image/upload/v1733607340/verdura-nexus/Rectangle_2_1_ddmgpp.png')`,
      }}
    >
      {/* Slider Container */}
      <div className=" relative w-3/4 flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 100 + "%" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {flowerImages.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full h-[60vh] flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Flower ${index + 1}`}
                className="max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
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
