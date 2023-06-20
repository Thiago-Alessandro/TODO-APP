import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { TarefasModule } from 'src/tarefas/tarefas.module';
import { CategoriaModule } from 'src/categoria/categoria.Module';
import { PropriedadesComponent } from 'src/propriedades/propriedades.component';
import { PropriedadesModule } from 'src/propriedades/propriedades.module';
import { UserRepository } from 'src/repositories/user.repository';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CategoriaModule,
    TarefasModule,
    PropriedadesModule
  ],
  providers: [UserRepository],//importanteisso daqui hein
  bootstrap: [AppComponent]
})
export class AppModule { }
