import { Component } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from "src/models/users/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private userId : string = "joao.silva"//fazer no cadastro de tarefas
  private users:User[]=[]
  user: User | undefined

    constructor(private userRepository:UserRepository){
      console.log(this.userRepository.getUsers())
      this.getUsuarioLogado()
      console.log(this.user)
    }

    private getUsuarioLogado():User{
      return this.users.find((user) => {
      return user.id === this.userId
      })
    }

    private hasPermission(permission:string):boolean{//vai ser importante uma hora ae
      return this.user.cardPermissions.some((cardPermission)=>{
        return cardPermission === permission
      })
    }

}
