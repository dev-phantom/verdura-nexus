import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
interface CallToActionProps {
  backgroundImgLink?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}
const CallToAction: React.FC<CallToActionProps> = ({
  backgroundImgLink,
  title,
  description,
  buttonText
}:CallToActionProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the route without the fragment
    const path = ("/create").split("#")[0];
    const pathId = ("creating").split("#")[1];
    navigate(path, { state: { fragment: "creating" } });

    // Scroll to the ID after the navigation completes
    setTimeout(() => {
      const elementId = !pathId ? "creating" : `#${pathId}`;
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Slight delay to ensure DOM rendering
  };
  return (
    <div
      className="h-[20rem] md:h-[32rem] my-0 md:my-5 rounded-2xl w-[95%] flex justify-center items-center mx-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          backgroundImgLink ||
          "https://res.cloudinary.com/phantom1245/image/upload/v1733545747/verdura-nexus/rodion-kutsaiev-049M_crau5k-unsplash_otro7a.jpg"
        })`,
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.4 }}
          className="text-center text-white px-6 md:px-12 max-w-2xl"
        >
          <h1 className="text-xl font-poppins md:text-4xl font-semibold mb-4">
            {title || "Share Your Creation"}
          </h1>
          <p className="text-sm font-lato font-medium md:text-base mb-6 md:leading-relaxed md:px-4">
            {description ||
              " From vibrant flowers to lush trees and decorative leaves, each plant serves as the perfect visual backdrop to your message. These plants represent different emotions, moods, or themes, adding depth to your message’s meaning."}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className=" bg-darkGreen text-white font-poppins font-bold px-6 py-3 rounded-xl border-2 border-white "
          >
            {buttonText || "Create My Plant"}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
