/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.jeo.controller;

import Dto.dtoProyec;
import com.porfolio.jeo.Security.Controller.Mensaje;
import com.porfolio.jeo.entidad.NewProyec;
import com.porfolio.jeo.service.SProyec;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("proyec")
@CrossOrigin(origins = "https://portafolioweb-de08f.web.app/")
//@CrossOrigin(origins = "*")
public class CProyec {
    
    @Autowired
    SProyec sProyec;
    
    @GetMapping("/lista")
    public ResponseEntity<List<NewProyec>> list(){
        List<NewProyec> list= sProyec.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("buscar/{id}")
    public ResponseEntity<NewProyec> buscarById(@PathVariable("id")int id){
        if(!sProyec.existsById(id))
            return new ResponseEntity(new Mensaje("No Existe el ID."), HttpStatus.BAD_REQUEST);
        NewProyec proyec = sProyec.buscarById(id).get();
        return new ResponseEntity(proyec, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoProyec dtopro){
        if(sProyec.existsByTitulo(dtopro.getTitulo())){
            return new ResponseEntity(new Mensaje("El Proyecto ya existe."), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtopro.getTitulo())){
            return new ResponseEntity(new Mensaje("El nombre del proyecto es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        
        NewProyec proyec = new NewProyec(dtopro.getTitulo(),dtopro.getDescripcionP(),dtopro.getImg());
        sProyec.guardar(proyec);
        return new ResponseEntity(new Mensaje("El proyecto Fue agregado."), HttpStatus.OK);
        
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("update/{id}")
    public ResponseEntity<?> upDate(@PathVariable("id")int id, @RequestBody dtoProyec dtopro){
        if(!sProyec.existsById(id))
            return new ResponseEntity(new Mensaje("No existe ese ID"), HttpStatus.BAD_REQUEST);
        NewProyec proyec = sProyec.buscarById(id).get();
        proyec.setTitulo(dtopro.getTitulo());
        proyec.setPDescripcion(dtopro.getDescripcionP());
        proyec.setImg(dtopro.getImg());
        sProyec.guardar(proyec);
        return new ResponseEntity(new Mensaje("Se guardo con exito."), HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!sProyec.existsById(id))
            return new ResponseEntity(new Mensaje("No Existe ese ID"), HttpStatus.BAD_REQUEST);
        sProyec.delete(id);
        return new ResponseEntity(new Mensaje("Se borro con exito"), HttpStatus.OK);
    }
    
}
