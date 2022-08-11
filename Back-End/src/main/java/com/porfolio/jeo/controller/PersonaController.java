
package com.porfolio.jeo.controller;

import com.porfolio.jeo.entidad.persona;
import com.porfolio.jeo.interfac.IPersonaServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {
    @Autowired IPersonaServicio ipersonaService;
    
    @GetMapping("persona/traer")
    public List<persona> getpersona(){
        return ipersonaService.getpersona();
    }
    
    @GetMapping("persona/perfil")
    public persona findpersona(){
        return ipersonaService.findpersona((long) 1);
    }
    
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/persona/crear")
    public String crearpersona(@RequestBody persona personas){
        ipersonaService.savepersona(personas);
        return "La persona fue creada.";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/persona/borrar/{id}")
    public String deletepersona(@PathVariable Long id){
        ipersonaService.deletepersona(id);
        return "La persona fue elimidad.";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/persona/editar/{id}")
    public persona  editpersona(@PathVariable Long id, 
                                                        @RequestParam("nombre") String nuevoNombre,
                                                        @RequestParam("apellido") String nuevoApellido,
                                                        @RequestParam("img") String nuevaImg){
                                                        
                persona personas = ipersonaService.findpersona(id);
                                                        
                personas.setNombre(nuevoNombre);
                personas.setApellido(nuevoApellido);
                personas.setImg(nuevaImg);
                
                ipersonaService.savepersona(personas);
                return personas;                                        
         }
               
}
