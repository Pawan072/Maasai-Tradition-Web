import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Quote } from 'lucide-react';


// images
import bg from '../../assets/EducationIMG/twin boys.jpg';
import mandela from '../../assets/EducationIMG/Mandela.jpg';
import scholerShip from '../../assets/EducationIMG/scholarship.png';
import employment from '../../assets/EducationIMG/employment.png';
import academy from '../../assets/EducationIMG/academy.png';
import infraStructure from '../../assets/EducationIMG/infrastructure.png';
import schoolSupplies from '../../assets/EducationIMG/school supplies.png';
import curriculars from '../../assets/EducationIMG/extra curriculars.png';



const facilities = [
    {
        title: 'Scholarships',
        img: scholerShip,
    },
    {
        title: 'Employment',
        img : employment,
    },
    {
        title: 'Academy',
        img: academy,
    },
    {
        title: 'InfraStructure',
        img: infraStructure,
    },
    {
        title: 'School Supplies',
        img: schoolSupplies,
    },
    {
        title: 'Extra Curriculars',
        img: curriculars,
    },
];


function Education (){
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
                  <div className="absolute inset-0 bg-white/40" />
                
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full pt-20">

                      <div className="flex justify-center mt-10 md:mt-10">
                        <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-2">
                          <span className="text-red-600">E</span>ducation
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                        </h3>
                      </div>
                  
                      <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                          <span className="text-red-600">L</span>et’s Make This World 
                          <br className="hidden md:block" />
                          <span className="md:mt-2 inline-block">a Better Place for Every Child</span>
                        </h1>
                  
                        <div className="mt-6 w-48 md:w-96 h-1.5 md:h-2 bg-red-600"></div>
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
                            Education is the most powerful weapon which you can use to change the world.
                        </span>
                    </h3>
                </div>
                <div className="flex pb-20">
                  {/* decoratiove div */}
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                  <h2 className="text-4xl font-medium text-[#004540] first-letter:text-red-600">Nelson Mandela</h2>
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                </div>

                <div className='grid grid-cols-2 px-18'>
                    <div className='px-6'>
                      <h3 className='text-2xl font-medium first-letter:text-red-600 text-[#004540]'>
                          Access to quality education is a major challenge
                          in parts of Kenya due to insufficient school
                          infrastructure and an acute shortage of teachers
                      </h3>
                      <p className='text-lg py-2 font-medium text-[#004540]'>
                          City Shuka, partnering with the Ministry of Education,
                          pursues the improvement of enrollment, retention,
                          completion, and transition rates, along with ensuring
                          the continuity of certain aspects of Maasai culture
                          while instilling environmental conservation awareness.
                      </p>
                      <p className='text-lg py-2 font-medium text-[#004540]'>
                          We improve infrastructure (classrooms, water,
                          sanitation), offering scholarships to disadvantaged
                          students, training teachers, and providing digital
                          learning tools.
                      </p>
                      <p className='text-lg py-2 font-medium text-[#004540]'>
                          Building and rehabilitating schools, including installing
                          sanitation facilities and providing learning materials to
                          enhance the environment. Providing professional
                          development, training workshops, and, in some cases,
                          recruiting teachers for understaffed areas.
                      </p>
                      <p className='text-lg py-2 font-medium text-[#004540]'>
                          Supplying tools such as tablets, computers, and
                          internet access to enhance digital literacy. Mobilizing
                          communities to value education and lobbying for
                          better educational policies and resources in rural
                          areas.
                      </p>
                    </div>
                    <div className='px-8'>
                        <img
                            src={mandela}
                            className='rounded-2xl h-full w-auto'
                        />
                    </div>
                </div>
                
                {/* Card section */}

                <div className='grid grid-cols-3 gap-4 px-16 py-10'>
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

export default Education;