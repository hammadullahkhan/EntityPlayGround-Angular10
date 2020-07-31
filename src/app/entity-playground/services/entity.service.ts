import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EntityMeta, EntityData, FieldModified, Field } from "../models";
import { environment } from 'src/environments/environment';
import { ENTITY_META, ENTITY_DATA } from "src/input";

@Injectable({
  providedIn: 'root',
})
export class EntityService {

  private serviceEndPoint = environment.baseUrl + 'entity'

  constructor() { }

  public getEntityMeta(): Observable<EntityMeta> {
    return of(ENTITY_META);
  }

  public getEntityData(): Observable<EntityData> {
    return of(ENTITY_DATA);
  }

  public mapEntityResult(entityResult: EntityMeta, entityData: EntityData): EntityMeta {
    
    entityResult.field = this.filterBySystem(entityResult.field);
    entityResult.field.forEach(field => {
      field.orignalValue = entityData[field.name] ? entityData[field.name] : null; 
      field.value = field.orignalValue;      
    });
    entityResult.name = entityData.label;
    // console.log(entityResult)    
    return entityResult;
  }

  public filterBySystem(fields) {
    return fields.filter(field => !field.system);
  }

  public setSessionStorage (key: string, fieldModified: FieldModified): void {
    if (window.sessionStorage) {
      sessionStorage.setItem(key, JSON.stringify(fieldModified));
    }
  }
}
