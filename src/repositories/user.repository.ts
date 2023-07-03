import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

//const API_URL = 'https://run.mocky.io/v3/62f94d04-a430-4a64-a1bb-2b3d019cbf58'
const API_URL = 'http://localhost:4300/usuarios'


@Injectable()
export class UserRepository {

    constructor(
        private httpClient: HttpClient
    ){}

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(API_URL)
        .pipe(map(values => {
            const users: User[]=[];
            for(const value of values){//value seria cada objeto usuario
                
                let groups:string = JSON.stringify(value.groups)
                let cardPermissions:string = JSON.stringify(value.cardPermissions)
                let propertiesPermissions:string = JSON.stringify(value.propertiesPermissions)

                value.groups = groups.slice(1,groups.length - 1).split(', ')
                value.cardPermissions = cardPermissions.slice(1,cardPermissions.length - 1).split(', ')
                value.propertiesPermissions = propertiesPermissions.slice(1,propertiesPermissions.length - 1).split(', ')

                console.log(value)

                users.push(Object.assign(new User(), value))
            }
            return users
        }))
    }

    addUser(user:User):Observable<User>{
        return this.httpClient.post<User>(API_URL, user) 
    }

}
