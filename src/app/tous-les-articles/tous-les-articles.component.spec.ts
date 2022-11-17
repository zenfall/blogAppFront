import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesArticlesComponent } from './tous-les-articles.component';

describe('TousLesArticlesComponent', () => {
  let component: TousLesArticlesComponent;
  let fixture: ComponentFixture<TousLesArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousLesArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousLesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
