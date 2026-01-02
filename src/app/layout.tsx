import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata = {
  title: "Clases de Calistenia | Pedrito en Movimiento",
  description:
    "Entrenamientos de calistenia al aire libre en Buenos Aires. Sumate a una clase. Todos los niveles. CABA, Argentina.",

  openGraph: {
    title: "Clases de Calistenia | Pedrito en Movimiento",
    description:
      "Entrenamientos de fuerza y movilidad en parques. Todos los niveles.",
    url: "https://pedritoenmovimiento.com.ar",
    siteName: "Pedrito en Movimiento",
    images: [
      {
        url: "https://pedritoenmovimiento.com.ar/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
