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
    
    entityResult.field = entityResult.field.filter(field => !field.system);
    entityResult.field.forEach(field => {
      field.orignalValue = entityData[field.name] ? entityData[field.name] : null; 
      field.value = field.orignalValue;
    });
    
    return entityResult;
  }

  public setSessionStorage (key: string, fieldModified: FieldModified): void {
    if (window.sessionStorage) {
      sessionStorage.setItem(key, JSON.stringify(fieldModified));
    }
  }
}
