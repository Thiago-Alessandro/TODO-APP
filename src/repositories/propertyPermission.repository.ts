import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { PropertyPermission } from "src/models/users/propertyPermission";

//const API_URL = 'https://run.mocky.io/v3/62f94d04-a430-4a64-a1bb-2b3d019cbf58'
const API_URL = 'http://localhost:4300/propertyPermission'


@Injectable()
export class PropertyPermissionRepository {

    constructor(
        private httpClient: HttpClient
    ){}

    getPropertyPermissions(): Observable<PropertyPermission[]> {
        return this.httpClient.get<PropertyPermission[]>(API_URL)
        .pipe(map(values => {
            const propertyPermissions: PropertyPermission[]=[];
            for(const value of values){

                console.log(value)

                propertyPermissions.push(Object.assign(new PropertyPermission(), value))
            }
            return propertyPermissions
        }))
    }

    // addUser(user):Observable<CardPermission>{//tipar de user
    //     return this.httpClient.post<CardPermission>(API_URL, user) 
    // }

}
