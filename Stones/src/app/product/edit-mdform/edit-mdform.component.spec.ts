import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMdformComponent } from './edit-mdform.component';

describe('EditMdformComponent', () => {
  let component: EditMdformComponent;
  let fixture: ComponentFixture<EditMdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMdformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
