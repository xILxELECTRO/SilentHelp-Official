import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

// Metadatos profesionales para SilentHelp
export const metadata: Metadata = {
  title: "SilentHelp | Traducción LSM con IA",
  description: "Proyecto académico del ITGAM enfocado en la inclusión de la comunidad sorda mediante Inteligencia Artificial y Visión por Computadora.",
  keywords: ["LSM", "Lengua de Señas Mexicana", "IA", "Inclusión", "ITGAM", "Ingeniería del Conocimiento"],
  icons: {
    icon: '/SLHP.png', // Esto cambia el logo de la pestaña del navegador
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen antialiased bg-[#faf8fc] text-[#1a202c] overflow-x-hidden w-full max-w-[100vw]`}>
        
        {/* Fondo decorativo sutil */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: `radial-gradient(#9333ea 0.5px, transparent 0.5px)`,
              backgroundSize: '30px 30px'
            }}
          />
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/20 rounded-full blur-[120px]" />
        </div>

        {/* Efecto de luz que sigue al mouse */}
        <Spotlight />

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}