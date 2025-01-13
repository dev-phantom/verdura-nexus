import { motion } from "framer-motion";
import { Navbar } from "../common/navbar";
import { LettersPullUp } from "../letters-pull-up";
import { HeroLayoutProps } from "../../interface/heroLayout";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function Hero({
  blobImg,
  blobImgTablet,
  blobImgMobile,
  showBrandName = false,
  title,
  subTitle,
  buttonText,
  showImg = false,
  containerWidth,
  buttonLink,
}: HeroLayoutProps) {
  const navigate = useNavigate();

  // Media queries for screen sizes
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });

  // Default image URLs (can be overridden via props)
  const defaultMobileImage =
    "https://res.cloudinary.com/phantom1245/image/upload/v1736785000/verdura-nexus/Rectangle_3_6_vw1b0a.png";
  const defaultTabletImage =
    "https://res.cloudinary.com/phantom1245/image/upload/v1736783238/verdura-nexus/Rectangle_1_2_ur1zs4.png";
  const defaultDesktopImage =
    "https://res.cloudinary.com/phantom1245/image/upload/v1733542824/verdura-nexus/Rectangle_1_ixw2gg.png";

  // Determine the selected image based on screen size and props
  const selectedImage =
    (isMobile && (blobImgMobile || defaultMobileImage)) ||
    (isTablet && (blobImgTablet || defaultTabletImage)) ||
    blobImg ||
    defaultDesktopImage;

  const handleClick = () => {
    const path = (buttonLink || "/create").split("#")[0];
    const pathId = (buttonLink || "creating").split("#")[1];
    navigate(path, { state: { fragment: "creating" } });

    setTimeout(() => {
      const elementId = !pathId ? "creating" : `#${pathId}`;
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* Hero Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ amount: 0.4 }}
      >
        <div className="w-[95%] mx-auto pt-4 static">
          {/* Container for image and text */}
          <div className="relative w-full h-full">
            {/* Background Image */}
            <motion.img
              src={selectedImage}
              alt="bg-asset"
              className={`w-full sm:h-[45rem] h-[95vh]`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, repeatType: "reverse" }}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex justify-start items-start flex-col">
              <Navbar />
              <motion.div
                className="w-full flex justify-between h-full items-center "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="sm:pl-10 px-5 sm:w-[58%] w-full space-y-2">
                  {showBrandName && (
                    <motion.div
                      className="font-sacramento text-xl sm:text-4xl"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Verdura Nexus
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <LettersPullUp
                      containerWidth={containerWidth}
                      text={title || "Where Words Blossom into Greenery"}
                    />
                  </motion.div>
                  <motion.div
                    className="font-lora w-[90%] sm:w-[85%] text-sm sm:text-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {subTitle ||
                      "Unleash the magic of nature with every message you send. At Verdura Nexus, your personalized messages grow into unique plant-inspired creations."}
                  </motion.div>
                  <div className="md:pt-8 pt-4">
                    <motion.button
                      className="bg-darkGreen border text-sm border-white rounded-xl font-poppins font-bold w-[10rem] md:w-[12rem] h-[3rem]"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 1 }}
                      onClick={handleClick}
                    >
                      {buttonText || "Create My Plant"}
                    </motion.button>
                  </div>
                </div>
                {showImg && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="hidden md:flex"
                  >
                    <img
                      src="https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png"
                      alt="flower in a pot"
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
