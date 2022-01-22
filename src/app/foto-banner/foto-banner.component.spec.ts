import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoBannerComponent } from './foto-banner.component';

describe('FotoBannerComponent', () => {
  let component: FotoBannerComponent;
  let fixture: ComponentFixture<FotoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
