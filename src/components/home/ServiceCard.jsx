import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service, onLearnMore }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  return (
    <div 
      className="group relative bg-white overflow-hidden shadow-lg hover:shadow-2xl border-b-4 border-transparent hover:border-yellow-500 transition-all duration-500 transform hover:-translate-y-2"
      role="article"
      aria-label={`${service.title} service card`}
    >
 
      <div className="h-64 overflow-hidden bg-gray-200 relative">
        <img 
          src={service.img} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          alt={service.title} 
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}
      </div>

 
      <div className="p-10 relative">
     
        <div className="absolute -top-12 left-10 w-24 h-24 bg-yellow-500 flex items-center justify-center text-4xl shadow-lg border-8 border-white transform transition-transform duration-300 group-hover:scale-110">
          {service.icon}
        </div>

        <div className="pt-8">
          <h3 className="text-2xl font-black mb-4 text-gray-900 uppercase italic tracking-tighter line-clamp-2">
            {service.title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3 text-sm h-20">
            {service.desc}
          </p>

          <Link
            href="/services"
            onClick={() => onLearnMore && onLearnMore(service)}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition duration-300 text-gray-900 group-hover:text-yellow-600 focus:outline-none"
            aria-label={`Learn more about ${service.title}`}
          >
            Дэлгэрэнгүй <span className="text-xl transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
