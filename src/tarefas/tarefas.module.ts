import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TarefasComponent } from "./tarefas.component";
import { CardPermissionRepository } from "src/repositories/cardPermission.repository";


@NgModule({
    declarations:[ 
        TarefasComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    providers:[
        CardPermissionRepository
    ]
})

export class TarefasModule{}