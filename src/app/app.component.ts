import { Component } from '@angular/core';

  interface Tarefa{
    nome: string,
    categoria:string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO-APP';

  tarefa: Tarefa = {
    nome: "",
    categoria:""
  }

  tarefaLista:Tarefa []=[];

  cadastrarTarefa(){
    const novaTarefa:Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    }

    this.tarefa.nome=""

    this.tarefaLista.push(novaTarefa)
    console.log(novaTarefa + "opa2")
    console.log(JSON.stringify(this.tarefaLista))

    localStorage.setItem("Tarefas totais: ", JSON.stringify(this.tarefaLista))

  }

  ngOnInit(){
    const tarefa0 = localStorage.getItem("Tarefas totais: ")
    if(tarefa0){
      this.tarefaLista = JSON.parse(tarefa0)
    }
    
  }

  alterar(tarefa: Tarefa){

    localStorage.setItem("Tarefas totais: ", JSON.stringify(this.tarefaLista))

  //fazer ele reescrever alterado
    
  }

  removerListaTotal(indice:number){
    this.tarefaLista.splice(indice, 1)
    localStorage.removeItem("Tarefas totais: ")
    localStorage.setItem("Tarefas totais: ", JSON.stringify(this.tarefaLista))
  }


}
