import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './component/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'facturas', component: ClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
