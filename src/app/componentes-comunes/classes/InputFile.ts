import { GuardarDocumentosAcs } from "./GuardarDocumentosAcs.class";

export class InputFile extends GuardarDocumentosAcs {
    acepta: string[];
    type?: string;

    constructor(id: string, nombre: string, acepta: string[], type?: string) {
        super(id, nombre);
        this.acepta = acepta;
        this.type = type;
    }
}