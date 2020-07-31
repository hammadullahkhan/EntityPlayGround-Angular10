import { Component, OnInit, EventEmitter, Output, Inject, LOCALE_ID } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';

import { EntityService } from "../../services/entity.service";
import { EntityMeta, EntityData, FieldModified, Field } from "../../models";
import { environment as ENV } from '../../../../environments/environment';

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

  constructor(private entityService: EntityService, @Inject(LOCALE_ID) private locale: string) {
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
  }

  save(): void {
    this.entityService.setSessionStorage(ENV.entityMetaSessionKey, this.fieldModified);
    this.jsonOutput.emit(this.fieldModified);
  }

  registerChange(field: Field): void {
    this.fieldModified[field.name] = field.value;
    this.fieldModified.$orignal[field.name] = field.orignalValue;
  }

  registerChangeDate(type: string, event: MatDatepickerInputEvent<Date>, field: FieldModified): void {
    this.fieldModified[field.name] = this.transformDate(event.value); //formatDate(event.value, 'yyy-MM-dd', this.locale);
    this.fieldModified.$orignal[field.name] = this.transformDate(field.orignalValue); //formatDate(field.orignalValue, 'yyy-MM-dd', this.locale);
  }

  private transformDate(dateStr: Date) {
    return formatDate(dateStr, ENV.appDateFormat, this.locale);
  }

}
