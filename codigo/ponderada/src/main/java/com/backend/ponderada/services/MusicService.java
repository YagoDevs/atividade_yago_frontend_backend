package com.backend.ponderada.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.ponderada.entities.Music;
import com.backend.ponderada.repositories.MusicRepository;

@Service
public class MusicService {

    @Autowired
    MusicRepository musicRepository;
    
    public Music createUser(Music music) {
        try {
            Music newMusic = new Music();
            newMusic.setTitulo(music.getTitulo());
            newMusic.setAlbum(music.getAlbum());
            newMusic.setAutor(music.getAutor());
            newMusic.setImg_musica(music.getImg_musica());
            newMusic.setMusica(music.getMusica());
            
            Music createdMusic = musicRepository.save(newMusic);

            return createdMusic;
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível criar a música, erro: " + e.getMessage() + "");
        }
    }

    public List<Music> getAllMusics() {
        try {
            return musicRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível obter todas as músicas, erro: " + e.getMessage());
        }
    }

    public Music deleteMusic(Long id) {
        try {
            Music music = musicRepository.findById(id).get();
            musicRepository.delete(music);
            return music;
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível deletar a música, erro: " + e.getMessage());
        }
    }

    //quero dar update apenas no titulo, album e autor da musica
    public Music updateMusic(Long id, Music music) {
        try {
            Music musicToUpdate = musicRepository.findById(id).get();
            musicToUpdate.setTitulo(music.getTitulo());
            musicToUpdate.setAlbum(music.getAlbum());
            musicToUpdate.setAutor(music.getAutor());
            return musicRepository.save(musicToUpdate);
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível atualizar a música, erro: " + e.getMessage());
        }
    }
}
