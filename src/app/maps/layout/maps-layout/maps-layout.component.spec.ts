import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsLayoutComponent } from './maps-layout.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MapsLayoutComponent', () => {
  let component: MapsLayoutComponent;
  let fixture: ComponentFixture<MapsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsLayoutComponent,SideMenuComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
