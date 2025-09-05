import {Component, OnInit} from '@angular/core';
import {MissionService} from "../../services/mission-service";
import {Mission} from "../../models/mission.model";
import {Button} from "primeng/button";
import {InputGroup} from "primeng/inputgroup";
import {InputText} from "primeng/inputtext";
import {Card} from "primeng/card";
import {Checkbox} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-missions',
    imports: [
        Button,
        InputGroup,
        InputText,
        Card,
        Checkbox,
        FormsModule
    ],
  templateUrl: './missions.html',
  styleUrl: './missions.css'
})
export class Missions implements OnInit {
  missions: Mission[] = [];
  filters = [
      {
          label: $localize`:@@MissionsSearchFilterDuration:Duration`,
          id: "duration",
          values: [
              {
                  label: $localize`:@@MissionsSearchFiltersShortDurationsCheckbox:Short`,
                  id: "short",
              },
              {
                  label: $localize`:@@MissionsSearchFiltersMiddleDurationsCheckbox:Middle`,
                  id: "middle",
              },
              {
                  label: $localize`:@@MissionsSearchFiltersLongDurationsCheckbox:Long`,
                  id: "long",
              }
          ],
          selected: [],
      },
      {
          label: $localize`:@@MissionsSearchFilterContractType:Contract type`,
          id: "contract_type",
          values: [
              {
                  label: $localize`:@@ContractTypeFullTimeCheckbox:Full-time`,
                  id: "full_time",
              },
              {
                  label: $localize`:@@ContractTypePartTimeCheckbox:Part-time`,
                  id: "part_time",
              }
          ],
          selected: [],
      },
      {
          label: $localize`:@@MissionsSearchFilterRemote:Remote`,
          id: "remote",
          values: [
              {
                  label: $localize`:@@RemoteWorkYesCheckbox:Yes`,
                  id: "yes",
              },
              {
                  label: $localize`:@@RemoteWorkPartialCheckbox:Partial`,
                  id: "partial",
              },
              {
                  label: $localize`:@@RemoteWorkNoCheckbox:No`,
                  id: "no",
              }
          ],
          selected: [],
      }
  ]

  constructor(private missionService: MissionService) {

  }

  ngOnInit() {
    this.loadMissions()
  }

  async loadMissions() {
    this.missions = await this.missionService.list()
  }

    protected readonly JSON = JSON;
}
