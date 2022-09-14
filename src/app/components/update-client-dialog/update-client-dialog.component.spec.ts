import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientDialogComponent } from './update-client-dialog.component';

describe('UpdateClientDialogComponent', () => {
  let component: UpdateClientDialogComponent;
  let fixture: ComponentFixture<UpdateClientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
