import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-de',
  templateUrl: './sobre-de.component.html',
  styleUrls: ['./sobre-de.component.css']
})
export class SobreDeComponent implements OnInit {
persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getpersona().subscribe(data => {this.persona = data})
  }

}
