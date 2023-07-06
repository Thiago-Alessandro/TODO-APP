import { Injectable } from "@angular/core";

@Injectable()

export class CookiesServices {

    criarCookie(name:string, value:string){
        let data = new Date(2023,12,12)

        document.cookie = name + '=' + value + ';' + 'expires=' + data + ';' ;
    }

    getCookies(name:string){
        const cookies = document.cookie.split('; ')
        for (const cookie of cookies) {
            if(cookie.startsWith(name + "=")){
                return cookie.substring(name.length + 1)
            }
        }
        return null
    }

}