import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreAdderComponent } from './score-adder.component';

describe('ScoreAdderComponent', () => {
  let component: ScoreAdderComponent;
  let fixture: ComponentFixture<ScoreAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
