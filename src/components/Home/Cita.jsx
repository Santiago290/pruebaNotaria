import whastappIcon from "../../assets/icons/WhatsappContacto.svg";
import imgEmpresa from '../../assets/img/imgEmpresa.jpg';
import imgPersona from '../../assets/img/imgPersona.jpg';

const Cita = () => {
  return (
    <section className="py-14 md:py-22 screen">
      <div >
        <div className="text-center mb-22">
          <h2 className="title">Agenda una cita</h2>
        </div>
        <div className="flex gap-5">
            <div className="rounded-4xl flex flex-col">
                <div className="w-[570px] h-[380px] bg-amarillo rounded-4xl overflow-hidden shadow-lg flex flex-col">
                    <div className="h-[200px] w-full overflow-hidden">
                        <img
                        src={imgEmpresa}
                        alt="Empresa"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>

                    <div className="h-[180px] bg-gradient-notaria pl-12 pt-3 flex flex-col text-start justify-center gap-4 relative">
                        <div className="absolute flex justify-center items-center top-[-40px] left-[45px] w-[81px] h-[81px] rounded-full bg-rojo">
                          <img className="w-[75px] h-[75px]"  src={whastappIcon} alt="Facebook" />
                        </div>
                        <h2 className="text-4xl text-white font-light">Soy una <span className="font-bold">empresa</span></h2>
                        <button className="py-[5px] w-[120px] rounded-4xl text-[18px] bg-beige text-rojo">Escríbenos</button>
                    </div>
                </div>
            </div>

            <div className="rounded-4xl flex flex-col">
                <div className="w-[570px] h-[380px] bg-amarillo rounded-4xl overflow-hidden shadow-lg flex flex-col">
                    <div className="h-[222px] w-full overflow-hidden">
                        <img
                        src={imgPersona}
                        alt="Empresa"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                    </div>

                    <div className="h-[180px] bg-gradient-notaria pl-12 pt-3 flex flex-col text-start justify-center gap-4 relative">
                        <div className="absolute flex justify-center items-center top-[-40px] left-[45px] w-[81px] h-[81px] rounded-full bg-rojo">
                          <img className="w-[75px] h-[75px]"  src={whastappIcon} alt="Facebook" />
                        </div>
                        <h2 className="text-4xl text-white font-light">Soy una <span className="font-bold">persona natural</span></h2>
                        <button className="py-[5px] w-[120px] rounded-4xl text-[18px] bg-beige text-rojo">Escríbenos</button>
                    </div>
                </div>
            </div>
        </div>
       
      </div>
    </section>
  )
}

export default Cita