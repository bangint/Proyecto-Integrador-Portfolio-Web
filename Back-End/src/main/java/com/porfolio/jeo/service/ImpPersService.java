
package com.porfolio.jeo.service;

import com.porfolio.jeo.entidad.persona;
import com.porfolio.jeo.interfac.IPersonaServicio;
import com.porfolio.jeo.repositorio.IPersona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersService implements IPersonaServicio{
    
    @Autowired IPersona ipersonaRepository;

    @Override
    public List<persona> getpersona() {
            List<persona> pers = ipersonaRepository.findAll();
            return pers;
    }
    @Override
    public void savepersona(persona pers) {
        ipersonaRepository.save(pers);
    }

    @Override
    public void deletepersona(Long id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public persona findpersona(Long id) {
        persona pers = ipersonaRepository.findById(id).orElse(null);
        return pers;
    }
}

   