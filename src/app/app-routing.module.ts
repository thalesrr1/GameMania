import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  // Adicione as rotas
  {path: '', component: LoginComponent},
  {path: 'lista', component: ListaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }