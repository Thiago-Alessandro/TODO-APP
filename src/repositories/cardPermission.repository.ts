import { Injectable } from "@angular/core";
import { CardPermission } from "src/models/users/cardPermission";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

//const API_URL = 'https://run.mocky.io/v3/62f94d04-a430-4a64-a1bb-2b3d019cbf58'
const API_URL = 'http://localhost:4300/cardPermission'


@Injectable()
export class CardPermissionRepository {

    constructor(
        private httpClient: HttpClient
    ){}

    getUsers(): Observable<CardPermission[]> {
        return this.httpClient.get<CardPermission[]>(API_URL)
        .pipe(map(values => {
            const cardPermissions: CardPermission[]=[];
            for(const value of values){//value seria cada objeto usuario

                console.log('testando aoaoaooa')

                console.log(value)

                cardPermissions.push(Object.assign(new CardPermission(), value))
            }
            return cardPermissions
        }))
    }

    // addUser(user):Observable<CardPermission>{//tipar de user
    //     return this.httpClient.post<CardPermission>(API_URL, user) 
    // }

}
