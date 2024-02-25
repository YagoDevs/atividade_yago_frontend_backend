import { useEffect, useState } from "react";
import axios from "axios";
import MoreIcon from '../moreIcon/MoreIcon';

interface Music {
  id: number;
  titulo: string;
  autor: string;
  album: string;
  dataAdicao: string;
  img_musica: string;
  musica: string; // Adicione a propriedade para o link do YouTube
}

export default function ShowMusic() {
  const [musicas, setMusicas] = useState<Music[]>([]);

  useEffect(() => {
    async function fetchMusicas() {
      try {
        const response = await axios.get<Music[]>('http://localhost:8080/music');
        setMusicas(response.data);
      } catch (error) {
        console.error('Erro ao buscar músicas:', error);
      }
    }

    fetchMusicas();
  }, []);

  return (
    <div className="w-full bg-[#292929]">
      <div className="mx-auto overflow-x-auto">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3 -translate-x-40">Título</th>
              <th className="px-6 py-3 -translate-x-24">Álbum</th>
              <th className="px-6 py-3 -translate-x-16">Data de Adição</th>
              <th className="px-6 py-3"></th> 
            </tr>
          </thead>
          <tbody>
            {musicas.map((musica, index) => (
              <tr key={index} className="transition-colors duration-200 hover:bg-gray-400">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 flex items-center">
                  <a href={musica.musica} className="flex" target="_blank" rel="noopener noreferrer">
                    <img
                      src={musica.img_musica}
                      alt="Capa do Álbum"
                      className="w-10 h-10 rounded-xl bg-[#49005F] mr-4"
                    />
                    <div>
                      <span className="font-bold text-lg block">{musica.titulo}</span>
                      <span className="block">{musica.autor}</span>
                    </div>
                  </a>
                </td>
                <td className="px-6 py-4 font-bold">{musica.album}</td>
                <td className="px-6 py-4 font-bold">22 de nov. de 2024</td>
                <td className="px-6 py-4">
                  <MoreIcon musicId={musica.id.toString()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
