export class Empleado {
    codigoPlaza: number;
    departamentoDivision: string;
    estadoPuesto: string;
    fechaFin: string;
    fechaIngreso: string;
    fechaInicio: string;
    iniciales: string;
    interino: boolean;
    nit: string;
    noAcuerdo: string;
    fechaAcuerdo: string;
    nombre: string;
    organoDependencia: string;
    puesto: string;
    region: string;
    renglon: string;
    unidadSeccion: string;
    motivo: number;
    observaciones: string;
}

export class EmpleadoPlantilla extends Empleado{
    firmaCorta: string;
    firmaLarga: string;
    usuario: string;
    observaciones: string;
}