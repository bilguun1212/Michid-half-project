import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Төв аймаг, 5кВт систем",
      category: "Амины орон сууц",
      description: "Хүн ам олон өрхийн нарны системийг суурилуулсан. Системийн зардлыг 90% хүртэл хэмнэх боломж олгосон.",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
      year: "2023"
    },
    {
      id: 2,
      title: "Эрдэнэт үйлдвэр, Нарны станц",
      category: "Үйлдвэрлэлийн төсөл",
      description: "Өндөр хүчин чадалтай нарны станц суурилуулан үйлдвэрийн хэрэглээний 60% хүргүүлэх боломж олгосон.",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e22",
      year: "2022"
    },
    {
      id: 3,
      title: "Говийн бүс, Услалтын систем",
      category: "Хөдөө аж ахуй",
      description: "Баруун регионы усалгын системийг нарны энергиэр эргүүлэх аж ахуйн төслийг хэрэгжүүлэв.",
      img: "https://images.unsplash.com/photo-1466611653911-954ffec136ce",
      year: "2023"
    },
    {
      id: 4,
      title: "Арвайхээр музей",
      category: "Нийтийн байгууламж",
      description: "Их сургуулийн музейн ахлах зүүлтийн системийг цэвэр энергиэр эргүүлэв.",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e22",
      year: "2021"
    },
    {
      id: 5,
      title: "Сүмбэр хүхэмний хэмжээний өрөө",
      category: "Үйлдвэрлэлийн төсөл",
      description: "Өтлөг компаний цахилгаан хамганалын 70% амин эрчим хүчний системээр эргүүлэв.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1b",
      year: "2022"
    },
    {
      id: 6,
      title: "Сселэнгийн түмэн өрхийн системүүд",
      category: "Амины орон сууц",
      description: "Сселэнгийн түмэн өрхөөр амины нарны системийг өргөн сүлжээтэй хэрэгжүүлэв.",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Projects | MICHID SOLAR</title>
      </Head>

      <Navbar />
      <main className="pt-32 pb-24">
    
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <Link href="/" className="text-yellow-600 hover:text-yellow-500 font-bold mb-8 inline-block">
            ← Нүүр хуудас руу буцах
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Манай Төслүүд</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            MICHID SOLAR-ийн хийж гүйцэтгэсэн амины нэг төслүүд болон үйлдвэрийн байгууламжийн нарны системүүдийн жагсаалт.
          </p>
        </section>

     
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-4 py-2 font-bold text-sm rounded">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-yellow-600 font-bold uppercase text-xs tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

   
        <section className="bg-gray-900 text-white py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16">Бидний Үр Дүнгүүд</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-4">500+</div>
                <p className="text-xl font-bold">Угаагдсан өрхүүд</p>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-4">50+</div>
                <p className="text-xl font-bold">Үйлдвэрлэлийн төслүүд</p>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-4">5000+</div>
                <p className="text-xl font-bold">Суурилуулсан кВт</p>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-4">15+</div>
                <p className="text-xl font-bold">Жилийн туршлага</p>
              </div>
            </div>
          </div>
        </section>

  
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">Дараагийн төсөл доор байх уу?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Манай инженерүүд таны төсөлөө бодож, хамгийн сүүлийн үеийн технологиор хэрэгжүүлэхэд бэлэн.
          </p>
          <a href="tel:+976" className="bg-yellow-500 text-gray-900 px-10 py-4 font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition inline-block">
            Дуудлага хийх
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
