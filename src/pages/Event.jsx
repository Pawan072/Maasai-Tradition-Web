import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bg from '../assets/EventIMG/EventBG.jpg'
 
import event1 from "../assets/EventIMG/Event01.png";
import event2 from "../assets/Event02.png";
import event3 from "../assets/Event03.png";
import event4 from "../assets/Event04.png";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
 
const events = [
  {
    img: event1,
    title: "CITY SHUKA FESTIVAL",
    time: "08/22/2026 08:00 PM - 08/22/2026 08:00 PM ",
    location: "Nairobi, Kenya",
    description:
      "City Shuka Festival is a powerful celebration of Maasai culture, unity, and tradition. Inspired by the iconic Shuka cloth — a symbol of identity, pride, and resilience — this festival brings the community together to honor its rich heritage and pass traditions to future generations.",
  },
  {
    img: event2,
    title: "THE CITY SHUKA INTERNATIONAL FILM FESTIVAL",
    time: "08/22/2026 08:00 PM - 08/22/2026 08:00 PM",
    location: "Nairobi, Kenya",
    description:
      "The City Shuka International Film Festival brings together storytellers from around the world to showcase films that highlight culture, identity, creativity, and social impact. It champions emerging filmmakers, promotes youth talent, and creates a bridge between local narratives and global audiences.",
  },
  {
    img: event3,
    title: "THE CITY SHUKA CONFRENCE",
    time: "11/28/2026 08:00 PM - 11/28/2026 08:00 PM",
    location: "Nairobi Country, Kenya",
    description:
      "The City Shuka Conference is a dynamic gathering that brings together creatives, youth leaders, educators, and community innovators to explore ideas around culture, creativity, economic empowerment, and social impact. It serves as a platform for learning, collaboration, and shaping the future of creative communities.",
  },
  {
    img: event4,
    title: "CITY SHUKA MAA ANNUAL CONVENTION",
    time: "12/25/2026 09:00 PM - 12/25/2026 09:00 PM ",
    location: "Nairobi, Kenya",
    description:
      "This an event article, used for writing about and listing the events planned for the future on your website. You can edit all of this text from the Pages tab by clicking the edit button.",
  },
];
 
const Event = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section>
        <div
          className="relative min-h-[60vh] md:min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Background Overlay - Light white tint for readability */}
          <div className="absolute inset-0 bg-white/40"></div>
 
          <div className="relative z-10 mb-[120px] px-4">
            {/* Upper Heading: About Us */}
            <div className="mb-12 md:mb-24 mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-2 ">
                <span className="text-red-600">O</span>ur
                <span className="text-red-600"> E</span>vents
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
              </h3>
            </div>
 
            
          </div>
        </div>
      </section>
 
      {/* Upcoming Events */}
      <section className="py-12 px-4 md:px-10 lg:px-20">
        {/* Heading Section: Mobile par stack hoga, Tablet/Laptop par flex */}
        <div className="flex flex-row items-center justify-center gap-4 pb-12 md:pb-20">
          {/* Decorative Line Left */}
          <div className="flex-1 h-1 md:h-1.5 bg-red-600 rounded-full" />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#004540] whitespace-nowrap">
            <span className="text-red-600">U</span>PCOMING EVENTS
          </h2>

          {/* Decorative Line Right */}
          <div className="flex-1 h-1 md:h-1.5 bg-red-600 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-lg flex flex-col"
            >
              <img
                src={event.img}
                className="h-48 sm:h-60 w-full object-cover"
                alt={event.title}
              />
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-bold text-red-600 leading-tight">
                  {event.title}
                </h2>

                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                    <Clock className="h-5 w-5 text-[#004540]" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                    <MapPin className="h-5 w-5 text-[#004540]" />
                    {event.location}
                  </p>
                </div>
          
                <p className="font-medium text-[#004540] pt-2 text-sm md:text-base">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Explore More Button */}
        <div className="flex justify-center w-full mt-10 md:mt-16">
          <Link
            to="/explore"
            className="text-base md:text-lg bg-[#004540] py-3 px-8 rounded-xl text-[#fffa81] font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Explore more
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
 
export default Event;