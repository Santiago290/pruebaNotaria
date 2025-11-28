import whatsappIcon from "../../assets/icons/WhatsappContacto.svg"
import imgEmpresa from "../../assets/img/imgEmpresa.jpg"
import imgPersona from "../../assets/img/imgPersona.jpg"

const Cita = () => {
  return (
    <section className="py-[30px] space-y-4 smd:py-[80px] px-3">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-10 sm:mb-12 md:mb-16 w-full">
          <h2 className="title text-[21px] sm:text-3xl md:text-4xl">
            Agenda una cita
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center w-full max-w-6xl">
          <div className="h-[200px] sm:h-[250px] lg:h-[360px] w-[290px] sm:w-[450px] md:w-[full] lg:w-1/2 flex flex-col rounded-[15px] md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-lg">
            <div className="bg-amarillo rounded-3xl lg:rounded-4xl flex flex-col">
              <div className="w-full h-[100px] lg:h-[180px] sm:h-[125px] overflow-hidden">
                <img src={imgPersona || "/placeholder.svg"} alt="Persona Natural" className="h-full w-full object-cover hover:scale-105 transition duration-300"/>
              </div>

              <div className="bg-gradient-notaria h-[100px] lg:h-[180px] sm:h-[125px] px-6 sm:px-8 lg:px-12 py-6 sm:py-8 flex flex-col text-center lg:text-start justify-center relative">
                <div className="absolute flex justify-center items-center -top-6 sm:-top-8 lg:-top-12 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] lg:w-24 lg:h-24 rounded-full bg-rojo">
                  <img className="w-10 h-10 sm:w-20 sm:h-20" src={whatsappIcon || "/placeholder.svg"} alt="WhatsApp" />
                </div>
                <h3 className="text-[18px] mt-0 xl:mt-3 sm:text-[25px] xl:text-[40px] lg:text-3xl text-white font-light">
                  Soy una <span className="font-bold">empresa</span>
                </h3>
                <button className="mt-0 sm:mt-2 py-1 xl:py-2 px-3 sm:px-5 xl:px-8 rounded-full text-[10px] sm:text-[15px] bg-beige text-rojo font-medium hover:bg-opacity-90 w-fit mx-auto lg:mx-0 transition">
                  Escríbenos
                </button>
              </div>
            </div>
          </div>
          
          <div className="h-[200px] sm:h-[250px] lg:h-[360px] w-[290px] sm:w-[450px] md:w-[full] lg:w-1/2 flex flex-col rounded-[15px] md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-lg">
            <div className="bg-amarillo rounded-3xl lg:rounded-4xl flex flex-col">
              <div className="w-full h-[100px] lg:h-[180px] sm:h-[125px] overflow-hidden">
                <img src={imgPersona || "/placeholder.svg"} alt="Persona Natural" className="h-full w-full object-cover hover:scale-105 transition duration-300"/>
              </div>

              <div className="bg-gradient-notaria h-[100px] lg:h-[180px] sm:h-[125px] px-6 sm:px-8 lg:px-12 py-6 sm:py-8 flex flex-col text-center lg:text-start justify-center relative">
                <div className="absolute flex justify-center items-center -top-6 sm:-top-8 lg:-top-12 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] lg:w-24 lg:h-24 rounded-full bg-rojo">
                  <img className="w-10 h-10 sm:w-20 sm:h-20" src={whatsappIcon || "/placeholder.svg"} alt="WhatsApp" />
                </div>
                <h3 className="text-[18px] mt-0 xl:mt-3 sm:text-[25px] xl:text-[40px] lg:text-3xl text-white font-light">
                  Soy una <span className="font-bold">persona natural</span>
                </h3>
                <button className="mt-0 sm:mt-2 py-1 xl:py-2 px-3 sm:px-5 xl:px-8 rounded-full text-[10px] sm:text-[15px] bg-beige text-rojo font-medium hover:bg-opacity-90 w-fit mx-auto lg:mx-0 transition">
                  Escríbenos
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cita

