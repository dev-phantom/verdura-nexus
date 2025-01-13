import { useState } from "react";
import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";
import { AnimatePresence } from "framer-motion";
import PopoverContent from "../components/shared/popoverContent";
import axios from "axios";

export default function Create() {
  const [showPopover, setShowPopover] = useState(false);
  const [theme, setTheme] = useState("Romantic");
  const [decorations, setDecorations] = useState(["Butterflies"]);
  const [message, setMessage] = useState("");
  const [encrypt, setEncrypt] = useState(false);
  const [password, setPassword] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    if (!message) {
      alert("Please enter a message!");
      return;
    }

    setLoading(true);
    setError(null);
    const prompt = `A beautiful plant with the theme "${theme}" and decorations like "${decorations.join(", ")}". The plant is styled to match the message: "${message}"`;
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            query: prompt,
            count: 1,
            client_id: "Ei5L_WMwdu5qTDzm6UuWKChYUzdpGfpPMABrDr5zU4c",
            orientation: "landscape",
          },
        }
      );

      const imageUrl = response.data[0]?.urls?.regular;
      console.log(imageUrl);
      if (!imageUrl) throw new Error("Failed to fetch the image.");

      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) throw new Error("Canvas context not available.");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const encodedData = encodeMessageIntoImage(imageData.data, message);

        ctx.putImageData(
          new ImageData(encodedData, canvas.width, canvas.height),
          0,
          0
        );
        setGeneratedImage(canvas.toDataURL());
        setShowPopover(true);
      };

      img.src = imageUrl;
    } catch (err) {
      console.error(err);
      setError("Failed to generate the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Ensure clean data encoding and improved handling.
  const encodeMessageIntoImage = (
    data: Uint8ClampedArray,
    message: string
  ): Uint8ClampedArray => {
    const messageBits = new Uint8Array(
      new TextEncoder().encode(message)
    ).reduce((acc, byte) => {
      return acc.concat(
        Array.from({ length: 8 }, (_, i) => (byte >> (7 - i)) & 1)
      );
    }, [] as number[]);

    // Append null terminator bits (eight zeros) to mark message end
    messageBits.push(...Array(8).fill(0));

    let bitIndex = 0;
    for (let i = 0; i < data.length && bitIndex < messageBits.length; i += 4) {
      data[i] = (data[i] & ~1) | messageBits[bitIndex++];
    }
    return data;
  };

  const handleClose = () => {
    setShowPopover(false);
    setGeneratedImage(null);
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
              {/* Theme Options */}
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

        {/* Decorative Elements */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg">Decorative Elements</h2>
          <div className="flex gap-4">
            {["Butterflies", "Raindrops"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-green-500"
                  checked={decorations.includes(item)}
                  onChange={() => {
                    setDecorations((prev) =>
                      prev.includes(item)
                        ? prev.filter((decoration) => decoration !== item)
                        : [...prev, item]
                    );
                  }}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg">Encrypt Your Message</h2>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-green-500"
              checked={encrypt}
              onChange={(e) => setEncrypt(e.target.checked)}
            />
            Encrypt your message
          </label>
          {encrypt && (
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 text-sm bg-forestGreen text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </div>
        {loading && (
          <div className="h-screen w-full flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <AnimatePresence>
          {showPopover && (
            <PopoverContent
              handleClose={handleClose}
              generatedImage={generatedImage}
              message={message}
            />
          )}
        </AnimatePresence>
      </div>
    </DefaultLayout>
  );
}
