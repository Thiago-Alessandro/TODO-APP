import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
    selector:'app-cadastro',
    templateUrl: './cadastro.component.html',
    //styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent{

    name:string = ''
    password:string=''
    email:string =''

    users:User[]

    constructor(
        private userRepository: UserRepository
      ) {
  
         this.userRepository.getUsers().subscribe({
          next:(value) =>{
              this.users = value
          }
        });
        //copiado de tarefas.component.ts
      }
      
      calcularId():string{
        return JSON.stringify((this.users.length + 1))
      }

      cadastrarUsuario():void{
        let novoUsuario:User = {
            id_user: this.calcularId(),
            name: this.name,
            email: this.email,
            password: this.password,
        }
        this.userRepository.addUser(novoUsuario).subscribe(
            (response) => {
                console.log('usuario adicinado', response)
            },
            (error) => {
                console.error('erro ao adicionar usuario', error)
            }
        )

        this.name = ''
        this.password = ''
        this.email = ''

        this.redirecionarParaLogin()

      }

      redirecionarParaLogin():void{
        location.replace('http://localhost:4200/Login')
    }

}