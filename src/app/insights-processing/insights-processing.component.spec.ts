import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsProcessingComponent } from './insights-processing.component';

describe('InsightsProcessingComponent', () => {
  let component: InsightsProcessingComponent;
  let fixture: ComponentFixture<InsightsProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
