import React from "react";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <div
      className="h-[32rem] my-5 rounded-2xl w-[95%] flex justify-center items-center mx-auto bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/phantom1245/image/upload/v1733545747/verdura-nexus/rodion-kutsaiev-049M_crau5k-unsplash_otro7a.jpg')",
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
          <h1 className="text-3xl font-poppins md:text-4xl font-semibold mb-4">
            Share Your Creation
          </h1>
          <p className="text-sm font-lato font-medium md:text-base mb-6 leading-relaxed px-4">
            Choose from a diverse range of plants, each with its own unique
            design, to pair with your message. From vibrant flowers to lush
            trees and decorative leaves, each plant serves as the perfect visual
            backdrop to your message. These plants represent different emotions,
            moods, or themes, adding depth to your message’s meaning.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=" bg-darkGreen text-white font-poppins font-bold px-6 py-3 rounded-xl border-2 border-white "
          >
            Create My Plant
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
