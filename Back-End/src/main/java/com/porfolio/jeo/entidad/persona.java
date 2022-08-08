package com.porfolio.jeo.entidad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 1, max = 45, message = "No ha ngresado el nombre.")
    private String nombre;
    @NotNull
    @Size(min = 1, max = 45, message = "No ha ingresado el Apellido.")
    private String apellido;
    
    @Size(min = 1, max = 45, message = "no ha ingresado la imagen.")
    private String img;

    
}
