import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemensComponent } from './elemens.component';

describe('ElemensComponent', () => {
  let component: ElemensComponent;
  let fixture: ComponentFixture<ElemensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElemensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElemensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
