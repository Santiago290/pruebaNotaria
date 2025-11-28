import React from 'react'

const Cards = ({ titulo, img }) => {
  const isLong = titulo.length > 35

  return (
    <div className=" bg-amarillo w-[164px] sm:w-[225px] md:w-[260px] h-full sm:h-[370px] md:h-[370px] rounded-[20px] sm:rounded-4xl flex flex-col overflow-hidden">
      <div className="w-full flex items-center justify-center shrink-0 bg-gradient-notaria  h-[120px] sm:h-[225px] md:h-[225px]">
        <img
          className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px]"
          src={img || "/placeholder.svg"}
          alt={titulo}
        />
      </div>
      <div className="bg-beige flex flex-col justify-between items-center p-3 md:p-4 flex-1 leading-5">
        <div className="mb-[5px] sm:mb-0 h-full flex justify-center items-center">
          <h2
            className={`font-medium text-center ${
              isLong
                ? "text-[10px] leading-3 sm:text-[18px] md:text-[18px] sm:leading-5"
                : "text-[13px] leading-4 sm:text-[25px] md:text-[25px] sm:leading-6"
            }`}
          >
            {titulo}
          </h2>
        </div>
        <button className="py-[1px] sm:py-[5px] px-[12px] sm:px-[19px] font-medium rounded-4xl text-rojo text-[9px] sm:text-[14px] bg-white">
          Ver más
        </button>
      </div>
    </div>
  )
}

export default Cards