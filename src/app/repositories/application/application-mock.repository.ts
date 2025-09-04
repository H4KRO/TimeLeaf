import {Mission} from "../../models/mission.model";
import {Injectable} from "@angular/core";
import {Application, ApplicationStatus, applicationStatuses} from "../../models/application.model";
import {ITApplicationRepository} from "./application.repository.interface";
import {MISSIONS} from "../mission/mission-mock.repository";

const APPLICATIONS: Application[] = MISSIONS.map(mission => ({
    id: mission.id,
    status: applicationStatuses.at(Math.floor(Math.random() * applicationStatuses.length)) ?? applicationStatuses[0],
    mission
}))

@Injectable()
export class ApplicationMockRepository implements ITApplicationRepository {
    list(status?: ApplicationStatus | 'all'): Promise<Application[]> {
        return Promise.resolve(APPLICATIONS.filter(application => !status || status === 'all' || application.status === status));
    }
}
