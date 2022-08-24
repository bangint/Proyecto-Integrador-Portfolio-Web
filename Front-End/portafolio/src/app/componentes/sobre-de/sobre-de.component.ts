import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { Storage, ref, getDownloadURL, listAll } from '@angular/fire/storage'
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-sobre-de',
  templateUrl: './sobre-de.component.html',
  styleUrls: ['./sobre-de.component.css']
})
export class SobreDeComponent implements OnInit {
  pers: persona = new persona("","","","","","");
  isLogged = false;
  public imgperfil: string

  constructor(public personaS: PersonaService, 
    private tokerService: TokenService,
    private storage: Storage,
    private activateRouter: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.getImagenes();
    if(this.tokerService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    const id = this.activateRouter.snapshot.params['id'];
     this.personaS.getpersona().subscribe(data =>{
      this.pers = data
     }, err => {
      alert("No se encontro el usuario.");
     })
  }

  

  getImagenes() {
    const imagesRef = ref(this.storage, 'perfil');
    listAll(imagesRef,).then(async perfil => {
      console.log(perfil);
      for(let img of perfil.items){
        if(img.name == this.pers.img){
          const url = await getDownloadURL(img);
          this.imgperfil = url;
        }
      }
    }).catch(error => console.log(error));
  }



}
