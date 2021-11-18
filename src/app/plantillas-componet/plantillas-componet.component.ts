import { Component, OnInit } from '@angular/core';
import { Destinatario } from '../componentes-comunes/classes/Solicitud.class';
import { Servicios } from '../componentes-comunes/services/servicios.service';

@Component({
  selector: 'app-plantillas-componet',
  templateUrl: './plantillas-componet.component.html',
  styleUrls: ['./plantillas-componet.component.scss']
})
export class PlantillasComponetComponent implements OnInit {

  constructor( private services: Servicios,) { }

  ngOnInit() {
    this.services.getData<Destinatario[]>(this.services.BASE_URL_DEST, `obtener/destinatario/${1}`)
    .toPromise().then(res => {
     // this.addOrRemoveControlls(res, true);
      //this.solicitudes = res;
     // console.log(this.administradorForm);
      //this.spinner.hide();
      console.log(res)
    }).catch();
  }

}
