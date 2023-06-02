import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentOCRComponent } from './document-ocr.component';

describe('DocumentOcrComponent', () => {
  let component: DocumentOCRComponent;
  let fixture: ComponentFixture<DocumentOCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentOCRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentOCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
