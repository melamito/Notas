import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotasComponent } from '../app/componentes/lista-notas/lista-notas.component'
import { AgregarTareaComponent } from '../app/componentes/agregar-tarea/agregar-tarea.component'
import { EditarTareaComponent } from '../app/componentes/editar-tarea/editar-tarea.component'

const routes: Routes = [
  {path:'',component:AgregarTareaComponent},
  {path:'notas',component:ListaNotasComponent},
  {path:'editar',component:EditarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
