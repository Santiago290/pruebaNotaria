import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[700px] bg-cover bg-center flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage:
            "url('./src/assets/img/imgNotaria.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40" />

      <div className="relative z-10 text-center text-white font-light px-4 md:px-6 max-w-4xl">
        <h1 className="font-choplin font-light text-4xl md:text-6xl lg:text-[62px]">Nuestra razón</h1>
        <p className="font-choplin font-light text-2xl md:text-4xl lg:text-[62px]">de ser es su <span className='font-medium'>seguridad</span></p>
        <p className="font-choplin font-light text-3xl md:text-5xl lg:text-[62px] mb-8">y <span className='font-medium'>confianza</span></p>
        <button className='btn border-dorado font-bold text-[27px] bg-transparent'>Quiero realizar un trámite</button>
      </div>
    </section>
  )
}

export default Hero