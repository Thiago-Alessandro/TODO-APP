import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { CardPermissionRepository } from "src/repositories/cardPermission.repository";

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers:[
        CardPermissionRepository
    ]

})

export class LoginModule{
    
}