import { HttpClient } from '@angular/common/http';
import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-newbanner',
  templateUrl: './newbanner.component.html',
  styleUrls: ['./newbanner.component.css']
})
export class NewbannerComponent implements OnInit {
  pers: persona = null;
  isLogged = false;

  public preview: any;
  public file: any;
  public loading: boolean;
  

  constructor(private personaS: PersonaService,
              private router: Router,
              private sanitizer: DomSanitizer,
              private activateRouter: ActivatedRoute,
              private http: HttpClient,
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
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;
      reader.readAsDataURL(this.file);
      this.pers.banner = this.file;
      

  }

    uploadPhoto(){
      let formData = new FormData();
      formData.set("banner", this.file);
      
      this.http.post('http://localhost:8080/persona/banner/1', formData).subscribe((Response)=>{});
    }

}
