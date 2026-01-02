'use client';
import Image from 'next/image';

export default function QuienSoy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto placeholder */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/pedrito-en-mov-cuadrado.jpg?alt=media&token=17b75f0a-6c50-4326-9326-6cd08effd3fb"
              alt="Foto de Pedrito"
              width={320}
              height={320}
              className="rounded-full"
            />
            {/* <span className="text-gray-500 text-center px-4">Foto de Pedrito</span> */}
          </div>
          
          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              ¿Quién soy?
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Soy Pedrito, entreno calistenia hace más de 10 años.
              </p>
              
              <p>
                Quiero ayudarte a mejorar en fuerza, movilidad y elongación.
              </p>
              
              <p className="font-semibold text-primary">
                Todos los niveles y edades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
