import Header from "../components/Header";
import Footer from "../components/Footer";


// images
import bg from '../assets/NewsIMG/News Section.jpg';
import first from '../assets/First press.png';
import second from '../assets/second press.png';
import third from '../assets/third press.png';

function News (){
    return(
        <>  
            <Header/>
            <section className="py-10">
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
                        <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-3">
                          <span className="text-red-600">N</span>ews
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                        </h3>
                      </div>
                      <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                          <span className="text-red-600">T</span>he unconquered spirit: stories from the maasai 
                        </h1>
                        <div className="mt-6 lg:w-60 md:w-96 h-1.5 md:h-2 bg-red-600"></div>
                      </div>
                    </div>
                </div>
            </section>
            <section className="pt-10">
                {/* first press */}
                <div>
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full">
                        <div className="flex justify-center mt-10 md:mt-10">
                          <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-3">
                            <span className="text-red-600">F</span>irst Press Release
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                          </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-10 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold first-letter:text-red-600 text-[#004540]">The Ongoing Struggle for ancestral Land Rights</h2>
                            <p className="text-2xl font-medium py-10 text-[#004540]">
                                Throughout 2024 and early 2025, the Maasai people of 
                                the Ngorongoro Conservation Area have intensified their 
                                peaceful protests against government-led relocation plans. 
                                The community argues that these "conservation" efforts 
                                are displacing indigenous families from their ancestral 
                                lands. International human rights organizations have 
                                joined the call to protect the traditional lifestyle of 
                                the Maasai.
                            </p>
                        </div>
                        <img
                            src={first}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
                {/* Second Press */}
                <div>
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full">
                        <div className="flex justify-center mt-10 md:mt-10">
                          <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-3">
                            <span className="text-red-600">S</span>econd Press Release
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                          </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-10 gap-8">
                        <img
                            src={second}
                            className="rounded-2xl"
                        />
                        <div>
                            <h2 className="text-4xl font-bold first-letter:text-red-600 text-[#004540]">Climate Resilience: Adapting Traditional Herding</h2>
                            <p className="text-2xl font-medium py-10 text-[#004540]">
                                Facing unpredictable weather patterns in 2025, Maasai 
                                elders and youth are collaborating with environmental 
                                NGOs to implement solar-powered water boreholes. This 
                                initiative aims to save their precious livestock—the 
                                backbone of their economy—from the severe dry seasons 
                                that have recently hit the East African plains.
                            </p>
                        </div>
                    </div> 
                </div>
                {/* third press */}
                <div>
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full">
                        <div className="flex justify-center mt-10 md:mt-10">
                          <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-3">
                            <span className="text-red-600">T</span>hird Press Release
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                          </h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-10 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold first-letter:text-red-600 text-[#004540]">Global Recognition for Maasai Handicrafts</h2>
                            <p className="text-2xl font-medium py-10 text-[#004540]">
                                In a major boost for the local economy, Maasai women's 
                                cooperatives have achieved international fair-trade status 
                                in late 2024. This allows their world-renowned intricate 
                                beadwork to be sold directly to global fashion markets, 
                                ensuring fair wages and financial independence for 
                                thousands of women.
                            </p>
                        </div>
                        <img
                            src={third}
                            className="rounded-2xl w-full h-3/4"
                        />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default News;