import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="my-3  mx-auto w-[95%] bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md mt-20 px-8 rounded-xl text-white ">
      <div className="max-w-7xl py-20 font-poppins mx-auto px-6">
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex items-start col-span-2 flex-col justify-start gap-2 mb-8">
            <div>
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1733542826/verdura-nexus/Frame_2_1_qdahuf.png"
                alt="Logo"
                className="h-10"
              />
            </div>
            <div className="text-md font-semibold ">
              Grow Your Words. <br /> Grow the World
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#howItWorks" className="hover:text-orange-400">
                  How it works
                </a>
              </li>
              <li>
                <a href="/create" className="hover:text-orange-400">
                  Create
                </a>
              </li>
              <li>
                <a href="/decrypt" className="hover:text-orange-400">
                  Decrypt
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-2">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          {/* External */}
          <div>
            <h3 className="font-semibold mb-2">External</h3>
            <ul className="space-y-3">
              <li>
                <a href="/portfolio" className="hover:text-orange-400">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-sm pb-4">
          <p>
            &copy; {new Date().getFullYear()} Verdura Nexus. All rights
            reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
