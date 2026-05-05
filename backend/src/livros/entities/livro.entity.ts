export class Livro {
    //Atributos
    id: number;
    titulo: string;
    autor: string;
    qtd_pagina: number;
    disponivel: boolean;
    //Métodos
    //Construtor
    constructor() {
        this.disponivel = true;
    }

}
