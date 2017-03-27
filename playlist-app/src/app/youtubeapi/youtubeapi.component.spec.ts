import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeapiComponent } from './youtubeapi.component';

describe('YoutubeapiComponent', () => {
  let component: YoutubeapiComponent;
  let fixture: ComponentFixture<YoutubeapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
