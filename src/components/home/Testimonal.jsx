import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white px-6 border-t border-gray-100" aria-label="Client testimonial">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-6xl text-yellow-500 font-serif mb-8 opacity-30 aria-hidden"></div>
        <blockquote className="text-3xl md:text-4xl font-medium text-gray-800 leading-relaxed italic mb-10">
          <p>
            "Бид MICHID SOLAR-аар 10кВт систем суурилуулснаас хойш цахилгааны зардлаа 90% хэмнэж чадлаа. Үйлчилгээ нь маш хурдан бөгөөд найдвартай байсан."
          </p>
        </blockquote>
        <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shadow-lg border-2 border-yellow-500 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="" aria-hidden />
          </div>
          <div className="text-left">
            <h3 className="font-black text-gray-900 uppercase tracking-tighter">Л. Чинбат</h3>
            <p className="text-yellow-600 text-sm font-bold uppercase">Хувийн бизнес эрхлэгч</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        blockquote {
          quotes: '"' '"' ''' ''';
        }
        blockquote::before {
          content: open-quote;
          font-size: 4rem;
          color: #fbbf24;
          opacity: 0.2;
        }
        blockquote::after {
          content: close-quote;
          font-size: 4rem;
          color: #fbbf24;
          opacity: 0.2;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;