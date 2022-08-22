import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-de',
  templateUrl: './sobre-de.component.html',
  styleUrls: ['./sobre-de.component.css']
})
export class SobreDeComponent implements OnInit {
pers: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService, private tokerService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokerService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaService.getpersona().subscribe(
      data => {
        this.pers = data;
      }
    )
  }

}
