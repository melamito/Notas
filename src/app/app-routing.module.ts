import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LitaTareasComponent } from '../app/componentes/lita-tareas/lita-tareas.component'
import { AgregarTareaComponent } from '../app/componentes/agregar-tarea/agregar-tarea.component'
import { EditarTareaComponent } from '../app/componentes/editar-tarea/editar-tarea.component'

const routes: Routes = [
  {path:'',component:AgregarTareaComponent},
  {path:'tareas',component:LitaTareasComponent},
  {path:'editar',component:EditarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
