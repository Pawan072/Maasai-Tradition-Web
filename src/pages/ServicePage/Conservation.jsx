import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Quote } from 'lucide-react';


// images
import environment from '../../assets/ConservationIMG/Environment.jpg';
import plant from '../../assets/ConservationIMG/plants.jpg';
import Reforestation from '../../assets/ConservationIMG/restoration.png';
import Land from '../../assets/ConservationIMG/Land Conservation.png';
import Carbon from '../../assets/ConservationIMG/Redd+ Carbon.png';
import Research from '../../assets/ConservationIMG/Species Research.png';
import Restoration from '../../assets/ConservationIMG/Rangeland Restoration.png';
import Soil from '../../assets/ConservationIMG/Soil Conservation.png';



const facilities = [
    {
        title: 'Reforestation',
        img: Reforestation,
    },
    {
        title: 'Land conservation',
        img : Land,
    },
    {
        title: 'Red++ Carbon',
        img: Carbon,
    },
    {
        title: 'Rangeland Restoration',
        img: Restoration,
    },
    {
        title: 'Spices Research',
        img: Research,
    },
    {
        title: 'Soil Conservation',
        img: Soil,
    },
];


function Conservation (){
    return(
        <>
            <Header/>    
            <section>
                <div
                  className="relative min-h-[60vh] md:min-h-screen w-full flex flex-col overflow-hidden"
                  style={{
                    backgroundImage: `url(${environment})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-white/40" />
                
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full pt-20">

                      <div className="flex justify-center mt-10 md:mt-10">
                        <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-2">
                          <span className="text-red-600">E</span>nvironment Conservation
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                        </h3>
                      </div>
                  
                      <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                          <span className="text-red-600">P</span>rotect Nature, Preserve our 
                          <br className="hidden md:block" />
                          <span className="md:mt-2 inline-block">Future</span>
                        </h1>
                  
                        <div className="mt-6 w-48 md:w-48 h-1.5 md:h-2 bg-red-600"></div>
                      </div>

                    </div>
                </div>
            </section>

            <section className='py-20'>
                <div className='px-6 md:px-16 py-10'>
                    <h3 className='text-xl md:text-3xl flex items-start gap-4 text-[#004540] font-medium leading-relaxed'>
                        <Quote 
                            className='text-red-600 shrink-0 rotate-180 fill-red-600' 
                            size={32} 
                            strokeWidth={3} 
                        /> 
                        
                        <span>
                            The greatest threat to our planet is the belief that someone else will save it.
                        </span>
                    </h3>
                </div>
                <div className="flex pb-20">
                  {/* decoratiove div */}
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                  <h2 className="text-4xl font-medium text-[#004540] first-letter:text-red-600">Robert Swan</h2>
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                </div>

                <div className='grid lg:grid-cols-2 px-10'>
                    <div className='px-6'>
                        <h3 className='text-2xl font-medium first-letter:text-red-600 text-[#004540]'>
                            Environmental conservation in Kenya focuses on
                            protecting its rich biodiversity, enhancing forest
                            cover to nearly 10%, and managing water resources.
                        </h3>
                        <p className='text-lg py-2 font-medium text-[#004540]'>
                            City Shuka, helps in Forestry and Land Restoration in
                            Kenya to increased its forest cover to nearly 10% and
                            tree cover to 12.3%, aiming to combat deforestation
                            and restore degraded lands.
                        </p>
                        <p className='text-lg py-2 font-medium text-[#004540]'>
                            City Shuka, Initiatives in Northern Kenya focus on
                            combating desertification and improving water
                            resource management through rainwater harvesting.
                        </p>
                        <p className='text-lg py-2 font-medium text-[#004540]'>
                            Planting indigenous trees in institutions such as
                            schools, hospitals, and refugee homesteads, as well as
                            around the camps, such as green belts and orchards,
                            to restore forest cover.
                        </p>
                        <p className='text-lg py-2 font-medium text-[#004540]'>
                            Several hectares of green belts managed through
                            natural regeneration to restore land cover.
                        </p>
                        <p className='text-lg py-2 font-medium text-[#004540]'>
                            City Shuka promotes biodiversity conservation through
                            environmental education and public awareness
                            campaigns. These initiatives aim to foster a sense of
                            responsibility and appreciation for nature among
                            citizens.
                        </p>
                    </div>
                    <div className='p-8'>
                        <img
                            src={plant}
                            className='rounded-2xl h-160 w-full'
                        />
                    </div>
                </div>
                
                {/* Card section */}

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-10 py-10'>
                    {facilities.map((facilitie, index)=>(
                        <div
                          className="relative w-full h-70 flex flex-col overflow-hidden rounded-2xl bg-[#004540]/20"
                          style={{
                            backgroundImage: `url(${facilitie.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}
                        >
                            {/* decorative div for visible text on img */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" /> 
                            <h2 className='relative z-10 items-center text-center my-auto text-2xl font-medium uppercase first-letter:text-red-600 text-[#fffa81]'>{facilitie.title}</h2>
                        </div>
                    ))}
                </div>

            </section>
            <Footer/>
        </>
    )
};

export default Conservation;