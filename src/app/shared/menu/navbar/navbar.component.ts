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
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Open', icon: 'pi pi-fw pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
        { label: 'Redo', icon: 'pi pi-fw pi-repeat' }
      ]
    }
  ];
}
