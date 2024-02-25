package com.backend.ponderada.entities;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "tb_music")
public class Music {

    //declaração das variaveis e seus tipos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String autor;
    private String album;
    private String img_musica;
    private String musica;

    //constructor
    public Music() {
    }
    public Music(Long id, String titulo,String autor, String album, String img_musica, String musica) {
        super();
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.album = album;
        this.img_musica = img_musica;
        this.musica = musica;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getAlbum() {
        return album;
    }
    public void setAlbum(String album) {
        this.album = album;
    }
    public String getImg_musica() {
        return img_musica;
    }
    public void setImg_musica(String img_musica) {
        this.img_musica = img_musica;
    }
    public String getMusica() {
        return musica;
    }
    public void setMusica(String musica) {
        this.musica = musica;
    }

}
