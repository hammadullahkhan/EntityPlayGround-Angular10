import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityPlaygroundComponent } from './entity-playground.component';

describe('EntityPlaygroundComponent', () => {
  let component: EntityPlaygroundComponent;
  let fixture: ComponentFixture<EntityPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
