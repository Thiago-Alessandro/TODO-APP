import { Component, OnInit } from "@angular/core";

interface Tarefa{
    descricao: string,
    categoria: string,
    editando: boolean;
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

    tarefaEditando: Tarefa = null; //recebe a tarefa que esta sendo editada

    cadastrarTarefa():void{

        let tarefaCadastrada: Tarefa = {
            descricao: this.descricaoTarefa,
            categoria: this.categoriaSelecionada,
            editando: false
        }

        this.tarefasLista.push(tarefaCadastrada)
        localStorage.setItem("tarefas", JSON.stringify(this.tarefasLista))

        this.descricaoTarefa = ""
        this.categoriaSelecionada = "" //limpa input
        
    }

    ngOnInit(){

        let Tarefas = localStorage.getItem("tarefas");//recupera os itens que estao no localStorage

        if (Tarefas) { //se nao estiver nulo
            this.tarefasLista = JSON.parse(Tarefas);

             this.tarefasLista.forEach((tarefa) => {
                tarefa.editando = false;
                // seta o editando para false (se nao da problema caso alguma propriedade antes ficou salva como true
                // e recarregou a pagina [problema com estar nulo] )
             });
        }

        let Categorias = localStorage.getItem("categorias");

        if (Categorias) {
            this.categoriasLista = JSON.parse(Categorias);
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

    editar(tarefa: Tarefa){
        this.tarefaEditando = tarefa; 
        tarefa.editando = true

        this.descricaoTarefa = tarefa.descricao
        this.categoriaSelecionada = tarefa.categoria
        //faz um pre set nos inputs com os atributos da tarefa em edicao

    }

    salvar(tarefa):void{

            this.tarefaEditando.descricao = this.descricaoTarefa; 
            this.tarefaEditando.categoria = this.categoriaSelecionada;
            //seta as propriedades da tarefa que esta em edicao para com o conteudo dos inputs

            localStorage.setItem("tarefas", JSON.stringify(this.tarefasLista));
      
          this.descricaoTarefa = "";
          this.categoriaSelecionada = ""; // Limpa o input

          tarefa.editando = false //tira a tarefa que chamou a funcao (mesma que esta sendo editada) do modo de edicao
          this.tarefaEditando = null;  //seta a variavel de "qual tarefa esta sendo editada" para nulo
      
          
    }

    cancelar():void{

        this.tarefaEditando.editando=false
        //tira a tarefa que estava sendo editada do modo de edicao

        this.tarefaEditando = null
        //seta a variavel de "qual tarefa esta sendo editada" para nulo

        this.descricaoTarefa = ""
        this.categoriaSelecionada = ""
    }

}