import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Ахуйн нарны систем",
      icon: "🏠",
      description: "Амины орон сууц болон зуслангийн байшинд зориулсан шийдэл. Энэхүү систем нь таны цахилгааны зардлыг 100% хүртэл хэмнэх бөгөөд илүүдэл эрчим хүчийг төвийн шугаманд нийлүүлэх боломжтой.",
      features: [
        "25 жилийн баталгаа",
        "Төлөвлөгөө оруулах үйлчилгээ",
        "Өндөр үр ашигтай панель",
        "Ухаалаг хяналтын систем"
      ],
      img: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd"
    },
    {
      id: 2,
      title: "Үйлдвэрлэлийн шийдэл",
      icon: "🏢",
      description: "Томоохон хэмжээний үйлдвэр, аж ахуйн нэгжийн хэрэглээг хангах өндөр хүчин чадалтай станцууд. Бид танай үйлдвэрт зориулсан ТЭЗҮ-г мэргэжлийн түвшинд боловсруулна.",
      features: [
        "Хөгжіл мүү技術",
        "Үйлдвэрийн хэмжээний систем",
        "Шүүх болон урвалын хүмүүжүүлэлт",
        "24/7 техникийн дэмжлэг"
      ],
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1b"
    },
    {
      id: 3,
      title: "Цэнэглэгч & Инвертер",
      icon: "🔋",
      description: "Эрчим хүч хуримтлуулах хамгийн сүүлийн үеийн литиум батерейнууд болон ухаалаг инвертерүүд. Нар байхгүй үед ч таныг эрчим хүчээр найдвартай хангана.",
      features: [
        "Өндөр багтаамж литиум батерей",
        "Эрчим хүчний буфер сүстэм",
        "Intelligénz инвертер",
        "Эрчим хүч хэмнэлтийг хамгийн их болгох"
      ],
      img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Services | MICHID SOLAR</title>
      </Head>

      <Navbar />
      <main className="pt-32 pb-24">
    
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <Link href="/" className="text-yellow-600 hover:text-yellow-500 font-bold mb-8 inline-block">
            ← Нүүр хуудас руу буцах
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Манай Үйлчилгээ</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            MICHID SOLAR нь таны цахилгааны хэрэглээ урвалан олон төрлийн нарны системийг санал болгож байна.
          </p>
        </section>

     
        <section className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div>
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">{service.title}</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Төвлөрлүүлэх:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-yellow-500 font-black mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </section>

     
        <section className="bg-gray-50 py-24 px-6 mt-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">Яагаад MICHID SOLAR сонгох вэ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Мэргэжлийн баг</h3>
                <p className="text-gray-600 text-lg">10 гаруй жилийн туршлагатай инженер, техникч нар таны төслөөр ажиллана.</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Чанартай хавтан</h3>
                <p className="text-gray-600 text-lg">Tier-1 зэрэглэлийн дэлхийн шилдэг брэндүүдийн панель ашигладаг.</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-black text-gray-900 mb-4">24/7 Дэмжлэг</h3>
                <p className="text-gray-600 text-lg">Засвар үйлчилгээ, хяналтын цогц систем үргэлж бэлэн.</p>
              </div>
            </div>
          </div>
        </section>

    
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">Та сонгосон үйлчилгээнд сонирхолтой юу?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Манай инженерүүд таны төслийн бүрэн мэдээллийг авч, хамгийн сүүлийн үеийн технологиор төлөвлөх болно.
          </p>
          <a href="tel:+976" className="bg-yellow-500 text-gray-900 px-10 py-4 font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition inline-block">
            Үнийн санал авах
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
