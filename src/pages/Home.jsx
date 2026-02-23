import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { ArrowUpRight, Ticket, ArrowRight, Clock, MapPin, Quote  } from 'lucide-react'; 

// images
import home from '../assets/Home.jpg';
import home1 from '../assets/Home2.png';
import home2 from '../assets/Home1.png';
import home3 from '../assets/Home3.png';
import home4 from '../assets/home4.png';
import home5 from '../assets/home5.png';
import home6 from '../assets/home6.png';

// Press images
import first from '../assets/First press.png';
import second from '../assets/second press.png';
import third from '../assets/third press.png';

// Shuka images
import men from '../assets/shukaMen.jpg';
import women from '../assets/shukaWomen.jpg';
import background from '../assets/cityShuka.jpg';
import foreground from '../assets/cityShuka2.png';

// Arrival images
import dress from '../assets/Maasai Dress.jpg';
import earing1 from '../assets/Maasai Earrings 01.jpg';
import earing2 from '../assets/Maasai Earrings 02.jpg';
import handBracelate from '../assets/Maasai Hand Bracelets.jpg';
import earing3 from '../assets/MAASAI EARRINGS 03.jpg';
import rungs from '../assets/MAASAI RUNGUS.jpg';

// Event images
import event1 from '../assets/Event01.png';
import event2 from '../assets/Event02.png';
import event3 from '../assets/Event03.png';
import event4 from '../assets/Event04.png';

// testimonal images
import bgTestimonal from '../assets/Testimonals.jpg';
import maria from '../assets/Maria.jpg';
import jonatthan from '../assets/jonathan.png';
import timba from '../assets/Timba.png';



// Supporters images
import ntulea from '../assets/NTULEA.png';
import tuvuli from '../assets/tuvuli.png';


const Services = [
  {
    img: home4,
    title:'Educational Programs',
    description: 'Educational initiatives that provide insights into Maasai culture and its relevance in the modern world.'
  },
  {
    img: home6,
    title: 'Community Exhibitions',
    description: 'Experience vibrant displays showcasing the diverse facets of Maasai heritage, from art to history.'
  },
  {
    img: home5,
    title: 'Cultural Workshops',
    description: 'Immerse yourself in interactive sessions that explore the intricacies of Maasai traditions, crafts, and folklore.'
  }
]

const News = [
  {
    img: first,
    press: 'First Press Release',
    date: '12/04/2025',
    description: 'CITY SHUKA: Where a woman rises like dawn quiet, bold, and unstoppable.'
  },
  {
    img: second,
    press: 'Second Press Release',
    date: '12/04/2025',
    description: 'In City Shuka, every women is a flame soft enough to warm strong enough to light the way.'
  },
  {
    img: third,
    press: 'Third Press Release',
    date: '12/04/2025',
    description: 'CITY SHUKA: A tapestry of women`s dreams, woven the courage crowned with hope.'
  }
]

const features = [
  {
    img: men,
    title: 'MEN OF SHUKA',
    description: 'Empowering men involves providing them with the tools and resources they need to succeed, whether thats through education, mentorship, or community support. It also means challenging harmful stereotypes and expectations that limit men s potential.'
  },
  {
    img: women,
    title: 'WOMEN OF SHUKA',
    description: 'Empowering women involves fostering their sense of self worth, decision making capabilities, and access to opportunities to overcome structural gender inequalities.'
  }
]

const arrivals = [
  {
    img: dress,
    title: 'MAASAI DRESS',
    finalPrice: ' 7999',
    discount: '0.01%OFF',
    price: '-8000.00',
    stock: 'Out of stock',
    view: 'Quick View',
  },
  {
    img: earing1,
    title: 'EARRINGS',
    finalPrice: ' 199',
    discount: '0.5%OFF',
    price: '-200.00',
    stock: 'New Arrival',
    view: 'Quick Viwe',
  },
  {
    img: earing2,
    title: 'EARRINGS',
    finalPrice: ' 200',
    discount: '0.5%OFF',
    price: '-205.00',
    stock: 'New Arrival',
    view: 'Quick View',
  },
  {
    img: handBracelate,
    title: 'HAND BRACELATES',
    finalPrice: ' 900',
    discount: '0.5%OFF',
    price: '-919.00',
    stock: 'New Arrival',
    view: 'Quick View',
  },
  {
    img: earing3,
    title: 'EARRINGS',
    finalPrice: ' 250',
    discount: '0.5%OFF',
    price: '-265.00',
    stock: 'New Arrival',
    view: 'Quick View',
  },
  {
    img: rungs,
    title: 'MAASAI RUNGUS',
    finalPrice: ' 1500',
    discount: '0.5%OFF',
    price: '-1565.00',
    stock: 'New Arrival',
    view: 'Quick View',
  },
]

const events = [
  {
    img: event1,
    title: 'CITY SHUKA FESTIVAL',
    time: '08/22/2026 08:00PM 08/22/2026 08:00PM /',
    location: 'Nairobi, Kenya',
    description: 'The term City Shuka Festival is likely a popular, informal name for the official Maa Cultural and Tourism Festival (also known as Maa Cultural Week)',
  },
  {
    img: event2,
    title: 'THE CITY SHUKA INTERNATIONAL FILM FESTIVAL',
    time: '08/22/2026 08:00PM 08/22/2026 08:00PM /',
    location: 'Nairobi, Kenya',
    description: 'The City Shuka International Film Festival brings together storytellers from around the world to showcase films that highlight culture, identity, creativity, and social impact. It champions emerging filmmakers, promotes youth talent, and creates a bridge between local narratives and global audiences.',
  },
  {
    img: event3,
    title: 'THE CITY SHUKA CONFRENCE',
    time: '11/28/2026 08:00 PM 11/28/2026 08:00 PM /',
    location: 'Nairobi Country, Kenya',
    description: 'The City Shuka Conference is a dynamic gathering that brings together creatives, youth leaders, educators, and community innovators to explore ideas around culture, creativity, economic empowerment, and social impact. It serves as a platform for learning, collaboration, and shaping the future of creative communities.',
  },
  {
    img: event4,
    title: 'CITY SHUKA MAA ANNUAL CONVENTION',
    time: '12/25/2026 09:00 PM 12/25/2026 09:00 PM /',
    location: 'Nairobi, Kenya',
    description: 'This an event article, used for writing about and listing the events planned for the future on your website. You can edit all of this text from the Pages tab by clicking the edit button.'
  }
]

const testimonals = [
  {
    img: maria,
    user: 'Maria James',
    position: 'Cultural Enthusiast',
    description: 'Participating in the culture workshop deeply enriched my understanding of the Maasai traditions. A truly eye opening experience.'
  },
  {
    img: jonatthan,
    user: 'Jonatthan',
    position: 'Volunteer',
    description: 'The community axhibition offered me a glimpse into the vibrant history and lively tradition of the Massai people',
  },
  {
    img: timba,
    user: 'Timba Babuna',
    position: 'Coordinator',
    description: 'Participating in the cultural workshop deeply enriched my understanding of the Massai traditions. A truly eye opening experience',
  },
]



const supporters = [
  {
    img: tuvuli,
    title: 'Tuvuli Org.',
    position: 'IMPREMENTERS',
  },
  {
    img: ntulea,
    title: 'NTULEA',
    position: 'Partner',
  },
]

function Home() {
  const duplicatedNews = [...News, ...News];

  return (
    <>
      <Header />
      <section className='section-padding'>
        <div
          className="relative min-h-screen w-full flex items-center justify-center pt-20"
          style={{
            backgroundImage: `url(${home})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Background Overlay: PDF ke according light rakha hai */}
          <div className="absolute inset-0 bg-white/50"></div>
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl">
            {/* Heading Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex flex-col items-center md:items-start"> {/* Isse content center ya left align hoga */}
                <h1 className="text-3xl md:text-6xl text-[#004540] font-bold tracking-tight mb-2 uppercase">
                  <div className="flex gap-4 p-2 justify-center md:justify-start">
                    <span className='first-letter:text-red-600'>Discover</span> 
                    <span className='first-letter:text-red-600'>Authentic</span>
                  </div>
                  <div className="flex gap-4 p-2 justify-center md:justify-start">
                    <span className='first-letter:text-red-600'>Maasai</span> 
                    <span className='first-letter:text-red-600'>Tradition</span>
                  </div>
                </h1>
              </div>
              
              <div className='h-1.5 w-40 md:w-80 rounded-full bg-red-600 mt-2' />
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
              <Link
                to="/store"
                className="bg-[#fffa81]/80 hover:bg-[#eab308] text-[#004540] px-8 py-4 rounded-3xl font-bold text-lg flex items-center gap-2 transition-all shadow-lg active:scale-95"
              >
                Visit Our Store
                <ArrowUpRight size={24} strokeWidth={2.5} /> 
              </Link>
              <Link
                to="/events"
                className="bg-white/30 hover:bg-white/40 backdrop-blur-md text-[#004540] border border-white/50 px-8 py-4 rounded-3xl font-bold text-lg flex items-center gap-2 transition-all shadow-md"
              >
                Upcoming Events
                <Ticket size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
          
      {/* about Us */}
          
      <section className='section-padding'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 lg:px-26 lg:py-18'>
          {/* Left Side: Image Composition */}
          <div className='relative h-[500px] w-full'>
            <div className="absolute top-0 left-0 w-2/3 z-10">
              <img 
                src={home1} 
                alt="Nomadic Women"
                className='rounded-3xl shadow-lg w-full object-cover aspect-[4/5]'
              />
            </div>
            <div className="absolute lg:-bottom-10 md:bottom-10 sm:top-30 right-10 w-1/2 z-20">
              <img 
                src={home2}
                alt="Nomadic Dance"
                className='rounded-t-full border-[10px] border-white shadow-2xl w-full object-cover aspect-[3/4]'
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold border-b-4 border-red-600 inline-block">About Us</h3>
            <h2 className="text-4xl font-semibold text-emerald-900 leading-tight pt-20">
              <span className="text-red-600">E</span>mpowering <span className="text-red-600">C</span>ulture <span className="text-red-600">T</span>hrough <br />
              <span className="text-red-600">C</span>ITY <span className="text-red-600">S</span>HUKA <span className="text-red-600">C</span>AMPAIGN
            </h2>
            <p className="text-[#004540] text-lg leading-relaxed font-semibold">
              Our organization is dedicated to sharing and preserving
              the vibrant heritage of  people(Nomadic Communities).
              Through cultural exhibitions, educational workshops, and
              community outreach, we aim to promote understanding
              and appreciation of Nomadic  traditions and lifestyle. We
              work closely with Maasai, Samburu and other Nomadic
               communities to ensure their voices and stories are
              authentically represented, fostering a sustainable
              relationship between tradition and modernity. Join us in
              celebrating the timeless spirit of Nomadic Culture.
            </p>
          </div>
        </div>
      </section>
                
      {/* Experience the heartbeat */}
                
      <section>
        <div
          className="relative min-h-screen w-full flex items-center justify-center pt-20"
          style={{
            backgroundImage: `url(${home3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-green-500/20"></div>
      
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-6xl font-semibold tracking-tight mb-8">
              {/* Row 1 */}
              <div className='flex flex-wrap gap-4 p-2 justify-center'>
                <span className='text-4xl md:text-7xl text-[#fffa81]'><span className="text-red-600">E</span>xperience the </span>
                <span className='text-4xl md:text-7xl text-[#fffa81]'><span className="text-red-600">H</span>eartbeat</span>
              </div>
              {/* Row 2 */}
              <div className='flex flex-wrap gap-4 p-2 justify-center'>
                <span className='text-4xl md:text-7xl text-[#fffa81]'>of</span>
                <span className='text-4xl md:text-7xl text-[#fffa81]'><span className="text-red-600">T</span>radition</span>
              </div>
      
              {/* Red Underline: mx-auto se center hoga */}
              <div className='h-2 w-40 md:w-80 rounded-full bg-red-600 mt-4' />
            </h1>
      
            {/* Join Us Button */}
            <Link
              to="/contact"
              className="bg-[#fffa81] hover:bg-[#fff74d] transition-colors w-fit text-[#004540] px-10 py-4 rounded-full font-bold text-xl flex items-center gap-3 shadow-xl"
            >
              Join Us
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our services */}

      <section className='py-20'>
          <div>
            <h2 className='text-2xl text-center border-b-4 font-semibold border-red-500 w-fit mx-auto'>
              Our Services
            </h2>
            <div className="container mx-auto px-4 py-10">
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10">
                {Services.map((service, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-t-xl shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center bg-white"
                  >
                    {/* Image Container */}
                    <div className="mb-6">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-28 w-28 rounded-full object-cover shadow-sm"
                      />
                    </div>
                
                    <div className="flex flex-col items-start mb-4 w-full"> 
                      <h2 className="text-xl font-bold text-[#004540] first-letter:text-red-500 transition-colors">
                        {service.title}
                      </h2>   
                      <div className="h-1 w-16 rounded-full bg-red-600 mt-1" />
                    </div>
                    <p className="text-[#004540] font-medium leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="px-6 py-2 bg-[#fffa81] text-[#004540] rounded-full font-semibold text-lg cursor-pointer flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
                      Read More
                    </div>
                
                    <div className="h-1 w-full max-w-[400px] rounded-full bg-red-600 mt-6 opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* News Section */}
      <section className='bg-[#004540] py-10 pt-20'>
        <div>
          <h2 className='text-2xl text-center text-[#fffa81] border-b-4 font-semibold border-red-500 w-fit mx-auto'>
            News
          </h2>

          <div className="overflow-hidden py-10 w-full">
            <div className="animate-infinite-scroll flex gap-6 px-4">
              {duplicatedNews.map((news, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 w-[650px] h-[350px] rounded-xl overflow-hidden shadow-xl group"
                >
                  {/* Background Image */}
                  <img 
                    src={news.img} 
                    alt={news.press} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                    <div className="mb-2">
                      <h2 className="text-white font-bold text-3xl leading-tight">
                        {news.press}
                      </h2>
                    </div>
              
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {news.date}
                    </h3>
              
                    <p className="text-gray-200 text-base font-medium mb-4">
                      "{news.description}"
                    </p>
              
                    <button className="px-5 py-2 bg-[#fffa81] text-[#004540] rounded-full font-bold text-sm hover:bg-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Of Shuka */}

      <section className='py-8 sm:px-6'>
        <div className="pb-16 md:pb-24">
          <h2 className="text-xl md:text-2xl text-center border-b-4 font-semibold border-red-500 w-fit mx-auto">
            Features of Shuka
          </h2>

          {/* Added px-4 for mobile so cards don't touch the screen edges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 px-4 md:px-10 lg:px-28 pt-8 md:pt-12">
            {features.map((feature, index) => (
              <div key={index} className="max-w-xl mx-auto md:mx-0">
                <img
                  src={feature.img}
                  alt={feature.title}
                  /* Image height is smaller on mobile (h-60) and grows to h-80 on tablets/laptops */
                  className="h-60 sm:h-72 md:h-80 w-full object-cover object-top rounded-t-3xl shadow-md"
                />

                {/* Font size is text-2xl on mobile and text-3xl on larger screens */}
                <h3 className="text-2xl md:text-3xl font-bold mt-4 md:mt-6 tracking-wide">
                  <span className="text-red-600">
                    {feature.title.charAt(0)}
                  </span>
                  <span className="text-[#004540]">
                    {feature.title.slice(1)}
                  </span>
                </h3>

                <p className="text-[#004540] text-base md:text-lg mt-3 md:mt-4 leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* City Shuka Haritage Market */}

        <div
          className="relative min-h-screen w-full flex items-center justify-center px-10 md:px-20 lg:px-32"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >

          <div className="absolute inset-0 bg-[#004540]/40"></div>
        
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

            <div className="flex flex-col gap-6">
              <div className="w-fit">
                <h2 className="text-3xl md:text-4xl text-[#fffa81] font-bold mb-2">
                  City Shuka Heritage Market
                </h2>
                <div className="h-1.5 w-3/4 bg-red-600"></div>
              </div>
        
              <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
                City Shuka Heritage Market™ is a culturally rooted marketplace that 
                celebrates and sells authentic indigenous crafts while empowering local 
                artisans—especially women and youth—by connecting heritage, creativity, 
                and sustainable livelihoods through the City Shuka initiative under 
                Tuvuli Organization.
              </p>
            </div>
        
            {/* Right Side: Logo Image */}
            <div className="flex justify-center items-center">
              <img 
                src={foreground}
                alt="City Shuka Logo" 
                className="max-w-full h-auto drop-shadow-2xl"
              />
            </div>
        
          </div>
        </div>
      </section>


      <section className='py-14'>
        <h2 className="text-2xl text-center border-b-4 font-semibold border-red-500 w-fit mx-auto mb-16">
          New Arrival
        </h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:px-12 md:px-10 sm:px-6 gap-2'>
          {arrivals.map((arrival, index) => (

            <div key={index} className='m-4 bg-gray-300 rounded-2xl flex flex-col overflow-hidden'>

              <img
                src={arrival.img}
                className='rounded-t-2xl h-80 w-full object-cover'
                alt={arrival.title}
              />

              <div className='p-4 flex-grow'>
                <h2 className='text-red-500 text-3xl font-bold mb-2'>{arrival.title}</h2>

                <p className='text-2xl font-semibold'>
                  Ksh {arrival.finalPrice} 
                  <span className='text-green-600 text-lg ml-2'>({arrival.discount})</span>
                </p>

                <p className='text-xl line-through text-gray-500'>
                  Ksh {arrival.price}
                </p>
              </div>
          
              <div className="pb-2 flex justify-center">
                <Link 
                  // to=''
                  className='bg-[#004540] text-[#fffa81] py-3 px-8 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 w-full md:w-auto'
                >
                  Buy Now
                </Link>
              </div>
          
            </div>
          ))}
        </div>
      </section>

      {/* Event section */}
      
      <section className='p-6'>
        <h2 className="text-2xl text-center border-b-4 font-semibold border-red-500 w-fit mx-auto mb-16">
          Events
        </h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 lg:px-10 md:px-6 sm:px-4'>
          {events.map((event, index)=>(
            <div className='bg-gray-200 m-2 rounded-xl'>
              <img
                src={event.img}
                className='rounded-t-2xl h-60 w-full object-cover'
                alt={event.title}
              />
              <div className='p-4'>
                <h2 className='text-2xl font-semibold text-red-600'>{event.title}</h2>
                <p className='flex items-center gap-2 text-md text-gray-500'>
                  <Clock className='h-6 w-6' /> 
                  {event.time}
                </p>
                <p className='flex items-center gap-2 text-md text-gray-500'>
                  <MapPin className='h-5 w-5'/>
                  {event.location}
                </p>
                <p className='font-semibold pt-4'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-8">
          <Link
            // to="/explore"
            className='text-lg bg-[#004540] p-3 px-6 rounded-xl text-[#fffa81] font-semibold transition-all hover:opacity-90'
          >
            Explore more
          </Link>
        </div>
      </section>

      {/* testimonal section */}

      <section className='py-20'>
        <div
          className="relative min-h-screen w-full h-30 flex items-center justify-center px-10 md:px-20 lg:px-32"
          style={{
            backgroundImage: `url(${bgTestimonal})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-[#004540]/40"></div>
          <div className='grid grid-cols-1'>
            <h2 className="text-2xl border-b-4 font-semibold border-red-600 w-fit mx-auto">
              Testimonals
            </h2>

            <div className="overflow-hidden max-w-2xl relative md:pt-6">
              {/* Scrolling Wrapper */}
              <div className="animate-infinite-slide">
                {[...testimonals, ...testimonals].map((testimonal, index) => (
                  <div key={index} className="testimonial-card">
                    <img
                      src={testimonal.img}
                      className="rounded-full h-32 w-32 object-cover mb-4"
                      alt={testimonal.user}
                    />
                    <div className="max-w-xl">
                      <h2 className="text-[#fffa81] font-semibold text-2xl flex items-center justify-center gap-2">
                        <Quote className='text-red-700'/> {testimonal.user}
                      </h2>
                      <p className="font-bold text-[#fffa81] opacity-80">{testimonal.position}</p>
                      <p className="text-[#fffa81] mt-2 italic leading-relaxed whitespace-normal">
                        "{testimonal.description}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* supporter section */}

      <section className='py-10'>
        <div className='py-10'>
          <h2 className="text-2xl text-center border-b-4 font-semibold border-red-600 w-fit mx-auto mb-16">
            Supporters
          </h2>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            {supporters.map((supporter, index) => (
              <div key={index} className='flex flex-col items-center text-center'>
                <img
                  src={supporter.img}
                  className='rounded-full h-60 w-60 object-cover'
                  alt={supporter.title}
                />
                <div className='mt-4'>
                  <h2 className='text-2xl font-bold'>{supporter.title}</h2>
                  <h2 className='text-2xl text-gray-600'>{supporter.position}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;