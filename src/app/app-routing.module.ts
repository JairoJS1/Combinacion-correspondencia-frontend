import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteDestinatariosComponent } from './componente-destinatarios/componente-destinatarios.component';
import { EditarComponentComponent } from './editar-component/editar-component.component';
import { PlantillasComponetComponent } from './plantillas-componet/plantillas-componet.component';

const routes: Routes = [
  { path: 'creacion', component: ComponenteDestinatariosComponent},
  { path: 'plantilla', component: PlantillasComponetComponent},
  { path: 'carta', component: EditarComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
