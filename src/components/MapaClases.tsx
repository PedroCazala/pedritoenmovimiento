'use client';

import { useState } from 'react';
import InteractiveMap from './InteractiveMap';
import Image from 'next/image';
import { locations } from '../data/locations';

export default function MapaClases() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleCardClick = (locationId: string) => {
    setSelectedLocation(locationId);
    
    // Abrir info window del mapa si la función global está disponible
    if ((window as any).openMapInfoWindow) {
        (window as any).openMapInfoWindow(locationId);
    }
  };

  const handleWhatsAppClick = (location?: string) => {
    const message = location 
      ? `Hola%20Pedrito,%20quiero%20sumarme%20a%20la%20clase%20de%20calistenia%20en%20${encodeURIComponent(location)}`
      : 'Hola%20Pedrito,%20quiero%20sumarme%20a%20una%20clase';
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Mapa de clases
        </h2>

        {/* Mapa interactivo */}
        <div className="mb-12">
          <InteractiveMap onLocationSelect={setSelectedLocation} />
        </div>

        {/* Mapa placeholder para selección */}
        <div className="relative bg-gray-200 rounded-lg h-64 mb-12 hidden flex items-center justify-center relative overflow-hidden">
          <div className="text-gray-500 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg">Mapa interactivo de clases</p>
            <p className="text-sm mt-2">Parque Centenario, Plaza Italia, Parque Lezama</p>
          </div>
          
          {/* Marcadores simulados */}
          {locations.map((location, index) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location.id)}
              className={`absolute w-4 h-4 rounded-full transition-all duration-300 ${
                selectedLocation === location.id 
                  ? 'scale-150' 
                  : 'hover:scale-125'
              }`}
              style={{ 
                backgroundColor: selectedLocation === location.id ? 'var(--primary)' : '#dc2626',
                top: `${30 + index * 25}%`,
                left: `${20 + index * 30}%`
              }}
              aria-label={`Seleccionar ${location.name}`}
            />
          ))}
        </div>

        {/* Lista de clases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() => handleCardClick(location.id)}
              className={`w-full rounded-lg p-6 border-2 transition-all duration-300 cursor-pointer min-h-[400px] flex flex-col ${
                selectedLocation === location.id 
                  ? 'shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`} style={{ 
                borderColor: selectedLocation === location.id ? 'var(--primary)' : undefined,
                backgroundColor: selectedLocation === location.id ? 'rgba(255, 85, 0, 0.05)' : undefined
              }}
            >
              {/* Imagen del parque */}
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={location.img}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {location.name}
              </h3>
              
              <div className="space-y-4 text-gray-600 mb-4 flex-grow">
                {location.schedules.map((schedule, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--primary)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {schedule.days}
                    </div>
                    <div className="flex items-center ml-7">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--primary)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {schedule.time.join(' - ')}
                    </div>
                    {index < location.schedules.length - 1 && (
                      <hr className="my-3 border-gray-300" />
                    )}
                  </div>
                ))}
                
                <p className="text-sm italic">{location.description}</p>
              </div>
              
              <button
                onClick={() => handleWhatsAppClick(location.name)}
                className="w-full text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Sumarme acá
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
