import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {
  isLogged = false;

  constructor(
    private tokenService: TokenService
  ) { }

  logid(): void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }
}
