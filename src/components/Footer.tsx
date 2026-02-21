import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* CTA / Contact Form Section */}
      <section className="bg-[#004540] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-[#fffa81] text-3xl md:text-4xl font-bold mb-2">Contact</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 h-14 focus:ring-2 focus:ring-[#fffa81]"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 h-14 focus:ring-2 focus:ring-[#fffa81]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 h-14 focus:ring-2 focus:ring-[#fffa81]"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-white outline-none text-gray-700 h-32 focus:ring-2 focus:ring-[#fffa81] resize-none"
            ></textarea>
            
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#fffa81] hover:bg-[#ece66a] text-[#013220] font-bold py-3 px-10 rounded-full flex items-center gap-3 transition-all text-lg md:text-xl shadow-lg group"
              >
                Send Us
                <span className="bg-[#013220] text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Links Section */}
      <div className="bg-[#fffa81] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            
            {/* Logo and About */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left lg:ml-14">
              <img src={logo} alt="Mofit" className="h-30 w-30 mb-4 object-contain grayscale brightness-0" />
              <p className="text-[#004540]/80 text-md font-semibold">
                Nairobi County, <br/> Kenya <br/> +254-713787977
              </p>
              <div className="flex items-center gap-6 py-2">
                <a href="/" target="_blank" rel="noreferrer" className="text-[#004540] hover:text-blue-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="/" target="_blank" rel="noreferrer" className="text-[#004540] hover:text-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="/" target="_blank" rel="noreferrer" className="text-[#004540] hover:text-pink-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="/" target="_blank" rel="noreferrer" className="text-[#004540] hover:text-blue-800 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left lg:ml-20">
              <nav className="flex flex-col gap-2">
                {["Home", "News", "About", "Contact", "Events", "Store",].map((item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-md font-semibold text-[#004540]/70 transition-colors w-fit"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <div className="flex flex-col gap-2 text-md font-semibold text-[#004540]/70">
                <span>Our Partners</span>
                <span>Supporters</span>
                <span>Volunteer</span>
                <span>Donate Us</span>
                <span>Location</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start gap-3 text-md font-semibold text-[#004540]/70">
                <a className="flex items-center gap-2">
                  <span>Massai Dress</span>
                </a>
                <a className="flex items-center gap-2">
                  <span>Earrings</span>
                </a>
                <div className="flex items-center gap-2">
                  <span>Hand Bracelates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Massai Rungus</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Jwelery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#004540]/10 lg:mx-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div>
                <p className="text-md text-[#004540]/60">
                  © {new Date().getFullYear()} City Shuka. All rights reserved.
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Design by <span className="text-[#004540] font-semibold">Vigomerge Inc.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;