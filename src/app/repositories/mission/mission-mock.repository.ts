import {MissionRepository} from "./mission.repository.interface";
import {Mission} from "../../models/mission.model";
import {Injectable} from "@angular/core";

export const MISSIONS: Mission[] = [
    {
        id: '1',
        company: 'Acme Corp',
        title: 'Frontend Developer',
        duration: 3, // en mois
        location: 'Paris, France',
        remote: 'no'
    },
    {
        id: '2',
        company: 'Globex Inc.',
        title: 'Backend Developer',
        duration: 6,
        location: 'Berlin, Germany',
        remote: 'no'
    },
    {
        id: '3',
        company: 'Initech',
        title: 'Fullstack Developer',
        duration: 12,
        location: 'Remote',
        remote: 'yes'
    },
    {
        id: '4',
        company: 'Umbrella Corp',
        title: 'Project Manager',
        duration: 4,
        location: 'London, UK',
        remote: 'partial'
    },
    {
        id: '5',
        title: 'Freelance Designer',
        duration: 2,
        location: 'Remote',
        remote: 'yes'
    }
];

@Injectable()
export class MissionMockRepository implements MissionRepository {
    list(): Promise<Mission[]> {
        return Promise.resolve(MISSIONS);
    }
}
