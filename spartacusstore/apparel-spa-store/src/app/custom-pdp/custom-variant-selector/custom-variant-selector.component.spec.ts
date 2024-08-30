import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVariantSelectorComponent } from './custom-variant-selector.component';

describe('CustomVariantSelectorComponent', () => {
  let component: CustomVariantSelectorComponent;
  let fixture: ComponentFixture<CustomVariantSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomVariantSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomVariantSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
