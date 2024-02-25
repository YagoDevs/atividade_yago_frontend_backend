
import Trap from '../../assets/img_trap.svg';
export default function Sidebar(){
    return (
        <div className="w-20 h-[650px] bg-[#1D1C1C] translate-y-6 translate-x-4 rounded rounded-xl">
            <img src={Trap} alt="Logo da Vivo" className="w-16 h-16 rounded-xl bg-[#49005F] translate-y-36 translate-x-2  mr-4" /> {/* Adicione margem à direita para separar a imagem do texto */}

        </div>
    )
}