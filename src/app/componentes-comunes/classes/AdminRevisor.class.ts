class RevisorBase{
    nitRevisor: String;
    nombreRevisor: String;
    estadoRevisor: number;
    unidadRevisor: String;
    puestoRevisor: String;
    usuarioLogin: String;
}

export class AdminRevisor extends RevisorBase{
    estadoDetalle: string;
    cargaTrabajo: number;
    motivoRevisor: String;
    usuarioLogin: String;
    
}

export class AdministradorBody extends RevisorBase{
    usuario: string;
    ipUsuario: string;
    fecha: string;
}