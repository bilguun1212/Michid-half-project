import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import AboutSection from '../components/home/AboutSection';
import ServiceSection from '../components/home/ServiceSection';
import Projects from '../components/home/Projects';
import Testimonials from '@/components/home/Testimonal';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>MICHID SOLAR | Professional Energy Solutions</title>
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutSection />
        <ServiceSection />
        <Projects />
     
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;