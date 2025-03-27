import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseServiceComponent } from './use-service.component';

describe('UseServiceComponent', () => {
  let component: UseServiceComponent;
  let fixture: ComponentFixture<UseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
