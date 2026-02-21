import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Quote } from "lucide-react";

// images
import bg from '../../assets/HaritageIMG/haritageBG.png';
import garvay from '../../assets/HaritageIMG/Garvey.jpg';
import dancing from '../../assets/HaritageIMG/dancing men.jpg';
import women from '../../assets/HaritageIMG/women.jpg';
import men from '../../assets/HaritageIMG/menGroup.jpg';
import womenGroup from '../../assets/HaritageIMG/womenGroup.jpg';
import dancingMen from '../../assets/HaritageIMG/dancingMen.jpg';
import card1 from '../../assets/HaritageIMG/card1.png';
import card2 from '../../assets/HaritageIMG/card2.jpg';
import card3 from '../../assets/HaritageIMG/card3.png';



function CultureHaritage(){
    return(
        <>
            <Header/>
            <section className="py-20">
                <div
                  className="relative min-h-[60vh] md:min-h-screen w-full flex flex-col overflow-hidden"
                  style={{
                    backgroundImage: `url(${bg})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                    <div className="absolute inset-0 bg-white/50" />

                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full pt-20">
                        <div className="flex justify-center mt-10 md:mt-10">
                          <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-2">
                            <span className="text-red-600">C</span>ulture Heritage
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                          </h3>
                        </div>

                        <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
                          <h1 className="text-4xl md:text-6xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                            <span className="text-red-600">P</span>reserving a legecy while 
                            <br className="hidden md:block" />
                            <span className="md:mt-2 inline-block">adopting to modern life</span>
                          </h1>
                    
                          <div className="mt-6 w-48 md:w-96 h-1.5 md:h-2 bg-red-600"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20">
                <div className='px-6 md:px-16 py-10'>
                    <h3 className='text-xl md:text-3xl flex items-start gap-4 text-[#004540] font-medium leading-relaxed'>
                        <Quote 
                            className='text-red-600 shrink-0 rotate-180 fill-red-600' 
                            size={32} 
                            strokeWidth={3} 
                        /> 
                        
                        <span>
                            A people without the knowledge of their past history, origin and culture
                            is like a tree without roots.
                        </span>
                    </h3>
                </div>
                <div className="flex pb-20">
                  {/* decoratiove div */}
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                  <h2 className="text-4xl font-medium text-[#004540] first-letter:text-red-600">Marcus Garvey</h2>
                  <div className="mt-4 w-1/8 h-1.5 md:h-1 bg-red-600 mx-auto"/>
                </div>

                <div className="grid grid-cols-2 max-w-8xl gap-2 px-10">
                    <div>
                        <p className="text-3xl font-medium text-[#004540] py-10">
                            Maasai people represent one of the most
                            fascinating and resilient indigenous cultures in
                            the world. Known for their vibrant clothing, 
                            deeprooted traditions, and unique pastoral lifestyle,
                            the Maasai people live primarily in Tanzania and
                            Kenya. For centuries, they have maintained a
                            distinct culture, despite pressures from
                            modernization, urbanization, and economic
                            changes
                        </p>
                    </div>
                  <img
                    src={garvay}
                    className="rounded-2xl"
                  />
                </div>
            </section>


            <section className="py-20">
                <div className="grid grid-cols-2 px-10 gap-4">
                    <div className="bg-[#004540] drop-shadow-2xl rounded-2xl shadow-[#004540]">
                        <h2 className="text-4xl font-bold first-letter:text-red-600 text-[#fffa81] p-6">Social Structure and the Roles of Men and Women</h2>
                        <p className="text-2xl text-[#fffa81] p-6">
                            Maasai men have a unique social structure,
                            grouping individuals by age for a series of life
                            stages and responsibilities. The two most
                            significant groups are the moran, or warriors,
                            and the elders. The moran stage, usually from
                            the late teens to early thirties, involves rites of
                            passage, training in warrior skills, and gaining
                            status within the community. Once moran
                            have fulfilled their duties and achieved a
                            certain age, they transition to the elder stage,
                            where they assume more prominent roles in
                            decision-making and community guidance.
                        </p>
                        <p className="text-2xl text-[#fffa81] p-6">
                            Polygamy is a customary practice among the
                            Maasai people, where men may marry multiple
                            wives and often young girls decades younger.
                            This tradition serves both cultural and
                            practical purposes within the community.
                            Marriages are often arranged, with cattle as
                            part of the dowry, symbolizing wealth and
                            strengthening familial alliances. However,
                            polygamy faces scrutiny today, as
                            modernization and legal frameworks challenge
                            traditional practices across East Africa.
                        </p>
                        <p className="text-2xl text-[#fffa81] p-6">
                            For Maasai women, their roles are traditionally
                            defined by domestic responsibilities, childrearing, and supporting the family in herding
                            and household management.
                        </p>
                    </div>
                    <img
                        src={dancing}
                        className="h-full w-full rounded-2xl"
                    />
                </div>
                
                <div className="py-10">
                    <img
                        src={women}
                        className="w-full h-140"
                    />
                    <div className="px-10 bg-[#004540]">
                        <h2 className="text-4xl first-letter:text-red-600 text-[#fffa81] pt-8">Dress and Ornamentation</h2>
                        <div className="py-6">
                            <p className="text-3xl text-[#fffa81]">
                                One of the most recognizable aspects of Maasai culture is their traditional dress and
                                ornamentation. The Maasai wear distinctive shúkà, which are bright-colored robes usually in
                                red, blue, or purple. The color red holds particular significance, symbolizing bravery, strength,
                                and unity. The shúkà is typically adorned with beadwork and other accessories that carry
                                cultural significance.
                            </p>
                            <p className="text-3xl text-[#fffa81]">
                                Beadwork is another central element of Maasai attire, with intricate designs that convey
                                messages about the wearer’s status, age, and even marital situation. Beads are arranged in
                                specific patterns and colors, each color representing different aspects of Maasai life—white for
                                peace and purity, red for bravery, blue for the sky, and so on. Both men and women wear beaded
                                necklaces, bracelets, and earrings, though women’s jewelry is often more elaborate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-20">
                <div className="grid grid-cols-2 px-10 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-[#004540] first-letter:text-red-600 pb-10">Beliefs and Spirituality</h2>
                        <p className="text-3xl font-semibold text-[#004540] ">
                            The Maasai have a monotheistic belief system
                            centered on Enkai, a deity associated with rain,
                            fertility, and protection. Enkai is said to reside on
                            Mount Kilimanjaro and other significant
                            landmarks, and his blessings are sought in rituals
                            and ceremonies. Many Maasai ceremonies, such
                            as those involving rainmaking or healing, are
                            conducted by a spiritual leader known as the
                            laibon. The laibon serves as an intermediary
                            between the people and Enkai, offering blessings
                            and guidance. In addition to their traditional
                            beliefs, most Maasai are also practicing Christians
                            or Moslems.
                        </p>
                    </div>
                    <img
                        src={men}
                        className="w-full rounded-2xl h-150"
                    />
                </div>
                <div className="grid grid-cols-2 px-10 gap-6 pt-16">
                    <img
                        src={womenGroup}
                        className="rounded-2xl h-full"
                    />
                    <div className="bg-[#004540] p-6 rounded-2xl">
                        <h2 className="text-4xl first-letter:text-red-600 font-medium text-[#fffa81]">Traditional Rites and Ceremonies</h2>
                        <p className="text-2xl font-medium text-[#fffa81] py-6">
                            The Maasai are known for their elaborate rites
                            of passage, particularly those that mark
                            transitions in life stages. Circumcision is one
                            of the most significant rituals for young Maasai
                            boys, as it represents their initiation into
                            manhood. It is a public ceremony, often
                            accompanied by singing and dancing, where
                            the boys demonstrate bravery and resilience.
                        </p>
                        <p className="text-2xl font-medium text-[#fffa81] py-6">
                            Maasai weddings are also unique, with
                            ceremonies often lasting several days and
                            involving community-wide celebrations.
                            During a wedding, cows are given to the girl’s
                            family as part of the dowry, symbolizing the
                            union between families and the continuity of
                            the Maasai pastoral legacy. The bride is
                            adorned with elaborate beaded jewelry, and
                            the entire event emphasizes the importance
                            of family and community support.
                        </p>
                    </div>
                </div>
                <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-b from-white from-50% via-[#004540] via-50% to-[#004540] py-10">
                                
                    <div className="max-w-6xl w-full px-6">

                        <img
                          src={dancingMen}
                          alt="Maasai Culture"
                          className="w-full h-[70vh] object-cover rounded-2xl shadow-xl"
                        />

                    </div>
                </div>
            </section>


            <section>
                <div className="bg-[#004540] px-20 pb-10">
                    <h2 className="text-4xl text-[#fffa81] first-letter:text-red-600 text-center font-bold py-4">
                        Dance and Music
                    </h2>
                    <p className="text-2xl font-medium text-[#fffa81]">
                        Dance and music play a significant role in Maasai culture, used not only for entertainment
                        but also as a medium for storytelling, education, and spiritual expression. The Maasai have
                        distinct forms of dance, such as the jumping dance (adumu) performed by moran as a
                        demonstration of strength and stamina. Adumu involves men taking turns to jump as high
                        as possible in a circle, with each jump symbolizing power and vitality.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-6 lg:p-20">
                    <div className="relative overflow-hidden rounded-2xl group">
                      <div className="absolute inset-0 bg-gray-600 opacity-70 mix-blend-multiply pointer-events-none z-10"></div>

                      <img
                        src={card1}
                        className="w-full h-full object-cover"
                        alt="Culture Heritage"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl group">
                      <div className="absolute inset-0 bg-gray-600 opacity-70 mix-blend-multiply pointer-events-none z-10"></div>

                      <img
                        src={card2}
                        className="w-full h-full object-cover"
                        alt="Culture Heritage"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl group">
                      <div className="absolute inset-0 bg-gray-600 opacity-70 mix-blend-multiply pointer-events-none z-10"></div>

                      <img
                        src={card3}
                        className="w-full h-full object-cover"
                        alt="Culture Heritage"
                      />
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
};

export default CultureHaritage;