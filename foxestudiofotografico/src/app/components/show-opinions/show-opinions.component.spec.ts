import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOpinionsComponent } from './show-opinions.component';

describe('ShowOpinionsComponent', () => {
  let component: ShowOpinionsComponent;
  let fixture: ComponentFixture<ShowOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOpinionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
