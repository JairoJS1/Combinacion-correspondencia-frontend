class ActualizarRevisorBase{
    motivoRevisor: String;
    nuevoEstadoRevisor: string;
}

export class ActuRevisor extends ActualizarRevisorBase{
    nuevoEstadoRevisor: string;
}

export class ActualizacionBody extends ActualizarRevisorBase{
    usuario: string;
    ipUsuario: string;
    fecha: string;
}