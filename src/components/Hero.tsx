'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { handleWhatsAppClickCalistenia } from '@/utils/contacto';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Placeholder images - reemplazar con fotos reales de entrenamiento
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/pedrito-en-mov-cuadrado.jpg?alt=media&token=17b75f0a-6c50-4326-9326-6cd08effd3fb',
    'https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/ayuda-verti-a-aru.jpg?alt=media&token=3b0d3aee-f91a-4723-8134-0c2d327b837d',
    'https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/flexion-a-una-mano-anilla.jpeg?alt=media&token=d4189418-f58a-4df1-8eb3-df09bd09ca5a',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Carousel de fondo */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Entrenamiento calistenia ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
        {/* Overlay para mejorar legibilidad
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.4)' }}
        >
          Clases de calistenia al aire libre
        </h1>
        
        <p 
          className="text-xl sm:text-2xl text-white mb-12 max-w-2xl mx-auto opacity-90"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
        >
          Entrená conmigo y mejorá tu fuerza, movilidad y elongación
        </p>

        {/* CTA Principal */}
        <button
          onClick={() => handleWhatsAppClickCalistenia()}
          className="text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          Sumarme a una clase
        </button>
      </div>

      {/* Indicadores del carousel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`} style={{ 
              backgroundColor: index === currentImageIndex ? 'white' : undefined
            }}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
