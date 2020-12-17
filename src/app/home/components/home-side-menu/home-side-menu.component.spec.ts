import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSideMenuComponent } from './home-side-menu.component';

describe('HomeSideMenuComponent', () => {
  let component: HomeSideMenuComponent;
  let fixture: ComponentFixture<HomeSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
