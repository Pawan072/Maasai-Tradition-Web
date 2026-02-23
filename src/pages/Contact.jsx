import Header from "../components/Header";
import Footer from "../components/Footer";


import bg from '../assets/ContactIMG/Contact.jpg';


const Contact = () => {
    return(
        <>
            <Header/>
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
                    <div className="absolute inset-0 bg-white/40"></div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Contact;