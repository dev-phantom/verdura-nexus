import Footer from "../components/common/footer";
import Hero from "../components/shared/hero";
import { LayoutProps } from "../interface/layout";

export default function DefaultLayout({
  children,
  blobImg,
  blobImgTablet,
  blobImgMobile,
  showBrandName = false,
  title,
  subTitle,
  buttonText,
  showImg = false,
  containerWidth,
  blobImgHeight,
  buttonLink,
}: LayoutProps) {
  return (
    <div className="bg-darkGreen w-full text-white overflow-hidden">
      <Hero
        blobImg={blobImg}
        blobImgTablet={blobImgTablet}
        blobImgMobile={blobImgMobile}
        showBrandName={showBrandName}
        title={title}
        subTitle={subTitle}
        buttonText={buttonText}
        showImg={showImg}
        containerWidth={containerWidth}
        blobImgHeight={blobImgHeight}
        buttonLink={buttonLink}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
