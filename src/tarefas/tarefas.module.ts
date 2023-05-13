import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TarefasComponent } from "./tarefas.component";


@NgModule({
    declarations:[ 
        TarefasComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})

export class TarefasModule{}