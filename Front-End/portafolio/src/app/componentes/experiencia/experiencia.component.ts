import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService,
    private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.logid();
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete1(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          alert("Se borro con exito.");
          this.router.navigate(['']);
        }, err =>{
          alert("No se pudo eliminar.");
          this.router.navigate(['']);
        }
      )
    }
  }

  logid(): void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

}



