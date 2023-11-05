import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsComponentTsComponent } from './icons.component.ts.component';

describe('IconsComponentTsComponent', () => {
  let component: IconsComponentTsComponent;
  let fixture: ComponentFixture<IconsComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsComponentTsComponent]
    });
    fixture = TestBed.createComponent(IconsComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
