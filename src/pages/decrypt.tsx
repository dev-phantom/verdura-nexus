import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CallToAction from "../components/shared/callToAction";
import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";

export default function Decrypt() {
  const [imageSelected, setImageSelected] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [decodedMessage, setDecodedMessage] = useState("");
  const handleClose = () => {
    setImageSelected(false);
  };

  console.log(uploadedFile);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Add optional chaining
    if (file) {
      setUploadedFile(URL.createObjectURL(file)); // Create a preview URL
      setImageSelected(true); // Show the popover
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodedMessage).then(() => {
      alert("Message copied to clipboard!");
    });
  };
  setDecodedMessage("Hi there! Just like a sunflower turns to face the sun, my thoughts turn to you every day. 🌻 Keep shining bright!");
  return (
    <DefaultLayout
      blobImg="https://res.cloudinary.com/phantom1245/image/upload/v1733779338/verdura-nexus/Rectangle_1_1_n6uooh.png"
      showBrandName={false}
      showImg={false}
      title="Decrypt Your PersonalizedPlant Message"
      subTitle="Upload your encrypted plant image to reveal the hidden message. Your secret message awaits!"
      buttonText="Start Decrypt"
      containerWidth="[95%]"
      blobImgHeight="[40rem]"
      buttonLink="/decrypt#decrypting"
    >
      <div id="#decrypting" className="py-16 px-12 text-white">
        <HowItWorksHeader
          title="Decrypt Your Message"
          description="Upload your plant image to reveal the hidden message within."
        />

        {/* Image Upload Section */}
        <div className="flex items-center justify-center w-[80%]">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-forestGreen dark:bg-gray-700 dark:border-gray-600 dark:hover:border-white dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-white dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-white dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Popover */}
        <AnimatePresence>
          {imageSelected && (
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
                <div className="relative flex flex-col items-center text-center">
                  {/* Close Button */}

                  <h3 className="text-lg font-semibold">🌱 Message Decoded </h3>
                  <p className="text-sm mt-2">
                    Here’s the secret message hidden in the image you uploaded.
                  </p>

                  <div className="mt-6 bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md  p-4 rounded-lg shadow-lg text-white relative w-full max-w-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={copyToClipboard}
                        className="text-sm py-1 px-3 rounded-md hover:bg-gray-700 transition"
                      >
                        Copy Message
                      </button>
                    </div>

                    {/* Decoded Message */}
                    <div className="mt-3 bg-darkGreen p-3 rounded-md text-sm text-gray-200">
                      {decodedMessage}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CallToAction
        backgroundImgLink="https://res.cloudinary.com/phantom1245/image/upload/v1733788221/verdura-nexus/Frame_8_1_ofnqix.png"
        title="Create Your Own Message 🌸"
      />
    </DefaultLayout>
  );
}
