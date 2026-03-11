import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power } from './power';

describe('Power', () => {
  let component: Power;
  let fixture: ComponentFixture<Power>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Power],
    }).compileComponents();

    fixture = TestBed.createComponent(Power);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
