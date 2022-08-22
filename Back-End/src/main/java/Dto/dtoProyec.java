/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Dto;

/**
 *
 * @author guty
 */
public class dtoProyec {
    
    private String titulo;
    private String PDescripcion;
    private String img;
    
    //Constructor

    public dtoProyec() {
    }

    public dtoProyec(String titulo, String PDescripcion, String img) {
        this.titulo = titulo;
        this.PDescripcion = PDescripcion;
        this.img = img;
    }
    
    //Getter and Setter

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getPDescripcion() {
        return PDescripcion;
    }

    public void setPDescripcion(String PDescripcion) {
        this.PDescripcion = PDescripcion;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
    
}
