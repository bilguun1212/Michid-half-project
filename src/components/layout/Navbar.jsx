import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full fixed top-0 z-[1000] transition-all duration-300">
  
      <div className="hidden lg:flex bg-gray-900 text-gray-300 py-3 px-12 justify-between text-sm border-b border-gray-800">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">📍 Улаанбаатар, Сүхбаатар дүүрэг</span>
          <span className="flex items-center gap-2">📧 info@michidsolar.mn</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-500 transition">Fb</a>
            <a href="#" className="hover:text-yellow-500 transition">In</a>
          </div>
        </div>
      </div>

  
      <nav className={`px-6 lg:px-12 py-4 flex justify-between items-center transition-all ${
        isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent text-white'
      }`}>
        <Link href="/" className="text-3xl font-black tracking-tighter focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">
          MICHID<span className="text-yellow-500">SOLAR</span>
        </Link>

      
        <div className={`hidden lg:flex items-center gap-10 font-bold uppercase text-[13px] tracking-widest ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link href="/" className="hover:text-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">Нүүр</Link>
          <Link href="/about" className="hover:text-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">Бидний тухай</Link>
          <Link href="/services" className="hover:text-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">Үйлчилгээ</Link>
          <Link href="/projects" className="hover:text-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 p-1">Төслүүд</Link>
          <Link href="/about" className="bg-yellow-500 text-gray-900 px-8 py-4 hover:bg-gray-800 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Үнийн санал авах
          </Link>
        </div>

   
        <button
          className={`lg:hidden flex flex-col gap-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

   
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-gray-900/95 backdrop-blur-sm'
        }`}>
          <div className="flex flex-col space-y-0 py-4">
            <Link 
              href="/" 
              className={`px-6 py-4 font-bold uppercase text-sm tracking-widest ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } transition focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              onClick={closeMobileMenu}
            >
              Нүүр
            </Link>
            <Link 
              href="/about" 
              className={`px-6 py-4 font-bold uppercase text-sm tracking-widest ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } transition focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              onClick={closeMobileMenu}
            >
              Бидний тухай
            </Link>
            <Link 
              href="/services" 
              className={`px-6 py-4 font-bold uppercase text-sm tracking-widest ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } transition focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              onClick={closeMobileMenu}
            >
              Үйлчилгээ
            </Link>
            <Link 
              href="/projects" 
              className={`px-6 py-4 font-bold uppercase text-sm tracking-widest ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } transition focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              onClick={closeMobileMenu}
            >
              Төслүүд
            </Link>
            <Link 
              href="/about" 
              className="mx-6 mb-4 bg-yellow-500 text-gray-900 px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-gray-800 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={closeMobileMenu}
            >
              Үнийн санал авах
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;