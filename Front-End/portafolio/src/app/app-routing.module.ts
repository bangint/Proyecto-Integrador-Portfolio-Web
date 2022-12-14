import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { NewbannerComponent } from './componentes/header/newbanner.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectComponent } from './componentes/proyectos/editproyect.component';
import { NewProyectComponent } from './componentes/proyectos/new-proyect.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { EditsoftComponent } from './componentes/skills/editsoft.component';
import { NewskillComponent } from './componentes/skills/newskill.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EditnombreComponent } from './componentes/sobre-de/editnombre.component';
import { NewsobremyComponent } from './componentes/sobre-de/newsobremy.component';
import { EditphotoComponent } from './componentes/sobre-de/editphoto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  // -- Nuevas -- //
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'nuevaskill', component: NewskillComponent},
  {path: 'newproyec', component: NewProyectComponent},

  // -- Editar -- //
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'editarpersona', component: EditnombreComponent},
  {path: 'editarbanner', component: NewbannerComponent},
  {path: 'editarsobremy', component: NewsobremyComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editsoft/:id', component: EditsoftComponent},
  {path: 'editproyec/:id', component: EditproyectComponent},
  {path: 'editphoto', component: EditphotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
