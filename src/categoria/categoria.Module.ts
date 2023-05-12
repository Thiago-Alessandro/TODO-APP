import { NgModule } from "@angular/core";
import { CategoriaComponent } from "./categoria.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CategoriaComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class CategoriaModule{

}