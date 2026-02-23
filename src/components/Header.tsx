import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Chevron icon add kiya hai
import logo from "../assets/logo.png";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { 
    label: "Services", 
    path: "#",
    submenu:[
      { label: 'Education', path: '/services/education'},
      { label: 'Conservation', path: '/services/conservation'},
      { label: 'Culture Heritage', path: '/services/heritage'},
      { label: 'Women Empowerment', path: '/services/empowerment'},
      { label: 'Climate Advocacy', path: '/services/climate'},
    ]
  },
  { label: "Events", path: "/events" },
  { label: "Store", path: "/store" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
        {/* Main Bar */}
        <div className="relative bg-[#4FA39B] rounded-b-[40px] shadow-lg border-b-4 border-white">
        
            {/* Curve Shape */}
            <div className="absolute left-0 bottom-[-25px] w-[240px] h-[80px] bg-[#4FA39B] rounded-br-[60px] border-r-4 border-b-4 border-white z-10"/>
    
            <div className="container mx-auto px-6 flex items-center justify-between h-20">
              
              {/* Logo */}
              <Link to="/" className="relative z-10 flex items-center">
                <img src={logo} alt="logo" className="h-16 w-16 object-contain" />
              </Link>
    
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center gap-2">
                {links.map((item) => (
                  <div key={item.path} className="relative group py-5"> {/* 'group' class for hover */}
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 text-white font-semibold px-4 py-2 rounded-full transition
                      ${location.pathname === item.path ? "bg-white/20" : "hover:bg-white/10"}`}
                    >
                      {item.label}
                      {item.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                    </Link>

                    {/* Desktop Submenu (Hover effect) */}
                    {item.submenu && (
                      <div className="absolute top-[100%] left-0 min-w-[200px] bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-5 py-2 text-gray-700 hover:bg-[#4FA39B] hover:text-white transition-colors text-sm font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            
              {/* Sign Up */}
              <Link
                to="/signup"
                className="hidden lg:block bg-[#fffa81] text-black font-bold px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition"
              >
                Sign Up
              </Link>
            
              {/* Mobile Button */}
              <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
        </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-y-auto ${open ? "max-h-[80vh]" : "max-h-0"}`}>
        <nav className="flex flex-col p-4">
          {links.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                onClick={() => !item.submenu && setOpen(false)}
                className="flex justify-between items-center px-4 py-3 border-b border-gray-100 text-gray-700 font-semibold"
              >
                {item.label}
              </Link>
              {/* Mobile Submenu Items (Always visible if main menu is open) */}
              {item.submenu && (
                <div className="bg-gray-50 pl-8">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-sm text-gray-600 border-b border-gray-100 last:border-none"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#4FA39B] text-white text-center py-3 rounded-full font-bold"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}