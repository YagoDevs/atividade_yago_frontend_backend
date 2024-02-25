package com.backend.ponderada.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.ponderada.entities.Music;
import com.backend.ponderada.repositories.MusicRepository;
import com.backend.ponderada.services.MusicService;


@RestController
@RequestMapping(value = "/music")
public class MusicController {
    @Autowired
    private MusicService musicService;
    // Método para obter todas as músicas

    @GetMapping
    public ResponseEntity<List<Music>> getAllMusics() {
        try {
            List<Music> allMusics = musicService.getAllMusics();
            return new ResponseEntity<>(allMusics, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Criar usuário
    @PostMapping
    public ResponseEntity<Music> createUser(@RequestBody Music music) {
        try {
            Music createdMusic = musicService.createUser(music);
            return new ResponseEntity<>(createdMusic, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMusic(@PathVariable Long id) {
        try {
            Music deletedMusic = musicService.deleteMusic(id);
            return ResponseEntity.ok().body(deletedMusic);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Música não encontrada com o ID: " + id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Erro ao deletar a música: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMusic(@PathVariable Long id, @RequestBody Music music) {
        try {
            Music updatedMusic = musicService.updateMusic(id, music);
            return ResponseEntity.ok().body(updatedMusic);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Música não encontrada com o ID: " + id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Erro ao atualizar a música: " + e.getMessage());
        }
    }

}