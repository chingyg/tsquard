import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulietsaintclairPdfComponent } from './julietsaintclair-pdf.component';

describe('JulietsaintclairPdfComponent', () => {
  let component: JulietsaintclairPdfComponent;
  let fixture: ComponentFixture<JulietsaintclairPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulietsaintclairPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulietsaintclairPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
