import React from 'react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    { title: "Төв аймаг, 5кВт систем", category: "Амины орон сууц", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d" },
    { title: "Эрдэнэт үйлдвэр, Нарны станц", category: "Үйлдвэрлэлийн төсөл", img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e22" },
    { title: "Говийн бүс, Услалтын систем", category: "Хөдөө аж ахуй", img: "https://images.unsplash.com/photo-1466611653911-954ffec136ce" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h5 className="text-yellow-600 font-black tracking-[0.3em] uppercase mb-4 animate-fade-in">Хийж гүйцэтгэсэн ажил</h5>
            <h2 className="text-5xl font-black text-gray-900 leading-tight italic animate-fade-in duration-700">Манай шилдэг <br/> төслүүд</h2>
          </div>
          <Link href="/projects" className="border-2 border-gray-900 px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm transition duration-300 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 inline-block">
            Бүх төсөл үзэх
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden h-[500px] bg-gray-900 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
              role="article"
              aria-label={`Project: ${p.title}`}
            >
              <img 
                src={p.img} 
                className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-50 group-hover:scale-110" 
                alt={`${p.title} - ${p.category}`}
                loading="lazy"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-yellow-500 font-bold uppercase text-xs tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{p.category}</p>
                <h4 className="text-2xl font-black text-white leading-tight mb-4">{p.title}</h4>
                <div className="w-12 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </div>
          ))}
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
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in.duration-700 {
          animation-duration: 0.7s;
          animation-delay: 0.1s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Projects;