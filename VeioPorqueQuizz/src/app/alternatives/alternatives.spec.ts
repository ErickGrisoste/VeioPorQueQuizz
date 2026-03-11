import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alternatives } from './alternatives';

describe('Alternatives', () => {
  let component: Alternatives;
  let fixture: ComponentFixture<Alternatives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alternatives],
    }).compileComponents();

    fixture = TestBed.createComponent(Alternatives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
