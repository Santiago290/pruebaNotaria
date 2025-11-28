import { useState } from "react"
import { Link } from "react-router-dom"
import LogoSvg from "./Svg/LogoSvg"

export default function NotaryHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[120px] md:h-[150px] bg-gradient-notaria z-50 flex items-center px-6">
        <div className="screen m-auto flex items-center justify-between h-full">
          <Link to="/" className="flex items-center mx-0 lg:mx-auto">
            <LogoSvg width="170" />
          </Link>
          <button onClick={() => setIsOpen(true)} className="lg:hidden absolute right-6 p-2 text-white text-xl">☰</button>
          <div className="hidden lg:flex items-center gap-10">
            <Link className="text-white text-[17px] font-light hover:text-amber-400 transition">La Notaría</Link>
            <Link className="text-white text-[17px] font-light hover:text-amber-400 transition">Servicios</Link>
            <Link className="text-white text-[17px] font-light hover:text-amber-400 transition">Consultas en Línea</Link>

            <button className="px-4 py-2 bg-beige text-rojo font-bold text-[16px] rounded-full">
              Contáctanos
            </button>
          </div>

          
        </div>
      </nav>

      <div className="h-[120px] md:h-[150px]"></div>

      <div className={` fixed top-0 right-0 w-[70%] h-full bg-gradient-notaria z-[60] p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="text-white text-3xl absolute top-6 right-6" >✕</button>

        <div className="mt-16 space-y-4">
          <Link to="/notaria" onClick={() => setIsOpen(false)}className="block text-white text-lg py-3 border-b border-white/20">
            La Notaría
          </Link>

          <Link to="/servicios" onClick={() => setIsOpen(false)} className="block text-white text-lg py-3 border-b border-white/20">
            Servicios
          </Link>

          <Link to="/consultas" onClick={() => setIsOpen(false)} className="block text-white text-lg py-3 border-b border-white/20">
            Consultas en Línea
          </Link>

          <button className="w-full mt-6 py-3 bg-beige text-rojo font-bold rounded-full text-lg">
            Contáctanos
          </button>
        </div>
      </div>
    </>
  )
}
