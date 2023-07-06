import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { CookiesServices } from "src/services/cookies-services";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'
    // styleUrls:['./login.component.css'],
    
})

export class LoginComponent{
    
    password:string
    name:string

    users:User[]

    loginErrado:boolean

    constructor(
        private userRepository: UserRepository,
        private cookiesServices: CookiesServices
      ) {
  
         this.userRepository.getUsers().subscribe({
          next:(value) =>{
              this.users = value
          }
        });
        //copiado de tarefas.component.ts
      }

    // ngOnInit(): void {
        
    // }

    verificarLogin():void{
        for(let user of this.users){
            if(this.name === user.name && this.password === user.password){
                this.loginErrado = false
                // localStorage.clear
                localStorage.setItem('usuarioLogadoId', user.id_user)
                this.cookiesServices.criarCookie('usuario', JSON.stringify(user))
                location.replace('http://localhost:4200/tarefas')
                return
            }
        }
        this.loginErrado = true
        this.password = ""
        this.name = ""
    }

    redirecionarParaCadastro():void{
        location.replace('http://localhost:4200/cadastro')
    }

}