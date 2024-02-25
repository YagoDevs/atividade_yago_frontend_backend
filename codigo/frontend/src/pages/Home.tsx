import MusicPlayer from "../components/musicPlayer/MusicPlayer";
import Trap from '../assets/img_trap.svg';
import ShowMusic from "../components/showMusic/ShowMusic";
import ButtonAdd from "../components/buttonAdd/ButtonAdd";
export default function Home(){
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex items-center justify-items  bg-[#49005F] w-[1200px] h-[350px] rounded rounded-xl pt-10">
                <div className="ml-20 bg-[#49005F]">
                    <img src={Trap} alt="Logo da Vivo" className="w-52 h-auto rounded rounded-xl bg-[#49005F] -translate-y-6" />
                </div>
                <div className="ml-20">
                    <p className="font-bold text-white  bg-[#49005F]">Playlist pública</p>
                    <h1 className="font-bold text-white text-[80px] bg-[#49005F]">Trap/lofi</h1>
                    <p className="font-bold text-white bg-[#49005F]">Yago Phellip - 4 músicas</p>
                </div>
                <ButtonAdd />
            </div>
            <div className="flex bg-[#292929] w-[1200px] h-[300px] text-white">
                <ShowMusic />
            </div>
            <MusicPlayer />
        </div>
    )
}
