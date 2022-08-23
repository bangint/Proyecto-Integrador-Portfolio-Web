import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editnombre',
  templateUrl: './editnombre.component.html',
  styleUrls: ['./editnombre.component.css']
})
export class EditnombreComponent implements OnInit {
  pers: persona = null;
  isLogged = false;
  

  constructor(
    private personaS: PersonaService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

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
