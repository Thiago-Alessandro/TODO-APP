import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { TarefasModule } from 'src/tarefas/tarefas.module';
import { CategoriaModule } from 'src/categoria/categoria.Module';
import { PropriedadesComponent } from 'src/propriedades/propriedades.component';
import { PropriedadesModule } from 'src/propriedades/propriedades.module';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
