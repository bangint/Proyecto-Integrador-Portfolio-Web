/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.porfolio.jeo.repositorio;

import com.porfolio.jeo.entidad.NewProyec;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReProyec extends JpaRepository<NewProyec, Integer>{
    public Optional<NewProyec>findByTitulo(String titulo);
    public boolean existsByTitulo(String titulo);
    
}
