import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10">
        <Header />
        <div className="opacity-0 animate-fade-in-up">
          <Hero />
        </div>
        <div className="opacity-0 animate-fade-in-up delay-200">
          <About />
        </div>
        <div className="opacity-0 animate-fade-in-up delay-300">
          <Services />
        </div>
        <div className="opacity-0 animate-fade-in-up delay-400">
          <Skills />
        </div>
        <div className="opacity-0 animate-fade-in-up delay-500">
          <Projects />
        </div>
        <div className="opacity-0 animate-fade-in-up delay-600">
          <Journey />
        </div>
        <Footer />
      </main>
    </>
  )
}




