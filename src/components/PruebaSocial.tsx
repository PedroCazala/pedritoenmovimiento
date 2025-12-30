'use client';

export default function PruebaSocial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Quienes entrenan conmigo
        </h2>

        {/* Opción 1: Frases de alumnos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{ backgroundColor: 'var(--primary)' }}>
                M
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">María</h4>
                <p className="text-sm text-gray-600">Alumna desde hace 6 meses</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;Nunca pensé que podría hacer mi primera dominada. Pedrito me ayudó paso a paso, con paciencia y técnica.&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{ backgroundColor: 'var(--primary)' }}>
                J
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Juan</h4>
                <p className="text-sm text-gray-600">Alumno desde hace 1 año</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &ldquo;Las clases al aire libre cambiaron completamente mi energía. Mejoré mi fuerza y conocí gente increíble.&rdquo;
            </p>
          </div>
        </div>

        {/* Contador social */}
        <div className="text-center">
          <div className="inline-flex items-center text-white px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--primary-green)' }}>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {/* <span className="font-semibold text-lg">+50 personas entrenan conmigo</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
