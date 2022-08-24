
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Storage, ref, uploadBytes } from '@angular/fire/storage'

@Component({
  selector: 'app-newbanner',
  templateUrl: './newbanner.component.html',
  styleUrls: ['./newbanner.component.css']
})
export class NewbannerComponent implements OnInit {
  
  pers: persona = null;
  isLogged = false;
  public preview: any;
  public imgRef: any;
  public archivo: any;
  public loading: boolean;
  public nombanner: string;
  

  constructor(private personaS: PersonaService,
              private router: Router,
              private storage: Storage,
              private activateRouter: ActivatedRoute,
              private tokenService: TokenService,) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    const id = this.activateRouter.snapshot.params['id'];
    this.personaS.getpersona().subscribe(data =>{this.pers = data;}, err =>{alert("Error."); this.router.navigate(['']);})
  }

  onPhotoSelected(event: any): void{
      const file = <File>event.target.files[0];
      this.pers.banner = file.name;
      this.archivo = file;
      this.imgRef = ref(this.storage, `banner/${file.name}`);
      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;
      reader.readAsDataURL(file);
      console.log(file.name);
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

  


}
