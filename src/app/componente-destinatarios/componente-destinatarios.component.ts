import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Servicios } from '../componentes-comunes/services/servicios.service';

@Component({
  selector: 'app-componente-destinatarios',
  templateUrl: './componente-destinatarios.component.html',
  styleUrls: ['./componente-destinatarios.component.scss']
})
export class ComponenteDestinatariosComponent implements OnInit {

  isLinear = false;
  destinatarioForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private services: Servicios
  ) {
    this.destinatarioForm = this.fb.group({
      id: [""],
      nombreDestinatario: ["", Validators.required],
      apellidoDestinatario: ["", Validators.required],
      correoDestinatario: ["", Validators.required],
      direccionDestinatario: ["", Validators.required],
      numeroDestinatario: ["", Validators.required],
    });
   }

  ngOnInit(): void {
  }


  public limpiar() {
    this.destinatarioForm.reset();
    this.regresar();
  }

  
  async guardar() {
   try {
    await this.services.postData(this.services.BASE_URL_DEST, 'destinatario/crear', this.destinatarioForm.value).toPromise();
    
    return Swal.fire({
      title: 'Desea ingresar otro Destinatario',
      icon: 'question',
      showDenyButton: true,
      confirmButtonColor: "#1369A0",
      confirmButtonText: "Si",
      denyButtonText: "No",
      denyButtonColor: "#F44336",
      allowEscapeKey: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.destinatarioForm.reset();
        Swal.fire({
          titleText: `Se ha almacenado la información con éxito.`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false
        });
      }
      else{
        this.regresar();
        Swal.fire({
          titleText: `Se ha almacenado la información con éxito.`,
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false
        });
      }
    })
   } catch (error) {
    console.error(error);
    return Swal.fire({
      titleText: `Error al registrar datos, por favor intente en otro momento.`,
      icon: 'error',
      showCloseButton: true,
      showConfirmButton: false
    });


    
   }
    
     
    
  }

  public regresar() {
    this.services.forcedNavigate(['menu']);
  }
  
}
