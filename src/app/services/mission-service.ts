import {Inject, Injectable} from '@angular/core';
import {MissionRepository} from "../repositories/mission/mission.repository.interface";
import {MISSION_REPOSITORY} from "../repositories/mission/mission.repository.token";

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  constructor(@Inject(MISSION_REPOSITORY) private missionRepository: MissionRepository) { }

  list() {
    return this.missionRepository.list()
  }
}
