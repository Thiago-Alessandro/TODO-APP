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
import { HttpClientModule } from '@angular/common/http';
import { AuthguardService } from 'src/services/auth-guard.services';
import { LoginModule } from 'src/login/login.module';
import { CadastroModule } from 'src/cadastro/cadastro.module';


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
    PropriedadesModule,
    HttpClientModule,
    LoginModule,
    CadastroModule
  ],
  providers: [
    UserRepository,
    AuthguardService
  ],//importanteisso daqui hein
  bootstrap: [AppComponent]
})
export class AppModule { }
