import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CookiesServices } from "./cookies-services";

@Injectable()
export class AuthguardService implements CanActivate {
    constructor(
        private cookieServices:CookiesServices
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.cookieServices.getCookies('usuario')){
            return true
        }
        return false
        //throw new Error("Method not implemented.");
    }

}