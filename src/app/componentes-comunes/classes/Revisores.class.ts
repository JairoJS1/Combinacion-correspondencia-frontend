class revisoresBase {
  idSolicitud: number;
  fechaSolicitud: string;
  nombreSolicitante: string;
  dependenciaSolicitante: string;
  tipoSolicitud: String;
  estadoSolicitud: String;
  diasRestantes: string;
  diasDescanso: number;
}
export class Revisores extends revisoresBase {
  idSolicitud: number;
  idEstadoSolicitud: number;
  fechaSolicitud: string;
  nombreSolicitante: string;
  dependenciaSolicitante: string;
  tipoSolicitud: String;
  estadoSolicitud: String;
  diasRestantes: string;
  diasDescanso: number;
  diaRestante: number;
  processId: string;
}

export class ConsultaRevisor {
  login: string;
  nitRevisor: string;
  nombreRevisor: string;
  unidadRevisor: string;
  puestoRevisor: string;
  estadoRevisor: number;
}
