import { Component } from '@angular/core';
import {Checkbox} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {Card} from "primeng/card";

@Component({
  selector: 'app-missions-search-filters',
    imports: [
        Checkbox,
        FormsModule,
        Card
    ],
  templateUrl: './missions-search-filters.html',
  styleUrl: './missions-search-filters.css'
})
export class MissionsSearchFilters {
  durations: string[] = [];
  contractType: string[] = [];
  remote: string[] = [];
}
