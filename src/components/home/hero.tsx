import { motion } from "framer-motion";
import { NavButton } from "../../assets/icon/navButton";
import { LettersPullUp } from "../letters-pull-up";

export default function Hero() {
  return (
    <div className="w-[95%] mx-auto pt-4 static">
      {/* Container for image and text */}
      <div className="relative w-full">
        {/* Background Image */}
        <motion.img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1733542824/verdura-nexus/Rectangle_1_ixw2gg.png"
          alt="bg-asset"
          className="w-full h-[46rem]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeatType: "reverse" }}
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex justify-start items-start flex-col">
          <div className="w-[65%] flex justify-between items-center pt-4">
            <motion.div
              initial={{ x: -100, y: -100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1733542826/verdura-nexus/Frame_2_1_qdahuf.png"
                alt="logo"
                className="w-[4rem] h-[4rem]"
              />
            </motion.div>
            <div>
              <nav className="w-full">
                {/* Navigation Links */}
                <motion.ul
                  initial={{ "--rotate": "300deg", y: -100 }}
                  animate={{ "--rotate": "360deg", y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="hidden md:flex gap-8 text-lg font-poppins"
                >
                  {["Home", "How It Works", "Create", "Decrypt"].map(
                    (item, index) => (
                      <motion.li
                        key={item}
                        style={{ transform: "rotate(var(--rotate))" }}
                        className="hover:text-orange-400 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    )
                  )}
                </motion.ul>

                {/* Mobile Menu Button */}
                <motion.button
                  className="md:hidden flex items-center justify-center"
                  aria-label="Open menu"
                  whileHover={{ scale: 1.2 }}
                >
                  <NavButton />
                </motion.button>
              </nav>
            </div>
          </div>
          <motion.div
            className="w-full pt-16 flex justify-between items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="pl-10 w-[58%] space-y-2">
              <motion.div
                className="font-sacramento text-4xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Verdura Nexus
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <LettersPullUp text="Where Words Blossom into Greenery" />
              </motion.div>
              <motion.div
                className="font-lora w-[80%]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Unleash the magic of nature with every message you send. At
                Verdura Nexus, your personalized messages grow into unique
                plant-inspired creations.
              </motion.div>
              <div className="pt-8">
                <motion.button
                  className="bg-darkGreen border border-white rounded-xl font-poppins font-bold w-[12rem] h-[3rem]"
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1 }}
                >
                  Create My Plant
                </motion.button>
              </div>
            </div>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
