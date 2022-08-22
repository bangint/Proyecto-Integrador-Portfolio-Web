import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/SoftSkill';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-editsoft',
  templateUrl: './editsoft.component.html',
  styleUrls: ['./editsoft.component.css']
})
export class EditsoftComponent implements OnInit {
  skill: SoftSkill = null;

  constructor(private softSkills: SoftSkillService,
              private router: Router,
              private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.softSkills.detail(id).subscribe(data =>{this.skill = data;
    }, err =>{
      alert("Error al encontrar  experiencia.");
      this.router.navigate(['']);
    })
  }

  updatesoft(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.softSkills.update(id, this.skill).subscribe(
      data =>{
        alert("Skill actualizada.");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo actualizar.");
        this.router.navigate(['']);
      }
    )

  }

}
