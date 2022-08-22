package com.porfolio.jeo.entidad;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import static javax.persistence.FetchType.LAZY;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
public class persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Size(min = 1, max = 45, message = "No ha ingresado el nombre.")
    private String nombre;
    @NotNull
    @Size(min = 1, max = 45, message = "No ha ingresado el Apellido.")
    private String apellido;
    
    @Size(min = 1, max = 45, message = "no ha ingresado la imagen.")
    private String img;
    private String banner;
    private String sobreMy;
    private String profesion;
    
   // @OneToMany(fetch = FetchType.LAZY, mappedBy = "idedu")
    //private List<Educacion> educacionList;
    //@OneToMany(fetch =FetchType.LAZY, mappedBy = "idskill")
    //private List<Skills> skillList;
    //@OneToMany(fetch =FetchType.LAZY, mappedBy = "idexpe")
    //private List<Experiencia> expList;
    
    
    
    // constructor

    public persona() {
    }

    public persona(String nombre, String apellido, String img, String banner, String sobreMy, String profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.banner = banner;
        this.sobreMy = sobreMy;
        this.profesion = profesion;
    }
    
    //Getter and Setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getSobreMy() {
        return sobreMy;
    }

    public void setSobreMy(String sobreMy) {
        this.sobreMy = sobreMy;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }
    
    
    
}
