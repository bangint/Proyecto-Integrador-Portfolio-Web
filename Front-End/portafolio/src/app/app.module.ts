import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobreDeComponent } from './componentes/sobre-de/sobre-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/intercertor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewskillComponent } from './componentes/skills/newskill.component';
import { EditnombreComponent } from './componentes/sobre-de/editnombre.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { NewbannerComponent } from './componentes/header/newbanner.component';
import { NewsobremyComponent } from './componentes/sobre-de/newsobremy.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { EditsoftComponent } from './componentes/skills/editsoft.component';
import { NewProyectComponent } from './componentes/proyectos/new-proyect.component';
import { EditproyectComponent } from './componentes/proyectos/editproyect.component';
import { EditphotoComponent } from './componentes/sobre-de/editphoto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewskillComponent,
    EditnombreComponent,
    NavegacionComponent,
    NewbannerComponent,
    NewsobremyComponent,
    EditSkillComponent,
    EditsoftComponent,
    NewProyectComponent,
    EditproyectComponent,
    EditphotoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
	  HttpClientModule,
    FormsModule,
    CKEditorModule,
    
    
  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
