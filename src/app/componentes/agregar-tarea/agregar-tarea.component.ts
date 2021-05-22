import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Nota } from '../../interfaces/Nota';
import { NotasService } from '../../servicio/notas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})



export class AgregarTareaComponent implements OnInit {

  formulario:FormGroup;
  constructor(private fb:FormBuilder,private servicio:NotasService){
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    });
  }

  ngOnInit():void{
  
  }

  EnviarDatos(){
    let lista:Array<Nota>=[{
        titulo:this.formulario.get("titulo")?.value,
        estado:this.formulario.get("estado")?.value,
        descripcion:this.formulario.get("descripcion")?.value
      }
    ];

    this.servicio.GuardarDatos( lista ).subscribe(datos=>{
      console.log(datos);
    });

  }
  
}

 

