import { Component, OnInit } from "@angular/core";

interface Tarefa{
    nome: string,
    categoria: string
}

@Component({
templateUrl: "./tarefas.component.html"

})

export class TarefasComponent implements OnInit{

    tarefa =""

    categoriaSelecionada=""
    categoriasLista: string []=[]
    tarefasLista: Tarefa[]=[]

    cadastrarTarefa():void{
        //this.tarefasLista.push(this.)
    }

    ngOnInit(){

    }

    getTarefas(categoria:string):Tarefa[]{
            return this.tarefasLista.filter(tarefaCadastrada) => {

            }
    }

}