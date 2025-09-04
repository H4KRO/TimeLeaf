import {Component, effect, inject, signal} from '@angular/core';
import {ApplicationsFilters} from "../../components/applications-filters/applications-filters";
import {ApplicationsList} from "../../components/applications-list/applications-list";
import {ActivatedRoute, Router} from "@angular/router";
import {Application, ApplicationStatus} from "../../models/application.model";
import {ApplicationService} from "../../services/application-service";

@Component({
  selector: 'app-applications',
  imports: [
    ApplicationsFilters,
    ApplicationsList
  ],
  templateUrl: './applications.html',
  styleUrl: './applications.css'
})
export class Applications {
  status = signal<ApplicationStatus | 'all'>('all');
  applications = signal<Application[]>([])

  constructor(private router: Router, private route: ActivatedRoute, private applicationsService: ApplicationService) {
    this.route.queryParams.subscribe(params => {
      this.status.set(params['status'] || 'all')
    });

    effect(async () => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { status: this.status() == 'all' ? null : this.status() },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });

      this.applications.set(await this.applicationsService.list(this.status()))
    });
  }
}
