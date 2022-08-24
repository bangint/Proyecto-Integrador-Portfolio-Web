import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { Storage, ref, getDownloadURL, listAll } from '@angular/fire/storage'
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pers: persona = null; 
  isLogged = false;
  public imgbanner: string;
  
  

  constructor(private router:Router, 
    private tokerService: TokenService,
    private storage: Storage,
    private activateRouter: ActivatedRoute,
    private personaS: PersonaService,) { }

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
    const imagesRef = ref(this.storage, 'banner');
    listAll(imagesRef,).then(async banner => {
      console.log(banner);
      for(let img of banner.items){
        if(img.name == this.pers.banner){
          const url = await getDownloadURL(img);
          this.imgbanner = url;
        }
        
      }

    }).catch(error => console.log(error));
  }

 

  }

