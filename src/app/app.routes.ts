import {Routes} from '@angular/router';
import {Home} from "./pages/home/home";
import {Default} from "./layouts/default/default";
import {Missions} from "./pages/missions/missions";
import {Applications} from "./pages/applications/applications";
import {Contracts} from "./pages/contracts/contracts";

export const routes: Routes = [
    {
        path: '',
        component: Default,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'missions',
                component: Missions
            },
            {
                path: 'applications',
                component: Applications
            },
            {
                path: 'contracts',
                component: Contracts
            }
        ]
    }
];
