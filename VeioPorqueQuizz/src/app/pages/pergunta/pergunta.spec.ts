import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta } from './pergunta';

describe('Pergunta', () => {
  let component: Pergunta;
  let fixture: ComponentFixture<Pergunta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta],
    }).compileComponents();

    fixture = TestBed.createComponent(Pergunta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
