import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageBtnComponent } from './next-page-btn.component';

describe('NextPageBtnComponent', () => {
  let component: NextPageBtnComponent;
  let fixture: ComponentFixture<NextPageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
