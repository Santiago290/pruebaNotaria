import React from 'react'

const Cards = ({titulo,img}) => {

  const isLong = titulo.length > 35;

  return (
    <div className='bg-amarillo min-w-[260px] w-[260px] h-[370px] rounded-4xl flex flex-col overflow-hidden'>
        <div className='w-full h-[225px] bg-gradient-notaria flex items-center justify-center'>
            <img className='w-[200px] h-[200px]' src={img} alt="" />
        </div>
        <div className='bg-beige flex flex-col justify-between items-center p-4 flex-1 leading-5'>
            <div className='h-full flex justify-center items-center'> 
                <h2 className={`font-medium  mb-2 text-center ${isLong ? "text-[18px] leading-5" : "text-[25px] leading-6"}`}>{titulo}</h2> 
            </div>
            <button className='py-[5px] px-[19px] font-medium rounded-4xl text-rojo text-[18px] bg-white'>Ver más</button>
        </div>
    </div>
  )
}

export default Cards