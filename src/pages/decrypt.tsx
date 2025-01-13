import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CallToAction from "../components/shared/callToAction";
import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";

export default function Decrypt() {
  const [imageSelected, setImageSelected] = useState(false);
  const [decodedMessage, setDecodedMessage] = useState("");
  const handleClose = () => {
    setImageSelected(false);
  };

  const decodeMessageFromImage = (data: Uint8ClampedArray): string => {
    const bits: number[] = [];
    for (let i = 0; i < data.length; i += 4) {
      bits.push(data[i] & 1);
    }
  
    const bytes: number[] = [];
    for (let i = 0; i < bits.length; i += 8) {
      const byte = bits.slice(i, i + 8).reduce((acc, bit, index) => acc | (bit << (7 - index)), 0);
      if (byte === 0) break; // Stop at null terminator
      bytes.push(byte);
    }
  
    return new TextDecoder().decode(Uint8Array.from(bytes));
  };
  
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const decodeMessage = (colors: Uint8ClampedArray): string =>
            decodeMessageFromImage(colors);
          const message = decodeMessage(pixelData.data);
          setDecodedMessage(message || "No message found!");
          setImageSelected(true);
        };
        img.src = e.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodedMessage).then(() => {
      alert("Message copied to clipboard!");
    });
  };

  return (
    <DefaultLayout
      blobImg="https://res.cloudinary.com/phantom1245/image/upload/v1733779338/verdura-nexus/Rectangle_1_1_n6uooh.png"
      showBrandName={false}
      showImg={false}
      title="Decrypt Your Personalized Plant Message"
      subTitle="Upload your encrypted plant image to reveal the hidden message. Your secret message awaits!"
      buttonText="Start Decrypt"
      containerWidth="[100%]"
      blobImgHeight="[20rem]"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
