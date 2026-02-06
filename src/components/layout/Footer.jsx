import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1D21] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black mb-8 italic focus:outline-none">MICHID<span className="text-yellow-500 font-normal">SOLAR</span></h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Бид байгаль орчинд ээлтэй, эдийн засгийн хэмнэлттэй эрчим хүчний шийдлийг Монгол улсын өнцөг булан бүрт хүргэнэ.
            </p>
            <div className="flex gap-4">
         
               <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500" aria-label="Facebook">f</a>
               <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-yellow-500">Шурхай цэс</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="/about" className="hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1 inline-block">Бидний тухай</Link></li>
              <li><Link href="/services" className="hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1 inline-block">Манай үйлчилгээ</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1 inline-block">Төслүүд</Link></li>
              <li><Link href="/about" className="hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1 inline-block">Холбоо барих</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-yellow-500">Холбоо барих</h4>
            <address className="space-y-6 text-gray-400 not-italic">
              <p className="flex items-start gap-4">📍 <span>Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо</span></p>
              <p className="flex items-center gap-4">📞 <a href="tel:+976" className="hover:text-yellow-500 transition">+976 9605 XXXX</a></p>
              <p className="flex items-center gap-4">📧 <a href="mailto:info@michidsolar.mn" className="hover:text-yellow-500 transition">info@michidsolar.mn</a></p>
            </address>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-yellow-500">Бидний үйл ажиллагаа</h4>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start gap-4">
                <div className="text-yellow-500 font-bold text-2xl min-w-[50px]">15+</div>
                <div>
                  <p className="font-bold text-white">Жилийн туршлага</p>
                  <p className="text-sm">Сүүлийн арван таван жилийн турш үйлчилгээ</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-yellow-500 font-bold text-2xl min-w-[50px]">500+</div>
                <div>
                  <p className="font-bold text-white">Сэтгэл ханамжтай үйлүүлэгч</p>
                  <p className="text-sm">Нарны системээр ажиллаж байна</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>&copy; {currentYear} Michid Solar Energy. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">Үйлчилгээний нөхцөл</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;