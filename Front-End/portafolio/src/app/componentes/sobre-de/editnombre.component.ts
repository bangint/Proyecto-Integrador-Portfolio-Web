import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editnombre',
  templateUrl: './editnombre.component.html',
  styleUrls: ['./editnombre.component.css']
})
export class EditnombreComponent implements OnInit {
  pers: persona = null;
  

  constructor(
    private personaS: PersonaService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
  
    this.personaS.getpersona().subscribe(
      data =>{
        this.pers = data;
      }, err =>{
        alert("Error.");
        this.router.navigate(['']);
      }
    )
  }
  

  onUpdateN(): void{
    this.personaS.personaEditar(this.pers).subscribe(
      data =>{
        this.router.navigate(['']);
        }, err =>{
          console.log(this.pers)
          alert("Error al modificar El nombre.");
          this.router.navigate(['']);
          })
          
        }
}
