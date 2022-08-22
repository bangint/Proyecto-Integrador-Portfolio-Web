/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.jeo.service;

import com.porfolio.jeo.Security.Controller.Mensaje;
import com.porfolio.jeo.entidad.persona;
import com.porfolio.jeo.repositorio.IPersona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PersonaService {
    private final IPersona iPersona;
    
    @Autowired
    public PersonaService(IPersona iPersona){
        this.iPersona = iPersona;
    }
    
    public List<persona> buscarPersona(){
        return iPersona.findAll();
    }
    
    public persona editpersona(persona pers){
        return iPersona.save(pers);
     }
    
    public void borrapersona(int id){
        iPersona.deleteById(id);
    }
    
    public persona BuscarporId(int id){
        persona pers = iPersona.findById(id).orElse(null);
        return pers;
    }
}
