import { Component, OnInit } from "@angular/core";

@Component({
templateUrl: "./categoria.component.html",
styleUrls: ["./categoria.component.css"]

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

    cadastrarCategoria():void{
        this.categoriasLista.push(this.nomeCategoria)
        localStorage.setItem('categorias', JSON.stringify(this.categoriasLista))

        this.nomeCategoria = ''
    }

    removerCategoria(categoria):void{
        this.categoriasLista.splice(this.categoriasLista.indexOf(categoria),1)
        localStorage.setItem("categorias",JSON.stringify(this.categoriasLista))
    }

}