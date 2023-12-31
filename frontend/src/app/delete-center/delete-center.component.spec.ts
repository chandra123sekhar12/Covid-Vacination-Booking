import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCenterComponent } from './delete-center.component';

describe('DeleteCenterComponent', () => {
  let component: DeleteCenterComponent;
  let fixture: ComponentFixture<DeleteCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
