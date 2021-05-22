import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Nota } from '../interfaces/Nota';



@Injectable({
  providedIn: 'root'
})
export class NotasService {
  
  url:string="http://127.0.0.1/Notas/backend/";

  constructor(private servicio:HttpClient) {  }

  GuardarDatos(Lista:Array<Nota>){
    console.log(Lista);
    //this.servicio.post('${this.url}datos.php',JSON.stringify(Lista));
    
    return this.servicio.get('${this.url}datos.php')
  }
}
