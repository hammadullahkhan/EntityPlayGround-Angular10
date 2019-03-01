import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    redirectTo: '/entity-playground',
    pathMatch: 'full'
    // loadChildren: './entity-playground/entity-playground.module#EntityPlaygroundModule'
  },
  {
    path: 'entity-playground',
    loadChildren: './entity-playground/entity-playground.module#EntityPlaygroundModule'
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
