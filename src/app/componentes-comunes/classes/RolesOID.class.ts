export class roles{
    tipo: string;
    codigo: number;
    mensaje: string;
    operacion: {
      login: string,
      listaRolesOID: string[]
    };
    poseeRol: boolean
}