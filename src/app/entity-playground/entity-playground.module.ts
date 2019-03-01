import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityPlaygroundRoutingModule } from './entity-playground-routing.module';
import { MaterialComponentsModule } from "../material.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntityPlaygroundComponent } from './entity-playground.component';
import { EntityInputFormComponent } from './components/entity-input-form/entity-input-form.component';


@NgModule({
  declarations: [EntityPlaygroundComponent, EntityInputFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialComponentsModule,
    EntityPlaygroundRoutingModule
  ]
})
export class EntityPlaygroundModule { }
