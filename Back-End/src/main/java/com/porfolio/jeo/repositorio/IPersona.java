
package com.porfolio.jeo.repositorio;

import com.porfolio.jeo.entidad.persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface IPersona extends JpaRepository<persona, Integer>{
    
    
}
