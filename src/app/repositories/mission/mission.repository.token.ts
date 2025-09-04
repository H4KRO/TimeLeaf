import {InjectionToken} from "@angular/core";
import {MissionRepository} from "./mission.repository.interface";

export const MISSION_REPOSITORY = new InjectionToken<MissionRepository>(
    'MissionRepository',
);