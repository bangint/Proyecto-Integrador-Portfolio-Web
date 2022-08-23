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
    private String descripcionP;
    private String img;
    
    //Constructor

    public dtoProyec() {
    }

    public dtoProyec(String titulo, String descripcionP, String img) {
        this.titulo = titulo;
        this.descripcionP = descripcionP;
        this.img = img;
    }
    
    //Getter and Setter

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcionP() {
        return descripcionP;
    }

    public void setDescripcionP(String descripcionP) {
        this.descripcionP = descripcionP;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
    
}
