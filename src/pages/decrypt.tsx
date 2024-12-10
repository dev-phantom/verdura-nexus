import CallToAction from "../components/shared/callToAction";
import HowItWorksHeader from "../components/shared/howItWorkHeader";
import DefaultLayout from "../layout/defaultLayout";

export default function Decrypt() {
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
      </div>
      <CallToAction
        backgroundImgLink="https://res.cloudinary.com/phantom1245/image/upload/v1733788221/verdura-nexus/Frame_8_1_ofnqix.png"
        title="Create Your Own Message 🌸"
      />
    </DefaultLayout>
  );
}
