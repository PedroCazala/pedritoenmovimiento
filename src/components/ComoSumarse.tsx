'use client';

import { WhatsAppPrimaryButton, InstagramPrimaryButton } from '@/components/buttons';

export default function ComoSumarse() {

    return (
        <section className="py-10 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
                    Cómo sumarse
                </h2>

                {/* Pasos */}
                <div className="grid md:grid-cols-3 gap-8 mb-15">
                    <div className="text-center">
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}
                            style={{
                                backgroundColor: "var(--primary-green)",
                                color: "white",
                            }}
                        >
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Elegís el lugar
                        </h3>
                        <p className="text-gray-600">
                            Mirá el mapa y elegí el parque o plaza más cercano
                        </p>
                    </div>

                    <div className="text-center">
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}
                            style={{
                                backgroundColor: "var(--primary-green)",
                                color: "white",
                            }}
                        >
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Me escribís
                        </h3>
                        <p className="text-gray-600">
                            Mandame un mensaje por WhatsApp o Instagram
                        </p>
                    </div>

                    <div className="text-center">
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}
                            style={{
                                backgroundColor: "var(--primary-green)",
                                color: "white",
                            }}
                        >
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Venís a entrenar
                        </h3>
                        <p className="text-gray-600">
                            Listo, solo tenés que presentarte en la clase
                        </p>
                    </div>
                </div>

                {/* CTA directo */}
                <div className="text-center">
                    <p className="text-xl text-gray-700 mb-8">
                        ¿Listo para empezar?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppPrimaryButton />
                        <InstagramPrimaryButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
