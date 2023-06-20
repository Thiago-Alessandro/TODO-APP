import { Injectable } from "@angular/core";
import * as users from '../data/users';
import { User } from "src/models/users/user";

@Injectable()

export class UserRepository{

    getUsers(){
        return users
    }

}