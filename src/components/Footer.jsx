import map from "../assets/images/map.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-14 h-9">
                {/* Map Image */}
                <img
                  src={map}
                  alt="Map logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              Made with lots of <span className="text-red-500">♥</span> in San
              Francisco
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              {["Delta", "Sigma", "Zeta", "Alpha", "Acumen"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Help",
                "Training Videos",
                "Webinars",
                "Request a Demo",
                "Create Surveys",
                "Quiz Maker",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base">Company</h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Team", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2022 Circle. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-gray-900" />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaTwitter className="w-4 h-4 text-gray-900" />
              </a>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Data & Security
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
