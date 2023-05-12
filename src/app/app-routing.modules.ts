import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/categoria/categoria.component";
import { TarefasComponent } from "src/tarefas/tarefas.component";


const rotas: Route [] = [
    {
        path:'categoria',
        component: CategoriaComponent
    },
    {
        path:'tarefas',
        component: TarefasComponent
    },
    {
       path:" ",
       redirectTo:"tarefas",
       pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}