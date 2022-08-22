/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Dto;

/**
 *
 * @author guty
 */
public class dtoSoftSkill {
    private String nombreS;
    private int capacidadS;
    private String tipoS;
    
    //constructor

    public dtoSoftSkill() {
    }

    public dtoSoftSkill(String nombreS, int capacidadS, String tipoS) {
        this.nombreS = nombreS;
        this.capacidadS = capacidadS;
        this.tipoS = tipoS;
    }
    
    //getter and setter

    public String getNombreS() {
        return nombreS;
    }

    public void setNombreS(String nombreS) {
        this.nombreS = nombreS;
    }

    public int getCapacidadS() {
        return capacidadS;
    }

    public void setCapacidadS(int capacidadS) {
        this.capacidadS = capacidadS;
    }

    public String getTipoS() {
        return tipoS;
    }

    public void setTipoS(String tipoS) {
        this.tipoS = tipoS;
    }
    
    
    
}
