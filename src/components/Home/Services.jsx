import React from 'react'
import Cards from '../Cards'
import compraventa from '../../assets/icons/Compraventa.svg'
import arrendamiento from '../../assets/icons/Arrendamiento.svg'
import matrimonio from '../../assets/icons/Matrimonio.svg'
import rectificacion from '../../assets/icons/RectificacionDePartidas.svg'
import sucesion from '../../assets/icons/SucesionIntestada.svg'
import legalizaciones from '../../assets/icons/Legalizaciones.svg'
import constitucion from '../../assets/icons/ConstitucionDeEmpresas.svg'
import poderes from '../../assets/icons/Poderes.svg'
import autorizacion from '../../assets/icons/AutorizacionDeViajes.svg'
import vehiculos from '../../assets/icons/Vehicular.svg'
import anticipo from '../../assets/icons/AnticipoDeHerencia.svg'
import donacion from '../../assets/icons/Donacion.svg'
import divorcio from '../../assets/icons/Divorcio.svg'
import testamento from '../../assets/icons/Testamento.svg'
import otros from '../../assets/icons/OtrosServicios.svg'

const service = [
  { imagen: compraventa, title: "Compraventa", desc: "Ver info" },
  { imagen: arrendamiento, title: "Arrendamiento", desc: "Ver info" },
  { imagen: legalizaciones, title: " Legalizaciones, certificaciones y cartas notariales", desc: "Ver info" },
  { imagen: constitucion, title: "Constitución de Empresas, de Asociaciones y Actos Societarios", desc: "Ver info" },
  { imagen: poderes, title: "Poderes", desc: "Ver info" },
  { imagen: autorizacion, title: " Autorización de viaje", desc: "Ver info" },
  { imagen: vehiculos, title: "Vehículos", desc: "Ver info" },
  { imagen: anticipo, title: "Anticipo de legítima/ herencia", desc: "Ver info" },
  { imagen: donacion, title: "Donación", desc: "Ver info" },
  { imagen: divorcio, title: "Divorcios", desc: "Ver info" },
  { imagen: matrimonio, title: "Matrimonio", desc: "Ver info" },
  { imagen: rectificacion, title: "Rectificación de partidas", desc: "Ver info" },
  { imagen: sucesion, title: "Sucesión\nintestada", desc: "Ver info" },
  { imagen: testamento, title: "Testamento", desc: "Ver info" },
  { imagen: otros, title: "Otros servicios notariales", desc: "Ver info" },
]

const Services = () => {
  return (
    <div className="screen py-5 smd:py-20 md:py-28">
    <div className="mb-8 sm:mb-16 md:mb-18 text-center">
      <div className="title text-[21px] sm:text-3xl md:text-4xl leading-none">
        ¿Qué trámites deseas <br /> realizar hoy?
      </div>

      <div className="font-choplin mx-5 md:m-0 font-light text-[15px] sm:text-2xl md:text-[28px] text-negro mt-2 sm:mt-3 md:mt-4 leading-snug sm:leading-tight md:leading-snug">
        Conoce todos los productos que <br className="block md:hidden" /> tenemos para tí
      </div>
    </div>

      <div className="flex flex-wrap gap-3 m-4 md:m-0 sm:gap-3 md:gap-10 justify-center">
        {service.map((serviceItem, index) => (
          <div key={index} className="w-[calc(50%-6px)] flex justify-center items-center sm:w-[calc(50%-12px)] md:w-[240px]">
            <Cards img={serviceItem.imagen} titulo={serviceItem.title} desc={serviceItem.desc} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services