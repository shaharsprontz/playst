import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplaylistComponent } from './userplaylist.component';

describe('UserplaylistComponent', () => {
  let component: UserplaylistComponent;
  let fixture: ComponentFixture<UserplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
