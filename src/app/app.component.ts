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
    localStorage.setItem("Tarefas: ", JSON.stringify(this.tarefaLista))

  }

  ngOnInit(){
    const tarefas = localStorage.getItem("Tarefas: ")
    if(tarefas){
      this.tarefaLista = JSON.parse(tarefas)
    }
  }

  salvar(tarefa: Tarefa){
    localStorage.setItem("Tarefas: ", JSON.stringify(this.tarefaLista))
  }

  remover(indice:number){
    this.tarefaLista.splice(indice, 1)
    localStorage.removeItem("Tarefas: ")
    localStorage.setItem("Tarefas: ", JSON.stringify(this.tarefaLista))
  }

}
