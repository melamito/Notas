import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})



export class AgregarTareaComponent implements OnInit {

  estadoSeleccionado:any = '';

  estados:any[]= ['Iniciado','Enproceso','Terminado'];

  ngOnInit():void{
    let estado=this.estadoSeleccionado;
    console.log(estado);
  }
  

  
}

 

