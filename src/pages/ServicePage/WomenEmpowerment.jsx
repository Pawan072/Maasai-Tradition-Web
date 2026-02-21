import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Quote } from "lucide-react";


// images
import bg from '../../assets/WomenEmpowermentIMG/women empowerment.png';
import posterlism from '../../assets/WomenEmpowermentIMG/empowerment 2.png';

// card images
import Beading from '../../assets/WomenEmpowermentIMG/beading.png'; 
import Jwelery from '../../assets/WomenEmpowermentIMG/Maasai jewelry.png';
import Education from '../../assets/WomenEmpowermentIMG/Girls Education.png';
import Embro from '../../assets/WomenEmpowermentIMG/Embroidery.png';
import Health from '../../assets/WomenEmpowermentIMG/Health & Safety.png'; 
import Sustainable from '../../assets/WomenEmpowermentIMG/Sustainable Livelihood.png';


const empowerments = [
  {
    title: 'Beading',
    img: Beading,
  },
  {
    title: 'Maasai Jwelery',
    img: Jwelery,
  },
  {
    title: 'Girl Education',
    img: Education,
  },
  {
    title: 'Embroidery',
    img: Embro,
  },
  {
    title: 'Health & Safety',
    img: Health,
  },
  {
    title: 'Sustainable Livelihood',
    img: Sustainable,
  },
];




function Empowerment (){
  return(
    <>
      <Header/>
      <section>
        <div
          className="relative min-h-[60vh] md:min-h-screen w-full flex flex-col overflow-hidden"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* decorative div */}
          <div className="absolute inset-0 bg-white/40" /> 
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full pt-20">
            <div className="flex justify-center mt-10 md:mt-10">
              <h3 className="lg:text-4xl md:text-3xl font-bold inline-block text-[#004540] relative pb-2">
                <span className="text-red-600">W</span>omen Empowerment
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
              </h3>
            </div>
        
            <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                <span className="text-red-600">I</span>nitiating Self-Sustaning 
                <br className="hidden md:block" />
                <span className="md:mt-2 inline-block">Employment Among Maasai Women</span>
              </h1>
        
              <div className="mt-6 w-48 md:w-96 h-1.5 md:h-2 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-6 md:px-16 py-10'>
          <h3 className='text-xl md:text-3xl flex items-start gap-4 text-[#004540] font-medium leading-relaxed'>
            <Quote 
              className='text-red-600 shrink-0 rotate-180 fill-red-600' 
              size={32} 
              strokeWidth={3} 
            /> 
            
            <span>
              There is no tool for development more effective than the empowerment of women.
            </span>
          </h3>
        </div>
        <div className="flex pb-20">
          {/* decoratiove div */}
          <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
          <h2 className="text-4xl font-medium text-[#004540] first-letter:text-red-600">Kofi Annan</h2>
          <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
        </div>
        <div className="grid grid-cols-2 gap-6 px-10">
          <div className="">
            <h2 className="text-3xl font-medium text-[#004540] first-letter:text-red-600">
              City Shuka, supports the Maasai to diversify
              livelihoods beyond pastoralism.
            </h2>
            <p className="text-2xl font-medium text-[#004540] py-8">
              We provide scholarships, build schools, and offer adult
              literacy classes to Maasai women, enabling them to
              gain knowledge of business management and their
              rights.
            </p>
            <p className="text-2xl font-medium text-[#004540]">
              City Shuka, help women establish small businesses
              and access microloans to start income-generating
              activities. Programs also include training in livestock
              management, goat rearing, and selling artisanal
              beadwork.
            </p>
            <p className="text-2xl font-medium text-[#004540] py-8">
              Support includes reproductive health services,
              counseling for survivors of violence, and safe houses
              for girls escaping FGM and forced marriage.
            </p>
            <p className="text-2xl font-medium text-[#004540]">
              We work with local authorities to secure land title
              deeds for women, allowing them to control resources
              and gain decision-making power.
            </p>
            <p className="text-2xl font-medium text-[#004540] py-8">
              Our ultimate goal is to break the cycle of poverty and
              dependence, fostering a stronger, more self-reliant
              community
            </p>
          </div>
          <img
            src={posterlism}
            className="w-full h-4/5 rounded-2xl"
          />
        </div>
      </section>
      <section className="pb-10">
        <div className="grid grid-cols-3 gap-4 px-10">
          {empowerments.map((empowerment, index)=>(
            <div>
              <div
                className="relative w-full h-70 flex flex-col overflow-hidden rounded-2xl bg-[#004540]/20"
                style={{
                  backgroundImage: `url(${empowerment.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* decorative div for visible text on img */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" /> 
                <h2 className='relative z-10 items-center text-center my-auto text-2xl font-medium uppercase first-letter:text-red-600 text-[#fffa81]'>{empowerment.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Empowerment;