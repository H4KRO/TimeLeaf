import {Component, OnInit} from '@angular/core';
import {MissionsSearchBar} from "../../components/missions-search-bar/missions-search-bar";
import {MissionsSearchFilters} from "../../components/missions-search-filters/missions-search-filters";
import {MissionService} from "../../services/mission-service";
import {Mission} from "../../models/mission.model";
import {MissionsSearchResultList} from "../../components/missions-search-result-list/missions-search-result-list";

@Component({
  selector: 'app-missions',
  imports: [
    MissionsSearchBar,
    MissionsSearchFilters,
    MissionsSearchResultList
  ],
  templateUrl: './missions.html',
  styleUrl: './missions.css'
})
export class Missions implements OnInit {
  missions: Mission[] = [];

  constructor(private missionService: MissionService) {

  }

  ngOnInit() {
    this.loadMissions()
  }

  async loadMissions() {
    this.missions = await this.missionService.list()
  }
}
