import React from 'react';

const Projects = () => {
  const projects = [
    { title: "Амины орон сууц", category: "Систем суурилуулалт", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d" },
    { title: "Үйлдвэрийн дээвэр", category: "Том хэмжээний төсөл", img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e22" },
    { title: "Хөдөө аж ахуй", category: "Услалтын систем", img: "https://images.unsplash.com/photo-1466611653911-954ffec136ce" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h5 className="text-yellow-600 font-black tracking-widest uppercase mb-4 italic">Хийж гүйцэтгэсэн ажил</h5>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">Бидний хэрэгжүүлсэн шилдэг төслүүд</h2>
          </div>
          <button className="bg-gray-900 text-white px-10 py-5 font-bold hover:bg-yellow-500 transition">Бүх төсөл үзэх</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden h-[450px] cursor-pointer">
              <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-yellow-500 font-bold uppercase text-sm mb-2">{p.category}</p>
                <h4 className="text-2xl font-black text-white">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;