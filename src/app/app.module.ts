import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { ListaNotasComponent } from './componentes/lista-notas/lista-notas.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './componentes/footer/footer.component';

import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AgregarTareaComponent,
    ListaNotasComponent,
    EditarTareaComponent,
    HeaderComponent,
    FooterComponent,
    ListaNotasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
