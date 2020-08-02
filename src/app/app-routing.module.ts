import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entity-playground',
    pathMatch: 'full'
  },
  {
    path: 'entity-playground',
    loadChildren: () => import('./entity-playground/entity-playground.module').then(m => m.EntityPlaygroundModule)
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
