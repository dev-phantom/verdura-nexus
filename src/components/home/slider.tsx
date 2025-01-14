import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "react-responsive";

const flowerImages = [
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/houseplant-7367379_1280-removebg-preview_qapvtc.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/plant-8360681_1280-removebg-preview_mdnzox.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/plant-763965_1280-removebg-preview_gcpob3.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/flower-stick-564132_1280-removebg-preview_adqcn6.png",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });

  // Image URLs for each screen size
  const mobileImage =
    "https://res.cloudinary.com/phantom1245/image/upload/v1736788254/verdura-nexus/Rectangle_3_8_nbstjr.png";
  const tabletImage =
    "https://res.cloudinary.com/phantom1245/image/upload/v1733607340/verdura-nexus/Rectangle_2_1_ddmgpp.png";
  const desktopImage =
    "https://res.cloudinary.com/phantom1245/image/upload/v1733607340/verdura-nexus/Rectangle_2_1_ddmgpp.png";

  // Determine the selected image based on screen size
  const selectedImage = isMobile
    ? mobileImage
    : isTablet
    ? tabletImage
    : desktopImage;

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
      return "z-10 -bottom-32 left-32 scale-75 hidden md:flex"; // Right-bottom next image
    if (
      index ===
      (currentIndex - 1 + flowerImages.length) % flowerImages.length
    )
      return "z-10 -bottom-32 right-32 scale-90 hidden md:flex"; // Left-bottom previous image
    return "z-0 opacity-0"; // Hide non-adjacent images
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true, // Optional: Enables swipe gestures with the mouse
  });

  return (
    <div
      {...swipeHandlers}
      className="relative -top-10 isolate aspect-video w-[95%] md:w-full h-[80vh] md:h-screen mx-auto rounded-xl shadow-lg bg-cover md:bg-contain bg-no-repeat bg-center flex items-center justify-center my-10"
      style={{
        backgroundImage: `url(${selectedImage})`,
      }}
    >
      {/* Slider Container */}
      <div className="relative flex items-center justify-center md:h-[60vh] w-full">
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
        className="absolute left-1 sm:left-5 bg-white text-green-900 px-2 py-2 rounded-full hover:bg-orange-600 focus:outline-none"
        onClick={handlePrev}
      >
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1736788620/verdura-nexus/tdesign_arrow-left_hmk4h2.png"
          alt="arrow icon"
          className="w-5 rotate-180"
        />
      </button>
      <button
        className="absolute right-1 sm:right-5 bg-white text-green-900 px-2 py-2 rounded-full hover:bg-orange-600 focus:outline-none"
        onClick={handleNext}
      >
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1736788620/verdura-nexus/tdesign_arrow-left_hmk4h2.png"
          alt="arrow icon"
          className="w-5 "
        />
      </button>
    </div>
  );
}
