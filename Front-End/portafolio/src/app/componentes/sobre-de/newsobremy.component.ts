import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';




@Component({
  selector: 'app-newsobremy',
  templateUrl: './newsobremy.component.html',
  styleUrls: ['./newsobremy.component.css']
})
export class NewsobremyComponent implements OnInit {
  pers: persona;
  
  

  constructor(private personaS: PersonaService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void{
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
  
  
  onUpdateS(): void{
    this.personaS.personaEditar(this.pers).subscribe(
      data =>{
        
        this.router.navigate(['']);
        console.log(this.pers);
        
        }, err =>{
          console.log(this.pers)
          alert("Error al modificar.");
          this.router.navigate(['']);
          })
          
        }
  


}
