import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteDestinatariosComponent } from './componente-destinatarios/componente-destinatarios.component';
import { PlantillasComponetComponent } from './plantillas-componet/plantillas-componet.component';

const routes: Routes = [
  { path: 'creacion', component: ComponenteDestinatariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
