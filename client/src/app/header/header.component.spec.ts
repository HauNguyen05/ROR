import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  menuShow(){

    const menu = document.getElementById("menu") as HTMLElement
    const navMenu = document.getElementById('nav-menu') as HTMLElement

    menu.addEventListener('click', () => {
      console.log('ok')
      if (navMenu.style.height == '0') {
        navMenu.style.height = '100%'
      } else {
        navMenu.style.height = '0'
      }
    })
  }
});
