import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Menubar} from "primeng/menubar";

@Component({
  selector: 'app-header',
  imports: [
    Menubar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  items: MenuItem[] = [
    {
      label: $localize`:@@HeaderHomeLinkText:Home`,
      routerLink: '/',
    },
    {
      label: $localize`:@@HeaderMissionsLinkText:Missions`,
      routerLink: '/missions',
    },
    {
      label: $localize`:@@HeaderApplicationsLinkText:Applications`,
      routerLink: '/applications',
    },
    {
      label: $localize`:@@HeaderContractsLinkText:Contracts`,
      routerLink: '/contracts',
    }
  ]
}
