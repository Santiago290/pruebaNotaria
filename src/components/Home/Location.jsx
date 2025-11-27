import React from 'react'

const Location = () => {
  return (
    <div className='bg-beige px-2.5 py-[20px] xl:py-26'>
      <div className='screen w-full bg-white rounded-4xl'>
        <div 
          className='flex justify-center items-center p-[12px]
          
          /* SOLO MOBILE */
          max-md:flex-col max-md:gap-8'
        >

          {/* MAPA */}
          <div 
            className="min-w-[450px] h-[400px] bg-white rounded-4xl overflow-hidden
              
              /* SOLO MOBILE */
              max-md:min-w-full max-md:h-[260px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3445232410954!2d-77.04053631549353!3d-12.088550312112655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85e52b5fd5d%3A0x785d4b2405f696d8!2sAv.%20C%C3%A9sar%20Vallejo%20290%2C%20Lima%2015073!5e0!3m2!1ses-419!2spe!4v1764196264547!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* TEXTO */}
          <div 
            className='flex flex-col items-start justify-between text-start pl-[80px] pr-[90px] gap-5
              
              /* SOLO MOBILE */
              max-md:items-center max-md:text-center max-md:pl-0 max-md:pr-0'
          >
            <h2 className='text-rojo font-semibold font-choplin text-4xl'>
              <span className='font-light'>Notaría </span>Alejandro <br/>Ramírez Carranza
            </h2>

            <p className='leading-4 text-[14px] max-md:px-4'>
              Somos una notaría comprometida con la excelencia y confianza, brindando 
              asesoramiento notarial con transparencia y profesionalismo. <br /><br />
              Ofrecemos servicios en escrituras públicas, como compraventas, donaciones, 
              hipotecas, poderes y constitución de empresas, además de asuntos no 
              contenciosos como matrimonios, divorcios, sucesiones y rectificaciones. <br /><br />
              Garantizamos atención personalizada y seguridad jurídica en cada trámite, 
              priorizando su tranquilidad y confianza.
            </p>

            <button className='py-[5px] px-[19px] text-[18px] rounded-4xl bg-beige text-rojo font-medium max-md:mx-auto'>
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
