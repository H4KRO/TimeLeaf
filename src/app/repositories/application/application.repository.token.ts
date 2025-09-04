import {InjectionToken} from "@angular/core";
import {ITApplicationRepository} from "./application.repository.interface";

export const APPLICATION_REPOSITORY = new InjectionToken<ITApplicationRepository>(
    'ApplicationRepository',
);