import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us | MICHID SOLAR</title>
      </Head>

      <Navbar />
      <main className="pt-32 pb-24">
   
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <Link href="/" className="text-yellow-600 hover:text-yellow-500 font-bold mb-8 inline-block">
            ← Нүүр хуудас руу буцах
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Бидний тухай</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Бид 2010 оноос хойш Монгол улсад нарны эрчим хүчний шийдлийг хүргэж байсан тэргүүлэгч компани юм.
          </p>
        </section>

     
        <section className="bg-gray-50 py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Манай Утга Зорилго</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Байгаль орчинд ээлтэй, эдийн засгийн хэмнэлттэй эрчим хүчний шийдлийг Монгол улсын өнцөг булан бүрт хүргэнэ. Бид цэвэр энергийг ашиглан хүмүүсийн амьдралын чанарыг сайжруулахыг эрхэмлэнэ.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-yellow-500 font-black text-2xl">15+</span>
                  <div>
                    <p className="font-bold text-gray-900">Жилийн туршлага</p>
                    <p className="text-gray-600">Найдвартай үйлчилгээ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-yellow-500 font-black text-2xl">500+</span>
                  <div>
                    <p className="font-bold text-gray-900">Сэтгэл ханамжтай үйлүүлэгч</p>
                    <p className="text-gray-600">Шинэ энергийн ашигтай байна</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559302995-f09f6117493e" 
                alt="Solar installation team" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">Манай Үндсэн Үнэ Цэн</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Инновац</h3>
                <p className="text-gray-700">
                  Хамгийн сүүлийн үеийн технологи ашигладаг. Бид байнга өргөжүүлж байгаа.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Итгэл</h3>
                <p className="text-gray-700">
                  Үйлүүлэгчдийнхээ итгэлийг олж авахын тулд хамгийн сайн үйлчилгээ өгдөг.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Байгаль орчин</h3>
                <p className="text-gray-700">
                  Цэвэр энергиар ирээдүйг сайжруулахыг зорилдог.
                </p>
              </div>
            </div>
          </div>
        </section>

    
        <section className="bg-gray-900 text-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-black">Хамтран ажиллах хүсэлтэй?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Манай инженерүүд таны нарны тогтолцооны давуу талыг төлөвлөх бөгөөд таны бүх асуультанд хариулахад бэлэн байна.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-bold uppercase tracking-wider transition duration-300 hover:bg-yellow-400 hover:text-gray-900 inline-block">
                  Үйлчилгээний хуудас
                </Link>
                <a href="tel:+976" className="border-2 border-yellow-500 text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider transition duration-300 hover:bg-yellow-500 hover:text-gray-900 inline-block">
                  Дуудлага хийх
                </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
