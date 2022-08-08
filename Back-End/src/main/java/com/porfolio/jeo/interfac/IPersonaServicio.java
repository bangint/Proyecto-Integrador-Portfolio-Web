
package com.porfolio.jeo.interfac;

import com.porfolio.jeo.entidad.persona;
import java.util.List;


public interface IPersonaServicio {
    //traer una lista de personas
    public List<persona> getpersona();
    //guardar una persona
    public void savepersona(persona personas);
    //borrar una persona
    public void deletepersona(Long id);
    //buscar una persona
    public persona findpersona(Long id);
            
            
}
