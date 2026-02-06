import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
      
          <div className="relative">
            <div className="relative z-10 w-11/12 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559302995-f09f6117493e" 
                alt="Solar installation technician at work" 
                className="w-full shadow-2xl hover:grayscale-0 transition-all duration-500 grayscale-[20%]"
                loading="lazy"
              />
            </div>
        
            <div className="absolute -bottom-10 -right-0 z-20 bg-yellow-500 p-10 hidden md:block shadow-xl transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-5xl font-black text-gray-900">15+</h3>
              <p className="text-gray-900 font-bold uppercase tracking-tighter text-sm">Жилийн туршлага</p>
            </div>
            <div className="absolute top-10 -right-10 w-full h-full border-[12px] border-gray-100 -z-0"></div>
          </div>

          <div className="space-y-8">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 font-black uppercase text-xs tracking-[0.3em] animate-fade-in">
              Бидний тухай
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight animate-fade-in-down">
              Бид 2010 оноос хойш <span className="text-yellow-500">Нарны Эрчим Хүчний</span> салбарт тэргүүлж байна
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed animate-fade-in-up">
              Монгол орны эрс тэс уур амьсгалд тохирсон, дэлхийд хүлээн зөвшөөрөгдсөн технологийг бид нэвтрүүлдэг. Манай баг хамт олон таны цахилгааны зардлыг хамгийн бага зардлаар шийдэхэд бэлэн байна.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl text-yellow-500" aria-hidden>✔</div>
                <div>
                  <h4 className="font-bold text-gray-900">Бүрэн автомат</h4>
                  <p className="text-sm text-gray-500">Ухаалаг хяналтын систем</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl text-yellow-500" aria-hidden>✔</div>
                <div>
                  <h4 className="font-bold text-gray-900">Найдвартай</h4>
                  <p className="text-sm text-gray-500">25 жилийн баталгаа</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="bg-white border-gray-200 border text-gray-900 px-8 py-3 rounded-md font-bold uppercase tracking-wider transition duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 inline-block">
              Илүү ихийг мэдэх
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
            <Link href="/about" className="bg-gray-900 text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider transition duration-300 hover:bg-yellow-500 hover:text-gray-900 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 inline-block">
              Илүү ихийг мэдэх
            </Link>
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.7s ease-out 0.1s forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;