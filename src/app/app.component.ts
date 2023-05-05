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
  tarefasTodo: Tarefa[] =[];
  tarefasDoing: Tarefa[] =[];
  tarefasDone: Tarefa[] =[];


  cadastrarTarefa(){
    const novaTarefa:Tarefa = {
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria
    }

    this.tarefa.nome=""
    if(this.tarefa.categoria=="DOING"){

      this.tarefasDoing.push(novaTarefa)

    }else if(this.tarefa.categoria=="DONE"){

      this.tarefasDone.push(novaTarefa)

    } else{
      this.tarefasTodo.push(novaTarefa)
    }

    this.tarefaLista.push(novaTarefa)

    localStorage.setItem("Tarefas to-do: ", JSON.stringify(this.tarefasTodo))
    localStorage.setItem("Tarefas doing: ", JSON.stringify(this.tarefasDoing))
    localStorage.setItem("Tarefas done: ", JSON.stringify(this.tarefasDone))

    localStorage.setItem("Tarefas totais: ", JSON.stringify(this.tarefaLista))

  }

  ngOnInit(){
    const tarefas1 = localStorage.getItem("Tarefas to-do: ")
    if(tarefas1){
      this.tarefasTodo = JSON.parse(tarefas1)
    }
    const tarefas2 = localStorage.getItem("Tarefas doing: ")
    if(tarefas2){
      this.tarefasDoing = JSON.parse(tarefas2)
    }
    const tarefas3 = localStorage.getItem("Tarefas done: ")
    if(tarefas1){
      this.tarefasDone = JSON.parse(tarefas3)
    }

    const tarefa0 = localStorage.getItem("Tarefas totais: ")
    if(tarefa0){
      this.tarefaLista = JSON.parse(tarefa0)
    }
    
  }

  alterar(tarefa: Tarefa, indice: number){
    localStorage.setItem("Tarefas totais: ", JSON.stringify(this.tarefaLista))

    if(this.tarefa.categoria=="DOING"){

      localStorage.setItem("Tarefas doing: ", JSON.stringify(this.tarefasDoing))//muda na lista que ja tava

      for(let i = 0; i < this.tarefasDoing.length;i++){//passa na lista que tava

        if(this.tarefasDoing[i].categoria=="DONE"){//ve se ta diferente da lista q tava e adiciona na lista certa

          this.tarefasDone.push(this.tarefasDoing[i])

          this.removerDoing(indice)

        } else if(this.tarefasDoing[i].categoria=="TO-DO"){

          this.tarefasTodo.push(this.tarefasDoing[i])

          this.removerDoing(indice)

        }
      }

    }else if(this.tarefa.categoria=="DONE"){

      localStorage.setItem("Tarefas done: ", JSON.stringify(this.tarefasDone))

      for(let i = 0; i < this.tarefasDone.length;i++){

        if(this.tarefasDone[i].categoria=="DOING"){

          this.tarefasDoing.push(this.tarefasDone[i])

          this.removerDone(indice)

        } else if(this.tarefasDone[i].categoria=="TO-DO"){

          this.tarefasTodo.push(this.tarefasDone[i])

          this.removerDone(indice)

        }
      }

    } else{

      localStorage.setItem("Tarefas to-do: ", JSON.stringify(this.tarefasTodo))

      for(let i = 0; i < this.tarefasTodo.length;i++){

        console.log(this.tarefasDoing)

        if(this.tarefasTodo[i].categoria=="DOING"){

          this.tarefasDoing.push(this.tarefasTodo[i])

          this.removerTodo(indice)

        } else if(this.tarefasTodo[i].categoria=="DONE"){

          this.tarefasDone.push(this.tarefasTodo[i])

          this.removerTodo(indice)

        }
      }

    }
    
  }

  removerListaTotal(indice:number){
    this.tarefaLista.splice(indice, 1)
    localStorage.removeItem("Tarefas totais: ")
    localStorage.setItem("Tarefas totais: ", JSON.stringify(this.tarefaLista))
  }

  removerTodo(indice){

    this.tarefasTodo.splice(indice, 1)
    localStorage.removeItem("Tarefas to-do: ")
    localStorage.setItem("Tarefas to-do: ", JSON.stringify(this.tarefasTodo))

    this.removerListaTotal(indice)

  }
  removerDoing(indice){

    this.tarefasDoing.splice(indice, 1)
    localStorage.removeItem("Tarefas doing: ")
    localStorage.setItem("Tarefas doing: ", JSON.stringify(this.tarefasDoing))

    this.removerListaTotal(indice)

  }
  removerDone(indice){

    this.tarefasDone.splice(indice, 1)
    localStorage.removeItem("Tarefas done: ")
    localStorage.setItem("Tarefas done: ", JSON.stringify(this.tarefasDone))

    this.removerListaTotal(indice)

  }

}
