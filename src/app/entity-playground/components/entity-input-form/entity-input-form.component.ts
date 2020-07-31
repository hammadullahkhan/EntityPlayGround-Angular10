import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { EntityService } from "../../services/entity.service";
import { EntityMeta, EntityData, FieldModified, Field } from "../../models";

@Component({
  selector: 'app-entity-input-form',
  templateUrl: './entity-input-form.component.html',
  styleUrls: ['./entity-input-form.component.scss']
})
export class EntityInputFormComponent implements OnInit {

  entityMeta: EntityMeta;
  entityData: EntityData;
  entityResult: EntityMeta;
  fieldModified: FieldModified = {};
  @Output() jsonOutput: EventEmitter<FieldModified> = new EventEmitter();

  constructor(private entityService: EntityService) {
    this.fieldModified.$orignal = {};
   }

  ngOnInit() {
    this.getEntityMeta();
    this.getEntityData();
    this.setEntityResult();
  }

  getEntityMeta(): void {
    this.entityService.getEntityMeta()
        .subscribe(meta => this.entityMeta = meta);
  }

  getEntityData(): void {
    this.entityService.getEntityData()
        .subscribe(data => this.entityData = data);
  }

  setEntityResult(): void {
    this.entityResult = { ...this.entityMeta };
    this.entityResult = this.entityService.mapEntityResult(this.entityResult, this.entityData);
    // console.log(this.entityMeta)
    // console.log(this.entityData)
    // console.log(this.entityResult)
  }

  save(): void {
    this.entityService.setSessionStorage('fieldModified', this.fieldModified);
    this.jsonOutput.emit(this.fieldModified);
  }

  registerChange(field: Field): void {
    this.fieldModified[field.name] = field.value;
    this.fieldModified.$orignal[field.name] = field.orignalValue;
  }

  registerChangeDate(type: string, event: MatDatepickerInputEvent<Date>, field): void {
    this.fieldModified[field.name] = event.value;
    this.fieldModified.$orignal[field.name] = field.orignalValue;
  }

}
