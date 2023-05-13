import { Component, OnInit } from "@angular/core";

interface Tarefa{
    descricao: string,
    categoria: string,
}

@Component({
templateUrl: "./tarefas.component.html",
styleUrls:["./tarefas.component.css"]

})

export class TarefasComponent implements OnInit{

    categoriaSelecionada:string="";
    descricaoTarefa:string ="";

    categoriasLista: string []=[]
    tarefasLista: Tarefa[]=[]

    cadastrarTarefa():void{

        let tarefaCadastrada: Tarefa = {
            descricao: this.descricaoTarefa,
            categoria: this.categoriaSelecionada,
        }

        this.tarefasLista.push(tarefaCadastrada)
        localStorage.setItem("tarefas", JSON.stringify(this.tarefasLista))

        this.descricaoTarefa = ""
        this.categoriaSelecionada = ""
        
    }

    ngOnInit(){

        let Tarefas = localStorage.getItem("tarefas")

        if(Tarefas){
            this.tarefasLista = JSON.parse(Tarefas)
        }

        let Categorias = localStorage.getItem("categorias")

        if(Categorias){
            this.categoriasLista = JSON.parse(Categorias)
        }

    }

    getTarefas(categoria:string):Tarefa[]{

        return this.tarefasLista.filter((tarefaChecagem) => {

            return tarefaChecagem.categoria === categoria;
        });
    }

    removerTarefa(tarefa){
        this.tarefasLista.splice(this.tarefasLista.indexOf(tarefa), 1)
        localStorage.setItem("tarefas", JSON.stringify(this.tarefasLista))
    }

    editando: boolean = false

    editar(tarefa){
        this.editando = true
        tarefa.editando = true
        this.descricaoTarefa = tarefa.descricao
        this.categoriaSelecionada = tarefa.categoria

    }

    salvar(tarefa):void{
        let tarefaEditada:Tarefa ={
            descricao: this.descricaoTarefa,
            categoria: this.categoriaSelecionada,
        } 

        this.tarefasLista.splice(this.tarefasLista.indexOf(tarefa), 1, tarefaEditada)
        localStorage.setItem("tarefas", JSON.stringify(this.tarefasLista))

        this.descricaoTarefa = ""
        this.categoriaSelecionada = ""

        this.editando = false
    }

    cancelar():void{
        this.editando = false
        this.descricaoTarefa = ""
        this.categoriaSelecionada = ""
    }

}