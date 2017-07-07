import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoContentComponentComponent } from './no-content-component.component';

describe('NoContentComponentComponent', () => {
  let component: NoContentComponentComponent;
  let fixture: ComponentFixture<NoContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
