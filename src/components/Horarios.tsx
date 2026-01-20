"use client";

import { getSchedulesByDay } from "@/data/schedules";
import { WhatsAppPrimaryButton, InstagramPrimaryButton } from "./buttons";

export default function Horarios() {
    const schedulesByDay = getSchedulesByDay();
    const days = Object.keys(schedulesByDay);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
                    Horarios de Clases
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {days.map((day) => (
                        <div
                            key={day}
                            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                                    style={{
                                        backgroundColor: "var(--primary)",
                                    }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                                    {day}
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {schedulesByDay[day].map((schedule) => (
                                    <div
                                        key={schedule.id}
                                        className={`p-3 rounded-lg border ${
                                            schedule.active
                                                ? "bg-white border-green-200"
                                                : "bg-gray-100 border-gray-200 opacity-60"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex-1">
                                                <div className="flex items-center text-sm font-medium text-gray-900 mb-1">
                                                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {schedule.time}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600 mb-1">
                                                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {schedule.location}
                                                </div>
                                                {schedule.level && (
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <svg className="w-3 h-3 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                        {schedule.level}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="ml-2">
                                                {schedule.active ? (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Activo
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                                        Próximamente
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    ¿Preguntas sobre las clases?
                </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Si tenés dudas sobre el nivel, los requisitos o cómo prepararte para la primera clase, 
                        escribime, reservamos una clase y te ayudo a empezar con todo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <WhatsAppPrimaryButton />
                        <InstagramPrimaryButton />
                    </div>
                </div>

                {/* Notas importantes */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-100">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Puntualidad</h4>
                        <p className="text-sm text-gray-600">
                            Las clases comienzan puntuales. Llegá 5 minutos antes.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-100">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Grupos Reducidos</h4>
                        <p className="text-sm text-gray-600">
                            Atención mas personalizada.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-purple-100">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trae tu Equipo</h4>
                        <p className="text-sm text-gray-600">
                            Colchoneta (opcional) y botella de agua. El resto lo proveo yo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
