import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillasComponetComponent } from './plantillas-componet/plantillas-componet.component';

const routes: Routes = [
  { path: 'creacion', component: PlantillasComponetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
