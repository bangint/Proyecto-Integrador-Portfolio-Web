import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editphoto',
  templateUrl: './editphoto.component.html',
  styleUrls: ['./editphoto.component.css']
})
export class EditphotoComponent implements OnInit {

  isLogged = false;
  public preview: any;
  public loading: boolean;
  public file: any;
  pers: persona = null;

  constructor(private tokenService: TokenService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private http: HttpClient,
    private personaS: PersonaService,
    ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    const id = this.activateRouter.snapshot.params['id'];
    this.personaS.getpersona().subscribe(data =>{
      this.pers = data;
    }, err =>{
      alert("Error no se encontro la persona.");
      this.router.navigate(['']);
    }
    )

  }

  uploadPhoto(): void{
    let formData = new FormData();
    formData.append('fotoperfil', this.file, this.file.name);

    this.http.post('gs://portafolioweb-de08f.appspot.com',formData).subscribe(
      res =>{
        console.log(res);
      }
    )


  }

  onPhotoSelected(event: any): any{
    this.file = <File>event.target.files[0]
      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;
      reader.readAsDataURL(this.file);
      this.pers.banner = this.file;
      console.log(this.file);

  }

}
