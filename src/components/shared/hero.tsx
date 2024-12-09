import { motion } from "framer-motion";
import { Navbar } from "../common/navbar";
import { LettersPullUp } from "../letters-pull-up";
import { HeroLayoutProps } from "../../interface/heroLayout";

export default function Hero({
  blobImg,
  showBrandName = false,
  title,
  subTitle,
  buttonText,
  showImg = false,
  containerWidth,
  blobImgHeight = '[46rem]'
}: HeroLayoutProps) {
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
          <div className="relative w-full">
            {/* Background Image */}
            <motion.img
              src={
                blobImg ||
                "https://res.cloudinary.com/phantom1245/image/upload/v1733542824/verdura-nexus/Rectangle_1_ixw2gg.png"
              }
              alt="bg-asset"
              className={`w-full h-${blobImgHeight}`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, repeatType: "reverse" }}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex justify-start items-start flex-col">
              <Navbar />
              <motion.div
                className="w-full pt-16 flex justify-between h-full items-center"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="pl-10 w-[58%] space-y-2">
                  {showBrandName && (
                    <motion.div
                      className="font-sacramento text-4xl"
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
                    className="font-lora w-[85%]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {subTitle ||
                      "Unleash the magic of nature with every message you send. At Verdura Nexus, your personalized messages grow into unique plant-inspired creations."}
                  </motion.div>
                  <div className="pt-8">
                    <motion.button
                      className="bg-darkGreen border border-white rounded-xl font-poppins font-bold w-[12rem] h-[3rem]"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 1 }}
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
