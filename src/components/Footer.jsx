import React from 'react'
import { Link } from 'react-router-dom'
import LogoSvg from "./Svg/LogoSvg";
import facebook from "../assets/icons/Facebook.svg"
import instagram from "../assets/icons/Instagram.svg"
import linkedin from "../assets/icons/Linkedin.svg"
import whatsapp from "../assets/icons/Whatsapp.svg"

const Footer = () => {
  return (
    <footer className='font-poppins w-full bg-gris'>

      {/* SECCIÓN SUPERIOR */}
      <div className="
        screen border-b border-black
        flex flex-col md:flex-row
        items-center md:items-start
        justify-center md:justify-between
        gap-10 md:gap-0
        py-10 md:py-0
      ">
        
        {/* LOGO */}
        <div className="flex flex-col justify-center items-center">
          <LogoSvg colorPrimary="#000" colorSecondary="#000" width="300" height="300" />
        </div>

        {/* MENÚ CENTRAL */}
        <div className="flex flex-col md:flex-row gap-5">

          <div className="py-8 md:py-16 bg-transparent">
            <nav className="flex flex-col w-[220px] text-start space-y-2 text-[14px]">
              <Link href="/servicios" className="border-b pb-2 font-bold border-black/50">Inicio</Link>
              <Link href="/proyectos" className="border-b pb-2 font-bold border-black/50">Consulta en Línea</Link>
              <Link href="/contacto" className="pb-2 font-bold">Contáctanos</Link>
            </nav>
          </div>

          <div className="py-8 md:py-16 bg-transparent">
            <nav className="flex flex-col w-[220px] text-start space-y-2 text-[14px]">
              <Link href="/servicios" className="border-b pb-2 font-bold border-black/50">Inicio</Link>
              <Link href="/proyectos" className="border-b pb-2 text-black/50">Compraventa</Link>
              <Link href="/contacto" className="border-b pb-2 text-black/50">Arrendamiento</Link>
              <Link href="/contacto" className="border-b pb-2 text-black/50">Legalizaciones, Certificaciones</Link>
              <Link href="/contacto" className="border-b pb-2 text-black/50">Constitución de Empresas</Link>
              <Link href="/contacto" className="pb-2 text-black/50">Otros servicios notariales</Link>
            </nav>
          </div>

        </div>

        {/* LEGAL */}
        <div className="
          flex flex-col items-center md:items-start
          py-8 md:py-16 bg-transparent
        ">
          <nav className="flex flex-col w-[220px] text-start space-y-2 text-[14px]">
            <Link href="/servicios" className="border-b pb-2 font-bold border-black/50">Legal</Link>
            <Link href="/proyectos" className="border-b pb-2 text-black/50">Términos y condiciones</Link>
            <Link href="/contacto" className="pb-2 text-black/50">Libro de reclamaciones</Link>
          </nav>
        </div>

      </div>

      {/* SECCIÓN INFERIOR */}
      <div className="
        screen 
        flex flex-col md:flex-row
        justify-between items-center 
        gap-10 md:gap-0
        py-[60px]
      ">
        
        {/* REDES */}
        <div className='flex justify-center items-center gap-3'>
          <img className='w-[59px] h-[59px]' src={facebook} alt="Facebook" />
          <img className='w-[59px] h-[59px]' src={instagram} alt="Instagram" />
          <img className='w-[59px] h-[59px]' src={linkedin} alt="Linkedin" />
          <img className='w-[59px] h-[59px]' src={whatsapp} alt="Whatsapp" />
        </div>

        {/* UBICACIÓN */}
        <div className='flex flex-col text-center md:text-start'>
          <span className='font-bold text-[14px]'>Ubicación:</span>
          <span className='text-[14px] text-black/50'>Av. César Vallejo 290 - Lince</span>
        </div>

        {/* HORARIO */}
        <div className='flex flex-col text-center md:text-start'>
          <span className='font-bold text-[14px]'>Horario de atención:</span>
          <span className='text-[14px] text-black/50'>
            Lunes a viernes de 8:30 a.m. a 6:00 p.m.<br />
            Sábados de 9:00 a.m. a 1:00 p.m.
          </span>
        </div>
      </div>

      {/* COPYRIGHT */}
    <div className="w-full h-[50px] bg-[#1c1c1c] flex items-center justify-center px-4 text-centermd:justify-center">
        <span className="text-white font-book text-[12px] md:text-[14px]">
            Copyright © 2025 - Notaría Alejandro Ramírez Carranza
        </span>
    </div>

    </footer>
  )
}

export default Footer
