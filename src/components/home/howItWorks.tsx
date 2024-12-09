import { motion } from "framer-motion";

const HowItWorks = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="howItWorks" className="bg-darkGreen text-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12 pl-3">
          <h2 className="text-5xl font-lora font-medium mb-4">How It Work</h2>
          <p className="text-lg w-[40%]">
            It’s simple, creative, and fun! Here’s how you can start using Verdura Nexus.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 - Left */}
          <motion.div
            className="col-span-2 relative rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.4 }}
            variants={leftVariants}
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1733749562/verdura-nexus/Rectangle_3_4_wtxoea.png"
              alt="Craft Your Message Background"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-8">
              <div className="text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4">
                  Craft Your Message
                </h3>
                <p className="w-[60%] font-lato font-medium">
                  Type a personalized message to convey your thoughts, feelings, or
                  creative ideas. Whether it’s a heartfelt note, a motivational quote,
                  or a fun fact, this is the moment to express yourself!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 1 - Right */}
          <motion.div
            className="rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ amount: 0.4 }}
            variants={rightVariants}
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1733545771/verdura-nexus/tanalee-youngblood-CMdQcxsWZE0-unsplash_1_dxhqx1.jpg"
              alt="Plant Image"
              className="w-full h-72 object-cover"
            />
          </motion.div>

          {/* Step 2 - Left */}
          <motion.div
            className="rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            viewport={{ amount: 0.4 }}
            variants={leftVariants}
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1733545747/verdura-nexus/flower-stick-564132_1280_hu0nkc.jpg"
              alt="Flower Stick Image"
              className="w-full h-72 object-cover"
            />
          </motion.div>

          {/* Step 2 - Right */}
          <motion.div
            className="relative col-span-2 rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            viewport={{ amount: 0.4 }}
            variants={rightVariants}
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1733749564/verdura-nexus/Rectangle_6_ddyb8t.png"
              alt="Watch It Grow Background"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6">
              <div className="text-left">
                <h3 className="text-2xl font-poppins font-semibold mb-4">Watch It Grow</h3>
                <p className="w-[60%] font-lato font-medium">
                  Choose from a diverse range of plants, each with its own unique design, 
                  to pair with your message. From vibrant flowers to lush trees and decorative 
                  leaves, each plant serves as the perfect visual backdrop to your message. 
                  These plants represent different emotions, moods, or themes, adding depth to 
                  your message’s meaning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
