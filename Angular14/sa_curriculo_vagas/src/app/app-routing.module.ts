import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculos/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculos", component: CurriculoComponent},
  {path: "vagas", component: VagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
