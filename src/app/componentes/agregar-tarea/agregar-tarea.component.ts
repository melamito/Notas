import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})



export class AgregarTareaComponent implements OnInit {

  formulario:FormGroup;
  constructor(private fb:FormBuilder){
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    });
  }

  ngOnInit():void{
  
  }
  
  EnviarDatos(){
    console.log(this.formulario.get("titulo")?.value);
    console.log(this.formulario.get("estado")?.value);
  }
  
}

 

