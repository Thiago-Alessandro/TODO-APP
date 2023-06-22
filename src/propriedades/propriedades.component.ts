import { Component, OnInit } from "@angular/core";

interface Propriedade {

    nome:string,
    tipo:string,
    categoria: string

}

@Component({
    templateUrl:"./propriedades.component.html",
    styleUrls:["./propriedades.component.css"]
})

export class PropriedadesComponent implements OnInit{

    propriedadesLista:Propriedade []=[]

    categoriasLista: string []=[]

    categoriaSelecionada:string = ""
    nomePropriedade:string = ""
    tipoPropriedade:string = ""

    ngOnInit(): void {

        let propriedades = localStorage.getItem("propriedades")

        if(propriedades){

            this.propriedadesLista =  JSON.parse(propriedades)
        }

        let Categorias = localStorage.getItem("categorias");

        if (Categorias) {
            this.categoriasLista = JSON.parse(Categorias);
        }
    }

    adicionarPropriedade(){

        let propriedadeAdicionada: Propriedade = {
        
            nome: this.nomePropriedade,
            tipo: this.tipoPropriedade,
            categoria: this.categoriaSelecionada

        }

        this.propriedadesLista.push(propriedadeAdicionada)

        localStorage.setItem("propriedades",JSON.stringify(this.propriedadesLista))

        this.categoriaSelecionada = ""
        this.nomePropriedade = ""
        this.tipoPropriedade = ""

    }

    //n ta fazendo as verificacoes ainda ver la no tarefas q ta certo

}