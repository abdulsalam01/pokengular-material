import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokellectionComponent } from './pokellection.component';

describe('PokellectionComponent', () => {
  let component: PokellectionComponent;
  let fixture: ComponentFixture<PokellectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokellectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokellectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
