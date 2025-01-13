import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Create from "./pages/create";
import Decrypt from "./pages/decrypt";
import { useEffect } from "react";

const imageUrls = [
  "https://res.cloudinary.com/phantom1245/image/upload/v1733749562/verdura-nexus/Rectangle_3_4_wtxoea.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545771/verdura-nexus/tanalee-youngblood-CMdQcxsWZE0-unsplash_1_dxhqx1.jpg",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545747/verdura-nexus/flower-stick-564132_1280_hu0nkc.jpg",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733749564/verdura-nexus/Rectangle_6_ddyb8t.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/houseplant-7367379_1280-removebg-preview_qapvtc.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545753/verdura-nexus/plant-8360681_1280-removebg-preview_mdnzox.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/plant-763965_1280-removebg-preview_gcpob3.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545746/verdura-nexus/flower-stick-564132_1280-removebg-preview_adqcn6.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733607340/verdura-nexus/Rectangle_2_1_ddmgpp.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545747/verdura-nexus/rodion-kutsaiev-049M_crau5k-unsplash_otro7a.jpg",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733542824/verdura-nexus/Rectangle_1_ixw2gg.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733779338/verdura-nexus/Rectangle_1_1_n6uooh.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733781748/verdura-nexus/Frame_23_exivxp.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1733781741/verdura-nexus/mdi_emoji-kiss-outline_yx0303.png",
  
];

export default function App() {
  useEffect(() => {
    const preloadImages = (urls: string[]): void => {
      urls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages(imageUrls); // Preload all images when the component mounts
  }, []);
  return (
    <Routes>

    <Route index element={<Home />} />
    <Route path="create" element={<Create />} />
    <Route path="decrypt" element={<Decrypt />} />

    </Routes>

  );
}
