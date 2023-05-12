import { Component, OnInit } from "@angular/core";

@Component({
templateUrl: "./categoria.component.html"

})

export class CategoriaComponent implements OnInit{

    categoriasLista:string [] = []

    nomeCategoria:string = ''

    ngOnInit():void{

        let categoriasValor = localStorage.getItem('categorias')

        if(categoriasValor){
            this.categoriasLista = JSON.parse(categoriasValor)
        }

        
    }

    cadastrarCategoria(){
        this.categoriasLista.push(this.nomeCategoria)
        localStorage.setItem('categorias', JSON.stringify(this.categoriasLista))
    }

}