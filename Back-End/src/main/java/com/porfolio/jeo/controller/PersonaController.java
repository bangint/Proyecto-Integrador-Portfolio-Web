/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.jeo.controller;




import com.porfolio.jeo.entidad.persona;
import com.porfolio.jeo.service.PersonaService;




import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("persona/")
//@CrossOrigin(origins = "https://portafolioweb-de08f.web.app/")
@CrossOrigin(origins = "*")


public class PersonaController {

    
    private final PersonaService personaService;
    
    public PersonaController(PersonaService personaService){
        this.personaService = personaService;
    }
    
 
    
    @GetMapping("buscar/{id}")
    public ResponseEntity<persona> buscarPersona(@PathVariable("id")int id){
        persona pers = personaService.BuscarporId(id);
        return new ResponseEntity<>(pers, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("update/{id}")
    public ResponseEntity<persona> editarPersona(@PathVariable("id")int id,@RequestBody persona pers){
        persona editpers = personaService.editpersona(pers);
        return new ResponseEntity<>(editpers, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("editarsobreMy/{id}")
    public persona editarSobreMy(@PathVariable("id")int id,
                                                                                            @RequestParam("sobreMy")String nuevosobreMy){
        persona pers = personaService.BuscarporId(id);
        pers.setSobreMy(nuevosobreMy);
        personaService.editpersona(pers);
        return pers;
    }
    
    @PostMapping("img/{id}")
    public persona editimg(@PathVariable("id")int id,
                                                                            @RequestParam("img") String nuevaimg){
        persona pers = personaService.BuscarporId(id);
        pers.setImg(nuevaimg);
        personaService.editpersona(pers);
        return pers;
    }
    
    
}
