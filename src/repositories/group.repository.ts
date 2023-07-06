import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Group } from "src/models/users/group";

//const API_URL = 'https://run.mocky.io/v3/62f94d04-a430-4a64-a1bb-2b3d019cbf58'
const API_URL = 'http://localhost:4300/cardPermission'


@Injectable()
export class GroupRepository {

    constructor(
        private httpClient: HttpClient
    ){}

    getGroups(): Observable<Group[]> {
        return this.httpClient.get<Group[]>(API_URL)
        .pipe(map(values => {
            const groups: Group[]=[];
            for(const value of values){//value seria cada objeto usuario

                console.log(value)

                groups.push(Object.assign(new Group(), value))
            }
            return groups
        }))
    }

    // addUser(user):Observable<CardPermission>{//tipar de user
    //     return this.httpClient.post<CardPermission>(API_URL, user) 
    // }

}
