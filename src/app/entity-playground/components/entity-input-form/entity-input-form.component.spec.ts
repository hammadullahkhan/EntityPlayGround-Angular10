import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInputFormComponent } from './entity-input-form.component';

describe('EntityInputFormComponent', () => {
  let component: EntityInputFormComponent;
  let fixture: ComponentFixture<EntityInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
