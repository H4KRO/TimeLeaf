import {Mission} from "./mission.model";

export const applicationStatuses = ['underReview', 'selected', 'notSelected'] as const;
export type ApplicationStatus = typeof applicationStatuses[number];

export interface Application {
    id: string
    status: ApplicationStatus
    mission: Mission
}
