import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewblogsComponent } from './newblogs.component';

describe('NewblogsComponent', () => {
  let component: NewblogsComponent;
  let fixture: ComponentFixture<NewblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
