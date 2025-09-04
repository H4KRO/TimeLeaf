import {Inject, Injectable} from '@angular/core';
import {APPLICATION_REPOSITORY} from "../repositories/application/application.repository.token";
import {ITApplicationRepository} from "../repositories/application/application.repository.interface";
import {ApplicationStatus} from "../models/application.model";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(@Inject(APPLICATION_REPOSITORY) private applicationRepository: ITApplicationRepository) { }

  list(status?: ApplicationStatus | 'all') {
    return this.applicationRepository.list(status)
  }
}
