import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { CardPermissionRepository } from "src/repositories/cardPermission.repository";
import { CookiesServices } from "src/services/cookies-services";

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers:[
        CardPermissionRepository,
        CookiesServices
    ]

})

export class LoginModule{
    
}