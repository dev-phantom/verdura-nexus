import { motion } from "framer-motion";
import { NavButton } from "../../assets/icon/navButton";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-[65%] flex justify-between items-center pt-4 px-4 flex-wrap gap-2">
      {/* Logo */}
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

      {/* Navigation */}
      <div>
        <nav className="w-full">
          {/* Desktop Menu */}
          <motion.ul className="hidden md:flex gap-8 text-lg font-poppins">
            {[
              { name: "Home", link: "/" },
              { name: "How It Works", link: "#howItWorks" },
              { name: "Create", link: "/create" },
              { name: "Decrypt", link: "/decrypt" },
            ].map((item, index) => (
              <motion.li
                key={item.name}
                className="hover:text-orange-400 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.link}>{item.name}</a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex items-center justify-center"
            aria-label="Open menu"
            whileHover={{ scale: 1.2 }}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <NavButton />
          </motion.button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.ul
              className="absolute top-16 right-4 bg-darkGreen shadow-md p-4 rounded-md text-lg font-poppins flex flex-col gap-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { name: "Home", link: "/" },
                { name: "How It Works", link: "/how-it-works" },
                { name: "Create", link: "/create" },
                { name: "Decrypt", link: "/decrypt" },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  className="hover:text-orange-400 cursor-pointer"
                >
                  <a href={item.link}>{item.name}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </nav>
      </div>
    </div>
  );
};
