import Footer from "../components/common/footer";
import Hero from "../components/shared/hero";
import { LayoutProps } from "../interface/layout";

export default function DefaultLayout({
  children,
  blobImg,
  showBrandName = false,
  title,
  subTitle,
  buttonText,
  showImg = false,
  containerWidth,
  blobImgHeight
}: LayoutProps) {
  return (
    <div className="bg-darkGreen w-full text-white overflow-hidden">
      <Hero
        blobImg={blobImg}
        showBrandName={showBrandName}
        title={title}
        subTitle={subTitle}
        buttonText={buttonText}
        showImg={showImg}
        containerWidth={containerWidth}
        blobImgHeight={blobImgHeight}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
