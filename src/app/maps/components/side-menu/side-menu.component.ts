import { Component } from '@angular/core';

interface MenuItem {
  name: string
  route: string;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItem: MenuItem[] = [
    {name: 'FullScreen',route: '/maps/fullscreen'},
    {name: 'Zoom',route: '/maps/zoom'},
    {name: 'Markers',route: '/maps/markers'},
    {name: 'Houses',route: '/maps/properties'},
  ]
}
