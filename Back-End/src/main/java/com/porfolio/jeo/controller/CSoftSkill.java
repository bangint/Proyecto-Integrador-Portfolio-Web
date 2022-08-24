/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.jeo.controller;

import Dto.dtoSoftSkill;
import com.porfolio.jeo.Security.Controller.Mensaje;
import com.porfolio.jeo.entidad.SoftSkill;
import com.porfolio.jeo.service.SSoftSkill;
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

/**
 *
 * @author guty
 */
@RestController
@RequestMapping("softskill")
@CrossOrigin(origins = "https://portafolioweb-de08f.web.app/")
//@CrossOrigin(origins = "*")
public class CSoftSkill {
    @Autowired
    SSoftSkill sSoftSkill;
    
    @GetMapping("/lista")
    public ResponseEntity<List<SoftSkill>> list(){
        List<SoftSkill> list= sSoftSkill.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<SoftSkill> getById(@PathVariable("id")int id){
        if(!sSoftSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        SoftSkill skill = sSoftSkill.buscarById(id).get();
        return new ResponseEntity(skill, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!sSoftSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe."), HttpStatus.NOT_FOUND);
        }
        sSoftSkill.delete(id);
        return new ResponseEntity(new Mensaje("La skill fue eliminada."), HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoSoftSkill dtoskill){
        if(StringUtils.isBlank(dtoskill.getNombreS())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio."), HttpStatus.BAD_REQUEST);
        }
        
        SoftSkill skill = new SoftSkill(dtoskill.getNombreS(),dtoskill.getCapacidadS(),dtoskill.getTipoS());
        sSoftSkill.save(skill);
        return new ResponseEntity(new Mensaje("la skill fue agregada correctamente."), HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody dtoSoftSkill dtoskill){
        if(!sSoftSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No Existe esa Skill."), HttpStatus.BAD_REQUEST);
        }
        
        
        if(StringUtils.isBlank(dtoskill.getNombreS())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        SoftSkill skill =  sSoftSkill.buscarById(id).get();
         skill.setNombreS(dtoskill.getNombreS());
         skill.setCapacidadS(dtoskill.getCapacidadS());
         skill.setTipoS(dtoskill.getTipoS());
         sSoftSkill.save(skill);
         return new ResponseEntity(new Mensaje("La Skill fue actualizada con exito"), HttpStatus.OK);
    }
    
}
