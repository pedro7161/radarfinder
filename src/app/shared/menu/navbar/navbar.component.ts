import { Component } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  items = [
    {
      label: 'Home',
      routerLink: '/home',
      icon: 'pi pi-home'
    },
    {
      label: 'Radars',
      routerLink: '/radars',
      icon: 'pi pi-fw pi-chart-bar',
    }
  ];
}
