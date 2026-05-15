"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaggeredMenu from './StaggeredMenu'; // Asegúrate de que la ruta coincida con tu archivo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar si el usuario ha bajado en la página y cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces oficiales que programamos para tu menú
  const menuLinks = [
    { label: 'Inicio', link: '/' },
    { label: 'Pilares', link: '/#beneficios' },
    { label: 'Sobre nosotros', link: '/about' },
    { label: 'Contáctanos', link: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-[#faf8fc]/90 backdrop-blur-md border-b border-purple-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      {/* justify-between empuja el logo a la izquierda y el menú a la derecha */}
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* === LADO IZQUIERDO: LOGO CON RECUADRO NEÓN REINTEGRADO === */}
        <Link 
          href="/" 
          /* Agregamos el recuadro neón con border, sombra (shadow) y fondo sutil */
          className="flex items-center gap-3 group px-4 py-2.5 rounded-2xl border border-purple-500/30 bg-white/60 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-sm transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:scale-105">
            <Image 
              src="/SLHP.png" 
              alt="Logo SilentHelp" 
              fill
              className="object-contain"
            />
          </div>
          {/* Ajuste leve de tamaño de texto para celular y PC */}
          <span className="font-black text-lg md:text-xl text-[#1a202c] tracking-tight">
            Silent<span className="text-purple-600">Help</span>
          </span>
        </Link>

        {/* === LADO DERECHO: MENÚ === */}
        <div className="flex items-center">
           <StaggeredMenu items={menuLinks} />
        </div>

      </div>
    </nav>
  );
}