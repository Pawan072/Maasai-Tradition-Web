import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Quote } from "lucide-react";


// images
import bg from '../../assets/ClimateAdvocacy/climate.jpg';
import flood from '../../assets/ClimateAdvocacy/flood.jpg';
import energy from '../../assets/ClimateAdvocacy/cleanEnergy.png';
import tree from '../../assets/ClimateAdvocacy/plants.png';
import water from '../../assets/ClimateAdvocacy/water.jpg';
import forest from '../../assets/ClimateAdvocacy/forest.jpg';


function Climate () {
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
                          <span className="text-red-600">C</span>limate Advocacy
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                        </h3>
                      </div>
                      <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                          <span className="text-red-600">T</span>urning climate panic into public 
                          <br className="hidden md:block" />
                          <span className="md:mt-2 inline-block">policy—demanding a liveable </span> 
                          <br className="hidden md:block" /> 
                          <span className="md:mt-2 inline-block">future now</span>
                        </h1>
                        <div className="mt-6 w-48 md:w-96 h-1.5 md:h-2 bg-red-600"></div>
                      </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className='px-6 md:px-16 py-10'>
                    <h3 className='text-xl md:text-3xl flex items-start gap-4 text-[#004540] font-medium leading-relaxed'>
                        <Quote 
                            className='text-red-600 shrink-0 rotate-180 fill-red-600' 
                            size={32} 
                            strokeWidth={3} 
                        /> 
                        
                        <span>
                            Climate change is not just a problem for the future. It is impacting us every day, everywhere.
                        </span>
                    </h3>
                </div>
                <div className="flex pb-20">
                  {/* decoratiove div */}
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                  <h2 className="text-4xl font-medium text-[#004540] first-letter:text-red-600">Vandana Shiva</h2>
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                </div>
            </section>
            <section>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 px-10 gap-8">
                  <div>
                    <h2 className="text-3xl font-medium text-[#004540] first-letter:text-red-600 pb-6">Climate Change</h2>
                    <p className="text-2xl text-[#004540]">
                        People around the world have already started to face
                        the devastating consequences of climate change.
                        Shift in weather pattern, drought in some parts and
                        unexpected torrential rainfall in the other parts, heat
                        waves, melting of snow in a fast rate, rising sea level
                        etc. are evident and these have threatened people’s
                        life, hardened livelihood, damaged infrastructures,
                        and destroy the balanced natural system.
                    </p>
                    <p className="text-2xl text-[#004540] py-8">
                        City Shuka, expertise on economic, social, political
                        and technological aspects of climate change
                        mitigation and adaptation, and we provide expert
                        services on climate change policy for sustainable
                        development.
                    </p>
                  </div>
                  <img
                    src={flood}
                    className="rounded-2xl"
                  />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 p-8 gap-8">
                    <img
                        src={energy}
                        className="rounded-2xl h-full w-full"
                    />
                    <div>
                      <h2 className="text-3xl text-[#004540] first-letter:text-red-600 font-medium pb-4">
                        Clean Energy
                      </h2>
                      <p className="text-2xl text-[#004540] pb-4">
                        Our clean energy program focuses on development of sustainable clean energy systems, 
                        improvement of energy efficiency and increase access to affordable, reliable and modern 
                        energy services.
                      </p>
                      <h2 className="text-3xl text-[#004540] font-medium pb-4">
                        Renewable Energy Technologies we cover are:
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-2xl text-[#004540] ml-4">
                        <li>Biogas energy (household and institutional level)</li>
                        <li>Improved cooking stoves</li>
                        <li>Solar PV & solar thermal</li>
                        <li>Waste to energy</li>
                        <li>Biomass power generation</li>
                        <li>Biofuel</li>
                      </ul>
                    </div>
                </div>
            </section>
            <section className="bg-[#004540] py-8">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 px-6 gap-6">
                    <div>
                        <h2 className="text-3xl text-[#fffa81] first-letter:text-red-600 font-medium">Green Growth</h2>
                        <p className="text-2xl text-[#fffa81] py-4">
                            There has been talks and a huge amount of
                            investment has been made on the issue related to
                            green growth / economy and it still requires
                            significant amount of collective efforts to make it
                            realized. From our experiences with policymakers,
                            businesses and civil society in many developing
                            world.
                        </p>
                        <div className="p-8">
                            <ul className="list-disc list-inside space-y-2 text-2xl text-[#fffa81] ml-4">
                                <li>
                                    A ssisting on formulation and implementation of
                                    appropriate plans, policies, strategies,
                                    regulations, and incentives.
                                </li>
                                <li>
                                    Promoting sustainable production and
                                    consumption practices.
                                </li>
                                <li>
                                    Assisting on fair distribution of income and social
                                    standards to enhance poverty reduction, social
                                    well being, better livelihood, inclusive and
                                    accountable society.
                                </li>
                                <li>
                                    Providing necessary training and education to the
                                    concerned parties.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src={tree}
                        className="rounded-2xl w-full h-full"
                    />
                </div>
            </section>
            <section className="py-10">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-10">
                    <img
                        src={water}
                        className="rounded-2xl h-full w-full"
                    />
                    <div>
                        <h2 className="text-3xl text-[#004540] first-letter:text-red-600 font-medium">Clean Water & Sanitation</h2>
                        <p className="text-2xl text-[#004540] py-6">
                            Kenya faces significant challenges in providing safe
                            water and sanitation, with only about 59-73% of
                            households having access to safe drinking water and
                            as few as 29-50% having access to improved
                            sanitation. Major issues include pollution, poor
                            infrastructure, and regional disparities, particularly
                            in rural and arid areas where 9.9 million people rely
                            on contaminated surface water
                        </p>
                        <p className="text-2xl text-[#004540]">
                            Our programs are focused on training officials in
                            climate resilient water services to ensure long term
                            sustainability. Poor sanitation and lack of clean water
                            contribute to high rates of waterborne diseases like
                            cholera, typhoid, and diarrhea, which are major
                            causes of child mortality. Approximately 36 million
                            Kenyans lack access to a safe toilet, and roughly 5
                            million people still practice open defecation.
                        </p>
                        <h2 className="text-3xl text-[#004540] font-medium py-6">Solution</h2>
                        <p className="text-2xl text-[#004540]">
                            Boiling & Filtration: While tap water in some areas is
                            safe for cleaning, it is often not considered safe for
                            drinking directly. Boiling is the most common and
                            recommended method for purification.
                        </p>
                        <p className="text-2xl text-[#004540] pt-6">
                            Chemical Treatment: The use of chlorine or other
                            water treatment products is also advised for
                            households without access to treated water.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 p-10 py-20">
                    <div className="py-4">
                        <h2 className="text-3xl font-medium text-[#004540] first-letter:text-red-600">
                            Forest Restoration
                        </h2>
                        <p className="text-2xl text-[#004540] py-8">
                            While tree cover has reached 12.13%, the actual
                            forest cover is lower, at 8.83%.  Major drivers include
                            agricultural expansion, infrastructure development,
                            illegal logging, and charcoal burning.
                        </p>
                        <p className="text-2xl text-[#004540]">
                            The government aims to achieve 30% tree cover by
                            2032 and has a target to plant 15 billion trees to
                            combat climate change, and City Shuka helps
                            government to achieve this target
                        </p>
                        <p className="text-2xl text-[#004540] py-8">
                            The country faces significant deforestation, losing
                            approximately 12,000 hectares annually due to
                            agriculture, logging, and charcoal production,
                            threatening biodiversity in areas like the Mau Forest
                            and Mount Kenya
                        </p>
                    </div>
                    <img
                      src={forest}
                      className="rounded-2xl"
                    />
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Climate;