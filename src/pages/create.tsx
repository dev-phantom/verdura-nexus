import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";

export default function Create() {
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
          <button className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
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
      </div>
    </DefaultLayout>
  );
}
