import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalProfessorComponent } from './principal-professor.component';

describe('PrincipalProfessorComponent', () => {
  let component: PrincipalProfessorComponent;
  let fixture: ComponentFixture<PrincipalProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
