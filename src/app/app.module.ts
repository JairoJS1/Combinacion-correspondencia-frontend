import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantillasComponetComponent } from './plantillas-componet/plantillas-componet.component';

import { Servicios } from './componentes-comunes/services/servicios.service';
import { MaterialModule } from './componentes-comunes/utils/material-module';
import { ComponenteDestinatariosComponent } from './componente-destinatarios/componente-destinatarios.component';
@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponetComponent,
    ComponenteDestinatariosComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    Servicios,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
