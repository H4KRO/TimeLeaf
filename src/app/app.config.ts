import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {providePrimeNG} from "primeng/config";
import Aura from '@primeuix/themes/aura';
import {provideNoopAnimations} from "@angular/platform-browser/animations";
import {MISSION_REPOSITORY} from "./repositories/mission/mission.repository.token";
import {MissionMockRepository} from "./repositories/mission/mission-mock.repository";
import {APPLICATION_REPOSITORY} from "./repositories/application/application.repository.token";
import {ApplicationMockRepository} from "./repositories/application/application-mock.repository";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNoopAnimations(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    {
      provide: MISSION_REPOSITORY,
      useClass: MissionMockRepository
    },
    {
      provide: APPLICATION_REPOSITORY,
      useClass: ApplicationMockRepository
    }
  ]
};
