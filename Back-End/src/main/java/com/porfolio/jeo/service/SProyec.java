/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.jeo.service;

import com.porfolio.jeo.entidad.NewProyec;
import com.porfolio.jeo.repositorio.ReProyec;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional

public class SProyec {
    
    @Autowired
    ReProyec reProyec;
    
    public List<NewProyec> list(){
        return reProyec.findAll();
    }
    
    public Optional<NewProyec> buscarById(int id){
        return reProyec.findById(id);
    }
    public Optional<NewProyec>buscarByTitulo(String titulo){
        return reProyec.findByTitulo(titulo);
    }
    public void guardar(NewProyec proyec){
        reProyec.save(proyec);
    }
    public void delete(int id){
        reProyec.deleteById(id);
    }
    public boolean existsById(int id){
        return reProyec.existsById(id);
    }
    public boolean existsByTitulo(String titulo){
        return reProyec.existsByTitulo(titulo);
    }
    
}
