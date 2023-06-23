import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class TesteService{

    tema = new BehaviorSubject("escuro")

    getTema(): Observable<string>{
        return this.tema.asObservable()
    }
    // setTema(value:string):void{
    //     //n sei se era string o parametro msm

    // }

}