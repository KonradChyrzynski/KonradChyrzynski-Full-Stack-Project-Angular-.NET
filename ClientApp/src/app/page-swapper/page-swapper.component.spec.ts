import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSwapperComponent } from './page-swapper.component';

describe('PageSwapperComponent', () => {
  let component: PageSwapperComponent;
  let fixture: ComponentFixture<PageSwapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSwapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSwapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
