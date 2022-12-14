import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://portafoliowe.herokuapp.com/persona/';
  //URL = 'http://localhost:8080/persona/';
  
  constructor(private http: HttpClient) { }

  public getpersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ `buscar/${1}`);
  }

  public personaEditar( pers: persona): Observable<persona>{
    return this.http.put<any>(this.URL+`update/${1}`, pers);
  }
 
}
