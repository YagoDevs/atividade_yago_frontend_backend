package com.backend.ponderada.repositories;


//importando ferramentas

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.ponderada.entities.Music;

@Repository("MusicRepository")
public interface MusicRepository extends JpaRepository<Music, Long> {

}
