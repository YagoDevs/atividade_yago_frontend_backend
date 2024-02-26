import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import axios from 'axios';

interface UpdateModalProps {
    open: boolean;
    handleClose: () => void;
    musicId: string; 
}

export default function UpdateModal({ open, handleClose, musicId }: UpdateModalProps) {
    const [titulo, setTitulo] = useState('');
    const [album, setAlbum] = useState('');
    const [autor, setAutor] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            titulo: titulo,
            album: album,
            autor: autor
        };

        try {
            const response = await axios.put(`http://ec2-34-201-250-70.compute-1.amazonaws.com:8080/music/${musicId}`, data); 
            console.log('Música atualizada:', response.data);
            handleClose();
        } catch (error) {
            console.error('Erro ao atualizar a música:', error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="update-modal-title"
            aria-describedby="update-modal-description"
        >
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50 overflow-y-auto">

                    <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Atualizar Música</p>
                            <button onClick={handleClose} className="focus:outline-none">
                                <svg className="fill-current text-gray-500 hover:text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1C4.48 1 0 5.48 0 11s4.48 10 10 10 10-4.48 10-10S15.52 1 10 1zm5 12.59L13.41 15 10 11.59 6.59 15 5 13.41 8.41 10 5 6.59 6.59 5 10 8.41 13.41 5 15 6.59 11.59 10 15 13.41 13.41 15 10 11.59z" clipRule="evenodd"/></svg>
                            </button>
                        </div>

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
                            <div className="flex justify-end">
                                <Button variant="outlined" onClick={handleClose} className="mt-4 mr-4">Fechar</Button>
                                <Button type="submit" variant="contained" className="mt-4 bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Salvar</Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Modal>
    );
}
