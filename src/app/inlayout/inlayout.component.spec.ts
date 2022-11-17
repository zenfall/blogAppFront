import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayoutComponent } from './inlayout.component';

describe('InlayoutComponent', () => {
  let component: InlayoutComponent;
  let fixture: ComponentFixture<InlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
