
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
        <div className="flex flex-col xl:flex-row xl:gap-0 gap-12 py-10 items-center xl:items-start 2xl:justify-between lg:justify-evenly justify-center lg:gap-0 screen border-b border-black ">
            <div className=" flex flex-col justify-center items-center my-auto">
                <LogoSvg colorPrimary="#000" colorSecondary='#000' width='300' height='auto'/>
            </div>
            <div className='flex flex-col xl:flex-row xl:gap-5 gap-12'>
                <div className="bg-transparent">
                    <div>
                        <nav className="flex flex-col w-[220px] text-start space-y-2 text-[14px]">
                            <Link href="/servicios" className="border-b pb-2 font-bold border-black/50 text-center xl:text-start">Inicio</Link>
                            <Link href="/proyectos" className="border-b pb-2 font-bold border-black/50 text-center xl:text-start">Consulta en Línea</Link>
                            <Link href="/contacto" className=" pb-2 font-bold text-center xl:text-start">Contáctanos</Link>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col bg-transparent">
                    <div>
                        <nav className="flex flex-col w-[220px] text-start space-y-2 text-[14px]">
                            <Link href="/servicios" className="border-b pb-2 font-bold border-black/50 text-center xl:text-start">Inicio</Link>
                            <Link href="/proyectos" className="border-b pb-2 text-black/50 text-center xl:text-start">Compraventa</Link>
                            <Link href="/contacto" className="border-b pb-2 text-black/50 text-center xl:text-start">Arrendamiento</Link>
                            <Link href="/contacto" className="border-b pb-2 text-black/50 text-center xl:text-start">Legalizaciones, Certificaciones</Link>
                            <Link href="/contacto" className="border-b pb-2 text-black/50 text-center xl:text-start">Constitución de Empresas</Link>
                            <Link href="/contacto" className="pb-2 text-black/50 text-center xl:text-start">Otros servicios notariales</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start bg-transparent ">
                <div>
                    <nav className="flex flex-col w-[220px] space-y-2 text-start text-[14px]">
                        <Link href="/servicios" className="border-b pb-2 font-bold border-black/50 text-center xl:text-start">Legal</Link>
                        <Link href="/proyectos" className="border-b pb-2 text-black/50 text-center xl:text-start">Términos y condiciones </Link>
                        <Link href="/contacto" className=" pb-2 text-black/50 text-center xl:text-start">Libro de reclamaciones</Link>
                    </nav>
                </div>
            </div>
        </div>
        <div className="mx-auto w-full max-w-[1100px] flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-6 py-10">
            <div className="flex justify-center xl:justify-start items-center gap-3 flex-wrap">
                <img className="w-12 h-12 sm:w-[59px] sm:h-[59px]" src={facebook} alt="Facebook logo" />
                <img className="w-12 h-12 sm:w-[59px] sm:h-[59px]" src={instagram} alt="Instagram logo" />
                <img className="w-12 h-12 sm:w-[59px] sm:h-[59px]" src={linkedin} alt="LinkedIn logo" />
                <img className="w-12 h-12 sm:w-[59px] sm:h-[59px]" src={whatsapp} alt="Whatsapp logo" />
            </div>

            <div className="flex flex-col text-center xl:text-start">
                <span className="font-bold text-[14px]">Ubicación:</span>
                <span className="text-[14px] text-black/50">Av. César Vallejo 290 - Lince</span>
            </div>

            <div className="flex flex-col text-center xl:text-start">
                <span className="font-bold text-[14px]">Horario de atención:</span>
                <span className="text-[14px] text-black/50">
                Lunes a viernes de 8:30 a.m. a 6:00 p.m. <br className="xl:hidden" />
                Sábados de 9:00 a.m. a 1:00 p.m.
                </span>
            </div>
        </div>
        <div className="w-full h-[50px] bg-[#1c1c1c] flex justify-center items-center">
            <span className="text-white font-book text-[10px] smd:text-[14px]">
                Copyright © 2025 - Notaría Alejandro Ramírez Carranza
            </span>
        </div>




    </footer>
  )
}

export default Footer
