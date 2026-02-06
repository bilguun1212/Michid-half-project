import Link from 'next/link';

const Hero = () => (
  <section className="relative h-screen w-full flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom" 
        alt="Solar panels background - sustainable energy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-3xl space-y-8">
        <div className="inline-block px-4 py-1 border-l-4 border-yellow-500 bg-white/10 backdrop-blur-md text-yellow-500 font-bold tracking-widest uppercase animate-slide-in-from-left">
          Сэргээгдэх эрчим хүчний тэргүүлэгч
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] animate-slide-in-from-down">
          Цэвэр энергийг <br /> <span className="text-yellow-500">Таны төлөө</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed animate-fade-in-delayed">
          Бид хамгийн сүүлийн үеийн технологиор таны цахилгааны зардлыг 100% хүртэл хэмнэх нарны системийг санал болгож байна.
        </p>
        <div className="flex flex-wrap gap-5 animate-slide-in-from-up">
          <Link href="/about" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold uppercase tracking-wider shadow-md transition duration-300 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 inline-block">
            Бидэнтэй нэгдэх
          </Link>
          <Link href="/projects" className="border-2 border-white/30 text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider transition duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white inline-block">
            Манай төслүүд
          </Link>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes slide-in-from-left {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slide-in-from-down {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fade-in-delayed {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slide-in-from-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-slide-in-from-left {
        animation: slide-in-from-left 0.7s ease-out forwards;
      }
      .animate-slide-in-from-down {
        animation: slide-in-from-down 0.8s ease-out 0.2s forwards;
        opacity: 0;
      }
      .animate-fade-in-delayed {
        animation: fade-in-delayed 0.8s ease-out 0.4s forwards;
        opacity: 0;
      }
      .animate-slide-in-from-up {
        animation: slide-in-from-up 0.8s ease-out 0.6s forwards;
        opacity: 0;
      }
    `}</style>
  </section>
);

export default Hero;