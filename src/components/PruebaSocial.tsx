"use client";

import { useState } from "react";
import Image from "next/image";
import {
    testimonials,
    calcularEdad,
    calcularTiempoAlumno,
} from "@/data/testimonials";
import { InstagramPrimaryButton, WhatsAppPrimaryButton } from "./buttons";

export default function PruebaSocial() {
    const [expandedTestimonials, setExpandedTestimonials] = useState<
        Set<string>
    >(new Set());

    const toggleExpanded = (id: string) => {
        const newExpanded = new Set(expandedTestimonials);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedTestimonials(newExpanded);
    };

    const truncateText = (text: string, maxLength: number = 200) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
                    Quienes entrenan conmigo
                </h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-lg p-6 shadow-sm"
                        >
                            <div className="flex items-center mb-4">
                                {testimonial.img ? (
                                    <Image
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                ) : (
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                                        style={{
                                            backgroundColor:
                                                "var(--primary)",
                                        }}
                                    >
                                        {testimonial.name
                                            .charAt(0)
                                            .toUpperCase()}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.birthYear && (
                                            <span>
                                                {calcularEdad(
                                                    testimonial.birthYear
                                                )}{" "}
                                                años •{" "}
                                            </span>
                                        )}
                                        Alumno desde hace{" "}
                                        {testimonial.startDate
                                            ? calcularTiempoAlumno(
                                                  testimonial.startDate
                                              )
                                            : "tiempo desconocido"}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-700 italic">
                                    &ldquo;
                                    {expandedTestimonials.has(
                                        testimonial.id
                                    )
                                        ? testimonial.text
                                        : truncateText(testimonial.text)}
                                    &rdquo;
                                </p>
                                {testimonial.text.length > 200 && (
                                    <button
                                        onClick={() =>
                                            toggleExpanded(testimonial.id)
                                        }
                                        className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        {expandedTestimonials.has(
                                            testimonial.id
                                        )
                                            ? "Leer menos"
                                            : "Leer más"}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contador social */}
                <div className="text-center">
                    <div
                        className="inline-flex items-center text-white px-6 py-3 rounded-full"
                        style={{ backgroundColor: "var(--primary-green)" }}
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {/* <span className="font-semibold text-lg">+{testimonials.length} personas entrenan conmigo</span> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[90vw] mx-auto py-6">
                <WhatsAppPrimaryButton />
                <InstagramPrimaryButton />
            </div>
        </section>
    );
}
