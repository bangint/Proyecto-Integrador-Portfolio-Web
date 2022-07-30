import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreDeComponent } from './sobre-de.component';

describe('SobreDeComponent', () => {
  let component: SobreDeComponent;
  let fixture: ComponentFixture<SobreDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
