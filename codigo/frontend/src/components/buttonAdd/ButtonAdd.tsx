import React, { useState } from 'react';
import axios from 'axios';

export default function ButtonAdd() {
    const [modalOpen, setModalOpen] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [album, setAlbum] = useState('');
    const [autor, setAutor] = useState('');
    const [imagem, setImagem] = useState('');
    const [musica, setMusica] = useState('');

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            titulo: titulo,
            album: album,
            autor: autor,
            img_musica: imagem,
            musica: musica
        };

        try {
            const response = await axios.post('http://localhost:8080/music', data);
            console.log('Música criada:', response.data);
            closeModal(); 
        } catch (error) {
            console.error('Erro ao criar a música:', error);
        }
    };

    return (
        <div>
            <button
                className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-[40px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={openModal}
            >
                <span className="flex items-center justify-center">+</span>
            </button>
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título:</label>
                                <input type="text" id="titulo" name="titulo" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full" onChange={(e) => setTitulo(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="album" className="block text-sm font-medium text-gray-700">Álbum:</label>
                                <input type="text" id="album" name="album" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full" onChange={(e) => setAlbum(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="autor" className="block text-sm font-medium text-gray-700">Autor:</label>
                                <input type="text" id="autor" name="autor" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full" onChange={(e) => setAutor(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imagem" className="block text-sm font-medium text-gray-700">Endereço da imagem</label>
                                <input type="text" id="imagem" name="imagem" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full" onChange={(e) => setImagem(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="musica" className="block text-sm font-medium text-gray-700">Endereço da música</label>
                                <input type="text" id="musica" name="musica" className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full" onChange={(e) => setMusica(e.target.value)} />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Fechar</button>
                                <button type="submit" className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
