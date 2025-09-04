import {Component, input} from '@angular/core';
import {Mission} from "../../models/mission.model";
import {Card} from "primeng/card";
import {Button} from "primeng/button";

@Component({
  selector: 'app-missions-search-result-list',
  imports: [
    Card,
  ],
  templateUrl: './missions-search-result-list.html',
  styleUrl: './missions-search-result-list.css'
})
export class MissionsSearchResultList {
  public missions = input<Mission[]>([])
}
