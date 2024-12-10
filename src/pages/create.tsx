import { useState } from "react";
import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";
import { AnimatePresence, motion } from "framer-motion";
export default function Create() {
  const [showPopover, setShowPopover] = useState(false);

  const handleSendClick = () => {
    setShowPopover(true);
  };

  const handleClose = () => {
    setShowPopover(false);
  };
  return (
    <DefaultLayout
      blobImg="https://res.cloudinary.com/phantom1245/image/upload/v1733779338/verdura-nexus/Rectangle_1_1_n6uooh.png"
      showBrandName={false}
      showImg={false}
      title="Create Your Personalized Plant Message"
      subTitle="Craft your message, choose a plant, and share a unique creation with friends, family, or followers."
      buttonText="Start Creating"
      containerWidth="[90%]"
      blobImgHeight="[40rem]"
    >
      <div id="creating" className="py-16 px-12 text-white">
        <HowItWorksHeader
          title="Craft Your Message"
          description="Scroll Down for customizable options to enhance your image"
        />

        {/* Message Input with Send Button */}
        <div className="mt-8 relative w-[80%] h-40">
          <textarea
            className="w-full h-full p-4 text-sm bg-forestGreen text-white rounded-xl placeholder-gray-400 focus:outline-none"
            placeholder="Type your personalized message here..."
          />
          <button
            onClick={handleSendClick}
            className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md"
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1733781748/verdura-nexus/Frame_23_exivxp.png"
              alt="Send"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Theme Options */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg">Theme</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1b2b1d] rounded-lg hover:bg-[#243730]">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1733781741/verdura-nexus/mdi_emoji-kiss-outline_yx0303.png"
                alt="Romantic"
                className="w-6 h-6"
              />
              Romantic
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1b2b1d] rounded-lg hover:bg-[#243730]">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1733781744/verdura-nexus/stash_emoji-joy_nineb3.png"
                alt="Playful Emoji"
                className="w-6 h-6"
              />
              Playful
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1b2b1d] rounded-lg hover:bg-[#243730]">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1733781744/verdura-nexus/hugeicons_idea_nshugr.png"
                alt="Playful Idea"
                className="w-6 h-6"
              />
              Inspiring
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg">Decorative Elements</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              Butterflies
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-green-500"
                defaultChecked
              />
              Raindrops
            </label>
          </div>
        </div>

        {/* Message Encryption */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg">Encrypt Your Message</h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-500" />
            Encrypt your message
          </label>
        </div>
        {/* Popover */}
        <AnimatePresence>
          {showPopover && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <motion.div
                className="relative w-full max-w-2xl h-[90vh] overflow-y-auto bg-[#162415] p-8 rounded-xl text-center text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-red-500"
                >
                  ✕
                </button>
                <h2 className="text-lg font-bold mb-4">
                  🌸 Congratulations! Your Image is Ready 🌸
                </h2>
                <p className="mb-4">
                  Your personalized plant message has been successfully created.
                  You can now download, share, or customize further.
                </p>
                <img
                  src="https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/plant-8360681_1280-removebg-preview_mdnzox.png" // Replace with actual image URL
                  alt="Generated Plant"
                  className="mx-auto mb-4"
                />
                <p className="text-sm text-gray-400 mb-2">
                  Your Message: <strong>"Love You Forever"</strong>
                </p>
                <p className="text-sm text-red-500 mb-4">
                  This message is encrypted for privacy.
                </p>
                <button className="px-4 py-2 bg-green-600 rounded-full text-white shadow-md hover:bg-green-700">
                  Download Image
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DefaultLayout>
  );
}
