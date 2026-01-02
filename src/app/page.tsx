import Hero from '@/components/Hero';
import QuienSoy from '@/components/QuienSoy';
import TipoClases from '@/components/TipoClases';
import MapaClases from '@/components/MapaClases';
import ComoSumarse from '@/components/ComoSumarse';
import PruebaSocial from '@/components/PruebaSocial';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import PruebaSocial2 from '@/components/PruebaSocial2';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuienSoy />
      <MapaClases />
      <ComoSumarse /> 
      <PruebaSocial />
      {/* <PruebaSocial2 /> */}
      <TipoClases />
      <CTAFinal />
      <Footer />
    </div>
  );
}
