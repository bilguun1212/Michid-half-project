import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h5 className="text-yellow-500 font-black uppercase tracking-[0.3em]">Үнийн санал авах</h5>
            <h2 className="text-5xl font-black leading-tight italic">Таны төсөлд тохирох <br/> шийдлийг гаргаж өгье</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Манай инженерүүд таны хэрэглээнд тулгуурлан хамгийн оновчтой, эдийн засгийн хэмнэлттэй нарны системийг тооцоолж өгөх болно.
            </p>
            <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center text-gray-900 text-3xl font-black italic">!</div>
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tighter">Шуурхай зөвлөгөө</h4>
                <p className="text-yellow-500 font-black text-2xl">+976 9605 XXXX</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-16 shadow-2xl relative">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Яагаад MICHID SOLAR сонгох вэ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-500 font-black text-xl">✓</span>
                    <span className="text-gray-700"><strong>Бүрэн гарцын баталгаа:</strong> 25 жилийн сүлжээний баталгаа</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-500 font-black text-xl">✓</span>
                    <span className="text-gray-700"><strong>Мэргэжлийн баг:</strong> 15+ жилийн туршлага</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-500 font-black text-xl">✓</span>
                    <span className="text-gray-700"><strong>24/7 Дэмжлэг:</strong> Техникийн туслалцаа үргэлж боломжтой</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-yellow-500 font-black text-xl">✓</span>
                    <span className="text-gray-700"><strong>Үнэлгээтэй технологи:</strong> Дэлхийн шилдэг брэндүүд</span>
                  </li>
                </ul>
              </div>
              <Link href="/about" className="bg-yellow-500 text-gray-900 w-full py-5 font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-xl inline-flex items-center justify-center">
                Бидний тухай урагш мэдэхүүлэх
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;