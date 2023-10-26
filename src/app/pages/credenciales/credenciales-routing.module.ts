import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialesPage } from './credenciales.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialesPageRoutingModule {}
