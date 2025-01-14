import { motion } from "framer-motion";

export default function PopoverContent({
  handleClose,
  generatedImage,
  message,
}: {
  handleClose: () => void;
  generatedImage: string | null;
  message: string;
}) {
  async function downloadImage(imageUrl: string) {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated_image.png";
    link.click();
  }

  async function shareImageAsDocument(imageUrl: string) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], "generated_image.png", { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Generated Plant Image",
          text: "Check out this personalized plant message!",
        });
      } else {
        alert("Sharing is not supported on this device. Please download and share manually.");
      }
    } catch (error) {
      console.error("Error sharing image:", error);
      alert("Failed to share the image. Please try again.");
    }
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        className="relative w-[95%] max-w-2xl h-[90vh] overflow-y-auto bg-[#162415] p-8 rounded-xl text-center text-white"
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
          Your personalized plant message has been successfully created. <strong>please share as document</strong>
        </p>
        {generatedImage && (
          <img
            src={
              generatedImage ||
              "https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png"
            }
            alt="Generated Plant"
            className="mx-auto mb-4 w-[26rem] rounded-md "
          />
        )}
        <p className="text-sm text-gray-400 mb-2">
          Your Message: <strong>{message || "love you forever"}</strong>
        </p>
        <div className="flex flex-col gap-5 justify-center ">
          <button
            className="px-4 py-2 bg-green-600 rounded-full text-white shadow-md hover:bg-green-700"
            onClick={() => generatedImage && downloadImage(generatedImage)}
          >
            Download
          </button>
          <button
            className="px-4 py-2 w-full bg-blue-600 rounded-full text-white shadow-md hover:bg-blue-700"
            onClick={() => generatedImage && shareImageAsDocument(generatedImage)}
          >
            Share 
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
