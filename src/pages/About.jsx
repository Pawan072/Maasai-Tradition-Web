import Header from "../components/Header";
import Footer from '../components/Footer';
import { Check } from "lucide-react";



// images
import bg from '../assets/AboutIMG/AboutBg.png';
import mission from '../assets/AboutIMG/photoClicker.jpg';
import environment from '../assets/AboutIMG/Environment.jpg';


function About () {
  const list1 = ["Education for Children", "Gender & Culture Heritage", "Media Training"];
  const list2 = ["Climate Advocacy", "Community Mentorship", "Environment Conservation"];
  return(
    <>
      <Header/>
      <section>
        <div
          className="relative min-h-[60vh] md:min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Background Overlay - Light white tint for readability */}
          <div className="absolute inset-0 bg-white/40"></div>
      
          <div className="relative z-10 text-center px-4">
            {/* Upper Heading: About Us */}
            <div className="mb-12 md:mb-24">
              <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-2">
                <span className="text-red-600">A</span>bout Us
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
              </h3>
            </div>
      
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-8xl font-semibold text-[#004540] tracking-tight flex flex-wrap justify-center gap-x-4">
                <span>
                  <span className="text-red-600">C</span>ITY
                </span>
                <span>
                  <span className="text-red-600">S</span>HUKA
                </span>
                <span>
                  <span className="text-red-600">C</span>AMPAIGN
                </span>
              </h1>
              {/* Red Underline for Main Heading */}
              <div className="mt-4 w-3/4 h-1.5 md:h-2 bg-red-600 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Our mission */}
      <section className="lg:p-20">
        <div className="flex pb-20">
          {/* decoratiove div */}
          <div className="mt-4 w-1/5 h-1.5 md:h-1 bg-red-600 mx-auto"/>
          <h2 className="text-4xl font-medium text-[#004540] first-letter:text-red-600">OUR MISSION</h2>
          <div className="mt-4 w-1/5 h-1.5 md:h-1 bg-red-600 mx-auto"/>
        </div>
        <div className="grid grid-cols-2 py-5 gap-4">
          <div>
            <p className="text-2xl text-[#004540] font-medium">
              We empower culture through CITY SHUKA
              CAMPAIGN, our organization is dedicated
              to sharing and preserving the vibrant
              heritage of  people(Nomadic
              Communities). Through cultural
              exhibitions, educational workshops, and
              community outreach, we aim to promote
              understanding and appreciation of
              Nomadic  traditions and lifestyle. We work
              closely with Maasai, Samburu and other
              Nomadic  communities to ensure their
              voices and stories are authentically
              represented, fostering a sustainable
              relationship between tradition and
              modernity. Join us in celebrating the
              timeless spirit of Nomadic Culture.
            </p>
          </div>
          <img 
            className="rounded-2xl"
            src={mission}
          />
        </div>
      </section>
      {/* Our Compaign */}
      <section className="relative min-h-[70vh] md:min-h-screen w-full flex flex-col items-center pt-24 pb-12 px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${environment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#004540]/70" />
      
        {/* Header Section */}
        <div className="relative z-10 text-center mb-16 md:mb-24">
          <h3 className="text-4xl md:text-6xl font-bold inline-block text-[#fffa81] relative pb-3">
            <span className="text-red-600">O</span>ur <span className="text-red-600">C</span>ampaign
            <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-red-600"></div>
          </h3>
        </div>
      
        <div className="relative z-10 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10">
            
            <div className="flex flex-col gap-6">
              {list1.map((text, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <Check className="text-red-600 font-bold shrink-0" size={28} strokeWidth={4} />
                  <span className="text-[#fffa81] text-xl md:text-3xl font-medium tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          
            <div className="flex flex-col gap-6">
              {list2.map((text, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <Check className="text-red-600 font-bold shrink-0" size={28} strokeWidth={4} />
                  <span className="text-[#fffa81] text-xl md:text-3xl font-medium tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-16 md:mt-24">
            <button className="bg-[#fffa81] hover:bg-[#fff960] text-[#013220] font-bold py-3 px-10 rounded-full flex items-center gap-3 transition-all text-xl shadow-lg">
              Join Us 
              <span className="bg-[#013220] text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Jairus Kinyanjui */}
      <section className="lg:py-20">
        <div className="flex pb-20">
          {/* decoratiove div */}
          <div className="mt-4 w-1/5 h-1.5 md:h-1 bg-red-600 mx-auto"/>
          <h2 className="text-5xl font-medium text-[#004540] first-letter:text-red-600">Jairus Kinyanjui</h2>
          <div className="mt-4 w-1/5 h-1.5 md:h-1 bg-red-600 mx-auto"/>
        </div>
        <div className="lg:px-18">
          <p className="text-2xl font-medium text-[#004540]">
            City Shuka Was founded in Nairobi, Kenya, by filmmaker and youth advocate jairus
            kinyanjui with the vision of creating safe spaces where young people can discover
            thier talents and build meaningful futures. The organization began as a small
            community initiative focused on using filmmaking and photography as tools for selfexpression, 
            education, and social change. Over time, Tuvuli expanded its programs to
            address broader youth chalenges including mental health awarness, gender
            equality, climate advocacy, and creative skills developement. Through initiatives such
            as the Tuvuli empowerment & developement programme (TEDP) and the city shuka
            programme, the organization has trained and mentored vulnerable children and youth,
            empowering them with practical creative skills and leadership capacity. Today, Tuvuli
            organization continues to grow as a community-based nonprofit, partnering with
            local, international and national stakeholders to nurture young storytellers, promote
            positive social values, and use art as a powerful voice for community transformation.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
};

export default About;