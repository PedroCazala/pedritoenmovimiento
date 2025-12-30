'use client';

export default function CTAFinal() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}?text=Hola%20Pedrito,%20quiero%20sumarme%20a%20una%20clase%20de%20calistenia`, '_blank');
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#151d36ff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para empezar?
        </h2>
        
        <p className="text-xl sm:text-2xl text-green-100 mb-12 max-w-2xl mx-auto">
          Transformá tu cuerpo y mente con calistenia al aire libre
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="bg-white text-green-600 hover:bg-gray-100 text-lg sm:text-xl font-bold px-8 sm:px-12 py-4 sm:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          style={{ color: 'var(--primary)' }}
        >
          Sumarme a una clase
        </button>
      </div>
    </section>
  );
}
