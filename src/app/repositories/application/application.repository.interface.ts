import {Application, ApplicationStatus} from "../../models/application.model";

export interface ITApplicationRepository {
    list(status?: ApplicationStatus | 'all'): Promise<Application[]>;
}
