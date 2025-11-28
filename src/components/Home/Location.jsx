import React from 'react'

const Location = () => {
  return (
    <div className='bg-beige py-[30px] space-y-4 smd:py-[80px] px-3'>
        <div className='screen w-full bg-white rounded-[20px] md:rounded-4xl '>
            <div className='flex flex-col xl:flex-row justify-center items-center p-[15px] smd:p-[27px] xl:p-[12px] gap-8 xl:gap-0'>
                <div className="w-full h-[290px] rounded-[20px] md:rounded-t-4xl overflow-hidden relative max-sm:h-[240px] max-xs:h-[200px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3445232410954!2d-77.04053631549353!3d-12.088550312112655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85e52b5fd5d%3A0x785d4b2405f696d8!2sAv.%20C%C3%A9sar%20Vallejo%20290%2C%20Lima%2015073!5e0!3m2!1ses-419!2spe!4v1764196264547!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className='flex flex-col items-start justify-between pl-[8px] md:pl-[80px] pr-[8px] md:pr-[90px] gap-5'>
                    <h2 className='text-rojo font-semibold font-choplin text-center w-full xl:w-[380px] leading-5 md:leading-none xl:text-start text-[19px] md:text-4xl'> <span className='font-light'>Notaría </span>Alejandro Ramírez Carranza</h2>
                    <p className='text-center xl:text-start leading-3 smd:leading-4 text-[8px] smd:text-[14px]'> Somos una notaría comprometida con la excelencia y confianza, brindando 
                    asesoramiento notarial con transparencia y profesionalismo. <br /><br />
                    Ofrecemos servicios en escrituras públicas, como compraventas, donaciones, 
                    hipotecas, poderes y constitución de empresas, además de asuntos no 
                    contenciosos como matrimonios, divorcios, sucesiones y rectificaciones. <br /><br />
                    Garantizamos atención personalizada y seguridad jurídica en cada trámite, 
                    priorizando su tranquilidad y confianza.</p>
                    <button className='mx-auto py-[5px] px-[19px] text-[10px] md:text-[18px] rounded-4xl bg-beige text-rojo font-medium'>Ver más</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Location