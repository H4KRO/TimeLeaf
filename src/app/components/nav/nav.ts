import { Component } from '@angular/core';
import {MegaMenu} from "primeng/megamenu";
import {NgClass} from "@angular/common";
import {Tooltip} from "primeng/tooltip";
import {Card} from "primeng/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [
    NgClass,
    Tooltip,
    Card,
    RouterLink

  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  items = [
    {
      label: $localize`:@@HeaderHomeLinkText:Home`,
      routerLink: '/',
      icon: 'pi pi-home'
    },
    {
      label: $localize`:@@HeaderMissionsLinkText:Missions`,
      routerLink: '/missions',
      icon: 'pi pi-search'
    },
    {
      label: $localize`:@@HeaderApplicationsLinkText:Applications`,
      routerLink: '/applications',
      icon: 'pi pi-briefcase'
    },
    {
      label: $localize`:@@HeaderContractsLinkText:Contracts`,
      routerLink: '/contracts',
      icon: 'pi pi-file-check'
    }
  ]
}
