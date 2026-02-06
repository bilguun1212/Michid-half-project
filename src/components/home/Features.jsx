const Features = () => {
  const items = [
    { title: "Мэргэжлийн баг", icon: "👷‍♂️", desc: "10 гаруй жилийн туршлагатай инженерүүд." },
    { title: "Чанартай хавтан", icon: "☀️", desc: "Tier-1 зэрэглэлийн дэлхийн шилдэг брэндүүд." },
    { title: "24/7 Дэмжлэг", icon: "🛠️", desc: "Засвар үйлчилгээ, хяналтын цогц систем." }
  ];

  return (
    <section className="py-0 relative z-20 -mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-0 shadow-2xl overflow-hidden">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`p-12 text-white ${idx % 2 === 0 ? 'bg-gray-900' : 'bg-yellow-500 text-gray-900'} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            role="article"
            aria-label={item.title}
          >
            <div className="text-4xl mb-6" aria-hidden>{item.icon}</div>
            <h3 className="text-2xl font-black mb-4 uppercase">{item.title}</h3>
            <p className="opacity-80 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        div[role="article"] {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Features;