import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityPlaygroundComponent } from "./entity-playground.component";

const routes: Routes = [
  {
    path: '',
    component: EntityPlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityPlaygroundRoutingModule { }
