import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevPageBtnComponent } from './prev-page-btn.component';

describe('PrevPageBtnComponent', () => {
  let component: PrevPageBtnComponent;
  let fixture: ComponentFixture<PrevPageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevPageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevPageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
