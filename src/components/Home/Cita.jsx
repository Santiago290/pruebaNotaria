import whastappIcon from "../../assets/icons/WhatsappContacto.svg";
import imgEmpresa from '../../assets/img/imgEmpresa.jpg';
import imgPersona from '../../assets/img/imgPersona.jpg';

const Cita = () => {
  return (
    <section className="py-14 md:py-22 screen">
      {/* PADDING A LOS COSTADOS SOLO EN MOBILE */}
      <div className="px-4 sm:px-6 md:px-0">

        <div className="text-center mb-22">
          <h2 className="title">Agenda una cita</h2>
        </div>

        {/* MOBILE → columna | PC → fila */}
        <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">

          {/* CARD EMPRESA */}
          <div className="rounded-4xl flex flex-col w-full md:w-auto">

            <div className="
              w-full h-auto
              md:w-[570px] md:h-[380px]
              bg-amarillo rounded-4xl overflow-hidden shadow-lg flex flex-col
            ">
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={imgEmpresa}
                  alt="Empresa"
                  className="w-full h-full object-cover transition duration-300"
                />
              </div>

              <div className="
                pl-6 pr-6 pt-10 pb-6 text-center items-center
                md:h-[180px] md:pl-12 md:pt-3 md:pb-0 md:text-start md:items-start
                bg-gradient-notaria flex flex-col justify-center gap-4 relative
              ">
                <div className="
                  absolute flex justify-center items-center
                  top-[-40px] left-1/2 md:left-[45px]
                  -translate-x-1/2 md:translate-x-0
                  w-[81px] h-[81px] rounded-full bg-rojo
                ">
                  <img className="w-[75px] h-[75px]" src={whastappIcon} alt="Whatsapp" />
                </div>

                <h2 className="text-3xl md:text-4xl text-white font-light">
                  Soy una <span className="font-bold">empresa</span>
                </h2>

                <button className="py-[5px] w-[140px] md:w-[120px] rounded-4xl text-[18px] bg-beige text-rojo">
                  Escríbenos
                </button>
              </div>
            </div>
          </div>

          {/* CARD PERSONA */}
          <div className="rounded-4xl flex flex-col w-full md:w-auto">

            <div className="
              w-full md:w-[570px] md:h-[380px]
              bg-amarillo rounded-4xl overflow-hidden shadow-lg flex flex-col
            ">
              <div className="h-[222px] w-full overflow-hidden">
                <img
                  src={imgPersona}
                  alt="Persona"
                  className="w-full h-full object-cover transition duration-300"
                />
              </div>

              <div className="
                pl-6 pr-6 pt-10 pb-6 text-center items-center
                md:h-[180px] md:pl-12 md:pt-3 md:pb-0 md:text-start md:items-start
                bg-gradient-notaria flex flex-col justify-center gap-4 relative
              ">
                <div className="
                  absolute flex justify-center items-center
                  top-[-40px] left-1/2 md:left-[45px]
                  -translate-x-1/2 md:translate-x-0
                  w-[81px] h-[81px] rounded-full bg-rojo
                ">
                  <img className="w-[75px] h-[75px]" src={whastappIcon} alt="Whatsapp" />
                </div>

                <h2 className="text-3xl md:text-4xl text-white font-light">
                  Soy una <span className="font-bold">persona natural</span>
                </h2>

                <button className="py-[5px] w-[140px] md:w-[120px] rounded-4xl text-[18px] bg-beige text-rojo">
                  Escríbenos
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Cita;
