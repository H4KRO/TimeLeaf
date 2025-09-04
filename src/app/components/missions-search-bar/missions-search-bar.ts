import { Component } from '@angular/core';
import {InputGroup} from "primeng/inputgroup";
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";

@Component({
  selector: 'app-missions-search-bar',
  imports: [
    InputGroup,
    InputGroupAddonModule,
    InputText,
    Button,
  ],
  templateUrl: './missions-search-bar.html',
  styleUrl: './missions-search-bar.css'
})
export class MissionsSearchBar {

}
