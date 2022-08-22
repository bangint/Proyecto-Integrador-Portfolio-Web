import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  titulo: string;
  PDescripcion: string;
  img: string;
  
  constructor(
    private proyec: SProyectoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreate(){
    const proyect = new Proyecto(this.titulo, this.PDescripcion, this.img);
    this.proyec.save(proyect).subscribe(
      data =>{
        alert("Proyecto agregado.");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al guardar.");
        this.router.navigate(['']);
      }
    )


  }

}
