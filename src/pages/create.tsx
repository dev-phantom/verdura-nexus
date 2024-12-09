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
      <div className="py-16 px-12">
        <HowItWorksHeader
          title="Craft Your Message"
          description="Scroll Down for customizable options to enhance your image"
        />
      </div>
    </DefaultLayout>
  );
}
