import React, { useState, useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(null);
  const modalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Ахуйн нарны систем",
      desc: "Амины орон сууц болон зуслангийн байшинд зориулсан шийдэл. Энэхүү систем нь таны цахилгааны зардлыг 100% хүртэл хэмнэх бөгөөд илүүдэл эрчим хүчийг төвийн шугаманд нийлүүлэх боломжтой.",
      icon: "🏠",
      img: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd"
    },
    {
      id: 2,
      title: "Үйлдвэрлэлийн шийдэл",
      desc: "Томоохон хэмжээний үйлдвэр, аж ахуйн нэгжийн хэрэглээг хангах өндөр хүчин чадалтай станцууд. Бид танай үйлдвэрт зориулсан ТЭЗҮ-г мэргэжлийн түвшинд боловсруулна.",
      icon: "🏢",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1b"
    },
    {
      id: 3,
      title: "Цэнэглэгч & Инвертер",
      desc: "Эрчим хүч хуримтлуулах хамгийн сүүлийн үеийн литиум батерейнууд болон ухаалаг инвертерүүд. Нар байхгүй үед ч таныг эрчим хүчээр найдвартай хангана.",
      icon: "🔋",
      img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d"
    }
  ];


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveService(null);
      }
    };
    if (activeService) {
      document.addEventListener('keydown', handleKeyDown);
   
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeService]);

  return (
    <section className="py-24 bg-gray-50 px-6 relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h5 className="text-yellow-600 font-black uppercase tracking-[0.3em] mb-4 animate-slide-in-up">Манай үйлчилгээ</h5>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight animate-slide-in-up duration-700">Бид юу санал болгож байна вэ?</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ServiceCard 
              service={service} 
              onLearnMore={setActiveService}
            />
          </div>
        ))}
      </div>

 
      {activeService && (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
    
          <div 
            className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setActiveService(null)}
            aria-hidden="true"
          />
    
          <div 
            ref={modalRef}
            className="relative bg-white max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-fade-in-up rounded-lg overflow-hidden"
          >
        
            <button 
              className="absolute top-4 right-4 text-3xl font-light text-gray-400 hover:text-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2"
              onClick={() => setActiveService(null)}
              aria-label="Close modal"
              title="Close (Press Escape)"
            >
              ✕
            </button>

          
            <div className="space-y-6">
              <div className="text-5xl md:text-6xl">{activeService.icon}</div>
              <h3 
                id="modal-title"
                className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-gray-900"
              >
                {activeService.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {activeService.desc}
              </p>
              
         
              <button 
                onClick={() => setActiveService(null)}
                className="w-full bg-yellow-500 text-gray-900 px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-gray-900 hover:text-white hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-8"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}

  
      <style jsx>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;