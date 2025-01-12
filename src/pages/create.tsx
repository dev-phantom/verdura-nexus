import { useState } from "react";
import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";
import { AnimatePresence } from "framer-motion";
import PopoverContent from "../components/shared/popoverContent";
import axios from "axios";

export default function Create() {
  const [showPopover, setShowPopover] = useState(false);
  const [theme, setTheme] = useState("Romantic");
  // const [decorations, setDecorations] = useState(["Butterflies"]);
  const [message, setMessage] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
          query: "plant",
          count: 1,
          client_id: "Ei5L_WMwdu5qTDzm6UuWKChYUzdpGfpPMABrDr5zU4c",
          orientation: "landscape",
        },
      });

      const imageUrl = response.data?.[0]?.urls?.regular;
      if (!imageUrl) throw new Error("Failed to fetch the image.");

      // Load the image
      const imageResponse = await fetch(imageUrl);
      const imageBlob = await imageResponse.blob();

      const img = await createImageBitmap(imageBlob);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Draw the image on canvas
        ctx.drawImage(img, 0, 0);

        // Encode the message in the image
        encodeMessageIntoCanvas(ctx, message, img.width, img.height);

        // Convert the canvas to a data URL
        const encodedImage = canvas.toDataURL();
        setGeneratedImage(encodedImage);
        setShowPopover(true);
      } else {
        throw new Error("Failed to process the image.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the plant image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    // Function to encode a message into canvas pixel data
    const encodeMessageIntoCanvas = (
      ctx: CanvasRenderingContext2D,
      message: string,
      width: number,
      height: number
    ) => {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
  
      // Convert the message to binary
      const binaryMessage = message
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join("");
  
      // Hide the binary message in the image's pixels
      for (let i = 0; i < binaryMessage.length; i++) {
        if (i * 4 >= data.length) break; // Avoid out-of-bounds
        data[i * 4] = (data[i * 4] & 0xfe) | parseInt(binaryMessage[i]); // Modify the red channel
      }
  
      // Write the modified pixel data back to the canvas
      ctx.putImageData(imageData, 0, 0);
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

        <div className="mt-8 relative w-[80%] h-40">
          <textarea
            className="w-full h-full p-4 text-sm bg-forestGreen text-white rounded-xl placeholder-gray-400 focus:outline-none"
            placeholder="Type your personalized message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleGenerateImage}
            className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md"
          >
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1733781748/verdura-nexus/Frame_23_exivxp.png"
              alt="Send"
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg">Theme</h2>
          <div className="flex gap-4">
            {["Romantic", "Playful", "Inspiring"].map((item) => (
              <button
                key={item}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  theme === item ? "bg-green-700" : "bg-[#1b2b1d]"
                } hover:bg-[#243730]`}
                onClick={() => setTheme(item)}
              >
                <img
                  src={
                    item === "Romantic"
                      ? "https://res.cloudinary.com/phantom1245/image/upload/v1733781741/verdura-nexus/mdi_emoji-kiss-outline_yx0303.png"
                      : item === "Playful"
                      ? "https://res.cloudinary.com/phantom1245/image/upload/v1733781744/verdura-nexus/stash_emoji-joy_nineb3.png"
                      : "https://res.cloudinary.com/phantom1245/image/upload/v1733781744/verdura-nexus/hugeicons_idea_nshugr.png"
                  }
                  alt={item}
                  className="w-6 h-6"
                />
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-lg">Encrypt Your Message</h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-500" />
            Encrypt your message
          </label>
        </div>
        {loading && (
          <div className="h-screen w-full flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <AnimatePresence>
          {showPopover && (
            <PopoverContent handleClose={handleClose} generatedImage={generatedImage} message={message} />
          )}
        </AnimatePresence>
      </div>
    </DefaultLayout>
  );
}
