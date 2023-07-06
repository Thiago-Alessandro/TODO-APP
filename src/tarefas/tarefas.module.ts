import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TarefasComponent } from "./tarefas.component";
import { CardPermissionRepository } from "src/repositories/cardPermission.repository";
import { PropertyPermissionRepository } from "src/repositories/propertyPermission.repository";
import { CookiesServices } from "src/services/cookies-services";


@NgModule({
    declarations:[ 
        TarefasComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    providers:[
        CardPermissionRepository,
        PropertyPermissionRepository,
        CookiesServices
    ]
})

export class TarefasModule{}