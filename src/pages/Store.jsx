import { useState } from "react"; // 1. Import useState
import Header from "../components/Header";
import Footer from "../components/Footer";

// Images
import bg from '../assets/StoreIMG/Store.jpg';
import Dress from '../assets/StoreIMG/Maasai Dress.jpg';
import Earings1 from '../assets/StoreIMG/Maasai Earrings 01.jpg';
import Earings2 from '../assets/StoreIMG/Maasai Earrings 02.jpg';
import Earings3 from '../assets/StoreIMG/Maasai EARRINGS 03.jpg';
import Bracelate from '../assets/StoreIMG/Maasai Hand Bracelets.jpg';
import Rungus from '../assets/StoreIMG/MAASAI RUNGUS.JPG';

const products = [
    {
        id: '#1',
        title: 'Maasai Dress',
        img: Dress,
        price: '7999',
        description: 'Authentic hand-woven Maasai Shuka dress, vibrant and durable.',
        discount: '(0.01% OFF)',
    },
    {
        id: '#2',
        title: 'Earrings',
        img: Earings1,
        price: '199',
        description: 'Traditional beaded earrings handmade by Maasai women.',
        discount: '(0.5% OFF)',
    },
    {
        id: '#3',
        title: 'Earrings',
        img: Earings2,
        price: '200',
        description: 'Intricate pattern beadwork with symbolic tribal colors.',
        discount: '(0.5% OFF)',
    },
    {
        id: '#4',
        title: 'Hand Bracelets',
        img: Bracelate,
        price: '900',
        description: 'Flexible beaded bracelets representing strength and unity.',
        discount: '(0.5% OFF)',
    },
    {
        id: '#5',
        title: 'Earrings',
        img: Earings3,
        price: '250',
        description: 'Elegant drop earrings inspired by the Savannah sunset.',
        discount: '(0.5% OFF)',
    },
    {
        id: '#6',
        title: 'Maasai Rungs',
        img: Rungus,
        price: '1500',
        description: 'Traditional wooden Rungu, carved with precision and care.',
        discount: '(0.5% OFF)',
    },
];

function Store() {
    // 2. State to handle the selected product
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <Header />
            {/* ... Your existing Hero Section remains the same ... */}
            <section className="py-10">
                <div
                  className="relative min-h-screen w-full flex items-center justify-center pt-20"
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                    <div className="absolute inset-0 bg-white/50"/>
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col h-full pt-20">
                      <div className="flex justify-center mt-10 md:mt-10">
                        <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-3">
                          <span className="text-red-600">S</span>tore
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                        </h3>
                      </div>
                      <div className="mb-auto mt-60 md:mb-32 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#004540] leading-[1.2] drop-shadow-sm">
                          <span className="text-red-600">W</span>ear the Spirit of the Savannah: Authentic Artistry from the Heart of Maasai Land. 
                        </h1>
                        <div className="mt-6 lg:w-60 md:w-96 h-1.5 md:h-2 bg-red-600"></div>
                      </div>
                    </div>
                </div>
            </section>

            {/* Product Grid Section */}
            <section className="pb-20">
                <div className="flex justify-center mt-10 md:mt-10">
                    <h3 className="text-3xl md:text-5xl font-bold inline-block text-[#004540] relative pb-3">
                      <span className="text-red-600">O</span>ur Products 
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                    </h3>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-10'>
                    {products.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => setSelectedProduct(product)} // 3. Click to open
                          className="relative w-full h-80 flex flex-col overflow-hidden rounded-2xl bg-[#004540]/20 hover:scale-105 cursor-pointer transition-all duration-500 shadow-xl"
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors" /> 
                            <h2 className='relative z-10 items-center text-center my-auto text-2xl font-bold uppercase text-[#fffa81] drop-shadow-lg'>
                                {product.title}
                            </h2>
                            <p className="relative z-10 text-center mb-5 text-white font-semibold">Click to View Details</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Details Modal Overlay */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
                        
                        {/* Left: Product Image */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto">
                            <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Right: Product Details */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                            <button 
                                onClick={() => setSelectedProduct(null)} // Close button
                                className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-red-600"
                            >✕</button>
                            
                            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">{selectedProduct.id}</span>
                            <h2 className="text-4xl font-bold text-[#004540] mb-4">{selectedProduct.title}</h2>
                            <p className="text-gray-600 text-lg mb-6">{selectedProduct.description}</p>
                            
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-3xl font-bold text-red-600">ksh {selectedProduct.price}</span>
                                <span className="text-sm text-gray-400 italic">Authentic Maasai Craft</span>
                            </div>

                            <button className="bg-[#004540] text-white py-4 px-8 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg">
                                Buy Now / Inquire
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    )
}

export default Store;