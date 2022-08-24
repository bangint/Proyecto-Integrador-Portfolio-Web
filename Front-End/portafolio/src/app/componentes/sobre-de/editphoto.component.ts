import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Storage, ref, uploadBytes }from '@angular/fire/storage'

@Component({
  selector: 'app-editphoto',
  templateUrl: './editphoto.component.html',
  styleUrls: ['./editphoto.component.css']
})
export class EditphotoComponent implements OnInit {

  pers: persona = null;
  isLogged = false;
  public loading: boolean;
  public preview: any;
  public imgRef: any;
  public archivo: any;
  public nombanner: string;

  constructor(private tokenService: TokenService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private http: HttpClient,
    private personaS: PersonaService,
    private storage: Storage,
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
    this.loading = true;
    this.personaS.personaEditar(this.pers).subscribe(
      data => {
      }, err =>{
        console.log(err);
      }
    )
    console.log(this.pers);
    uploadBytes(this.imgRef, this.archivo).then(x => {
      this.loading = false;
      alert("se subio la imagen con exito.");
      this.router.navigate(['']);
    }).catch(e =>{
      alert("No se pudo subir la imagen.");
      this.router.navigate(['']);
    })
  }

  onPhotoSelected(event: any): void{
    const file = <File>event.target.files[0];
    this.pers.img = file.name;
    this.archivo = file;
    this.imgRef = ref(this.storage, `perfil/${file.name}`);
    const reader = new FileReader();
    reader.onload = e => this.preview = reader.result;
    reader.readAsDataURL(file);
    console.log(file.name);
}

}
