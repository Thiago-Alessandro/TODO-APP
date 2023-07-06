import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CadastroComponent } from "src/cadastro/cadastro.component";
import { CategoriaComponent } from "src/categoria/categoria.component";
import { LoginComponent } from "src/login/login.component";
import { PropriedadesComponent } from "src/propriedades/propriedades.component";
import { AuthguardService } from "src/services/auth-guard.services";
import { TarefasComponent } from "src/tarefas/tarefas.component";


const rotas: Route [] = [
    {
        path:'cadastro',
        component:CadastroComponent
    },
    {
        path:'Login',
        component:LoginComponent
    },
    {
        path:'categoria',
        component: CategoriaComponent,
        canActivate: [AuthguardService]
    },
    {
        path:'tarefas',
        component: TarefasComponent,
        canActivate: [AuthguardService]
    },
    {
        path:"propriedades",
        component: PropriedadesComponent,
        canActivate: [AuthguardService]
    },
    {
       path:"",
       redirectTo:"Login",
       pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}