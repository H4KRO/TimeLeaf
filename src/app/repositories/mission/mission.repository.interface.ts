import {Mission} from "../../models/mission.model";

export interface MissionRepository {
    list(): Promise<Mission[]>;
}