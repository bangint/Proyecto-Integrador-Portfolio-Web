/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.porfolio.jeo.service;

import com.porfolio.jeo.entidad.SoftSkill;
import com.porfolio.jeo.repositorio.RSoftSkill;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author guty
 */
@Service
@Transactional
public class SSoftSkill {
    @Autowired
    RSoftSkill rSoftSkill;
    
    public List<SoftSkill> list(){
        return rSoftSkill.findAll();
    }
    
   
    
    
    public Optional<SoftSkill>buscarById(int id){
        return rSoftSkill.findById(id);
    }
    
    public void delete(int id){
        rSoftSkill.deleteById(id);
    }
    
    public void save(SoftSkill softSkill){
        rSoftSkill.save(softSkill);
    }
    
    public boolean existsById(int id){
        return rSoftSkill.existsById(id);
        }
   
}
