import React from 'react'
import imgNotaria from '../../assets/img/imgNotaria.jpg';

const Hero = () => {
  return (
    <section className="relative h-[390px] md:h-[700px] bg-cover bg-center flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgNotaria})`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40" />

      <div className="relative z-10 text-center text-white font-light px-4 md:px-6 max-w-4xl leading-7 sm:leading-none">
        <h1 className="font-choplin font-light text-[25px] sm:text-3xl md:text-5xl lg:text-[62px]">Nuestra razón</h1>
        <p className="font-choplin font-light text-[25px] sm:text-3xl md:text-5xl lg:text-[62px]">de ser es su <span className='font-semibold'>seguridad</span></p>
        <p className="font-choplin font-light text-[25px] sm:text-3xl md:text-5xl lg:text-[62px] mb-2 sm:mb-4 md:mb-8">y <span className='font-semibold'>confianza</span></p>
        <button className='border rounded-4xl  px-3 py-0 sm:btn border-dorado font-bold text-[12px] sm:text-[15px] md:text-3xl lg:text-[27px] bg-transparent'>Quiero realizar un trámite</button>
      </div>
    </section>
  )
}

export default Hero