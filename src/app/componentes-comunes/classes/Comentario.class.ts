import { Campo } from "./Campo.class";

export class Comentario {
    campos: {
        solicitud: Campo[],
        firma: Campo[]
    };
    comentario: string;
}

export class datosModificacion {
    ipUsuario: string;
    usuario: string;
    fecha: string;
    firmaElectronica: string;
    iniciales: string;
    motivo: string;
    numeroAcuerdo: string;
    observaciones: string;
    solicitudFormulario: string;
    estadoSolicitud: string;
    comentarios: string;
    firmaCorta: string;
    firmaLarga: string;
    arrayDocs: string;
    actualizar: string;
    fechaInico: string;
    fechaFinalizacion: string;
    interino: string;
}