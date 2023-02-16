import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcaPageOneComponent } from './rca-page-one.component';

describe('RcaPageOneComponent', () => {
  let component: RcaPageOneComponent;
  let fixture: ComponentFixture<RcaPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcaPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcaPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
