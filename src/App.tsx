import { NavButton } from "./assets/icon/navButton";

export default function App() {
  return (
    <div className="bg-darkGreen w-full text-white">
      <div className="w-[95%] mx-auto py-4 static">
        {/* Container for image and text */}
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1733542824/verdura-nexus/Rectangle_1_ixw2gg.png"
            alt="bg-asset"
            className="w-full h-[45rem] "
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex justify-start items-start flex-col">
            <div className="w-[65%] flex justify-between items-center pt-4">
              <div>
                <img
                  src="https://res.cloudinary.com/phantom1245/image/upload/v1733542826/verdura-nexus/Frame_2_1_qdahuf.png"
                  alt="logo"
                  className="w-[4rem] h-[4rem]"
                />
              </div>
              <div>
                <nav className="w-full">
                  {/* Navigation Links */}
                  <ul className="hidden md:flex gap-8 text-lg font-poppins">
                    <li className="hover:text-orange-400 cursor-pointer">
                      Home
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                      How It Works
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                      Create
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                      Decrypt
                    </li>
                  </ul>

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden flex items-center justify-center"
                    aria-label="Open menu"
                  >
                    <NavButton />
                  </button>
                </nav>
              </div>
            </div>
            <div className="w-full pt-16 flex justify-between items-center">
              <div className="pl-10 w-[60%] space-y-2">
                <div className=" font-sacramento text-4xl ">Verdura Nexus</div>
                <div className="font-playfair text-6xl leading-[4rem]">
                  Where Words Blossom into Greenery
                </div>
                <div className="font-lora w-[80%]">
                  Unleash the magic of nature with every message you send. At
                  Verdura Nexus, your personalized messages grow into unique
                  plant-inspired creations.
                </div>
                <div className="pt-8">
                  <button className="bg-darkGreen border border-white rounded-xl font-poppins font-bold w-[12rem] h-[3rem]">
                  Create My Plant
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/phantom1245/image/upload/v1733545754/verdura-nexus/plant-8360682_1280-removebg-preview_ntbrsn.png"
                  alt="flower in a pot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
