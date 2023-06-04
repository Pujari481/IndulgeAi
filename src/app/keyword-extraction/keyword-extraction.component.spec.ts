import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordExtractionComponent } from './keyword-extraction.component';

describe('KeywordExtractionComponent', () => {
  let component: KeywordExtractionComponent;
  let fixture: ComponentFixture<KeywordExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordExtractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
