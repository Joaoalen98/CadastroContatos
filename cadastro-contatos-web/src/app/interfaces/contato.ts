export interface Contato {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    tipoContato: TipoContato;
}

export enum TipoContato {
    amigo = 1,
    melhorAmigo = 2,
    familiar = 3,
}
