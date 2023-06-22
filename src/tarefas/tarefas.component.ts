import { Component, OnInit } from "@angular/core";
import { CategoriaComponent } from "src/categoria/categoria.component";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

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

    propriedadesLista:string[]=[]
    categoriasLista: string []=[]
    tarefasLista: Tarefa[]=[]

    tarefaEditando: Tarefa = null; //recebe a tarefa que esta sendo editada

    posicaoATrocar: number

    private userId: string = 'joao.silva';
    private users: User[] = [];
    user!: User;
  
    constructor(
      private userRepository: UserRepository
    ) {
      this.users = this.userRepository.getUsers();
      this.user = this.getUsuarioLogado();
      console.log(this.user);
    }


    adicionarTarefa(): void {
        if (!this.hasPermission('Add')) {
          alert('Não pode cadastrar');
          return;
        }
        alert('Pode cadastrar');

        if(this.verificarTarefa()){//rever verificacao (yes baby)

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
    }
    
      editarTarefa(tarefa:Tarefa): void {//n tinha parametro
        if (!this.hasPermission('Edit')) {
          alert('Não pode editar');
          return;
        }
        this.editar(tarefa)
        alert('Pode editar');
      }
    
      removerTarefaUsuario(tarefa:Tarefa): void {
        if (!this.hasPermission('Remove')) {
          alert('Não pode remover');
          return;
        }
        this.removerTarefa(tarefa)
        alert('Pode remover');
      }
    
      hasPermission(permission: string): boolean {
        return this.user.cardPermissions.some((cardPermission) => {
          return cardPermission === permission;
        });
      }
    
      private getUsuarioLogado(): User {
        return this.users.find((user) => {
          return user.id === this.userId
        }) as User;
      }



    //aqui em baixo é meu// em cima do prof

    cadastrarTarefa():void{
        if(this.verificarTarefa()){//rever verificacao (yes baby)
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
    }

    ngOnInit(){

        let propriedades = localStorage.getItem("propriedades")

        if(propriedades){

            this.propriedadesLista =  JSON.parse(propriedades)
        }


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

    ondrop(){
        console.log("teste drop aaaaaaaa")
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

    verificarTarefa():boolean{
        
        if(this.descricaoTarefa == "" || this.categoriaSelecionada==""){//se for nula
            return false
        }

        for(let tarefa of this.tarefasLista){//se ja tiver uma igual
            if(this.descricaoTarefa == tarefa.descricao){
                return false
            }
        }
        return true
    }

    categoriaSobre: string;

    onDragEnd(tarefa: Tarefa){

        if(!this.hasPermission('MoveCard')){
            alert('parado ai, nao se mova amigo')
        }else{
            console.log(tarefa)
            console.log(this.categoriaSobre+ " teste")

            // this.cate

            tarefa.categoria=this.categoriaSobre

            // this.categoriasLista.push()

            this.mudarPosicao(tarefa)

            localStorage.setItem("tarefas",JSON.stringify(this.tarefasLista))

            this.posicaoATrocar = null
            alert('pode edita meu mano')

        }     
    }
    onDragOver(categoria: string){
        console.log("categoria: "+categoria)
        this.categoriaSobre = categoria
    }
      
    mudarPosicao(tarefa: Tarefa ){
        let index = this.tarefasLista.indexOf(tarefa)

        let removido = this.tarefasLista.splice(index,1)[0]

        this.tarefasLista.splice(this.posicaoATrocar,0,removido)
    }

    pegarPosicao(tarefa: Tarefa){
        this.posicaoATrocar = this.tarefasLista.indexOf(tarefa)
    }
}