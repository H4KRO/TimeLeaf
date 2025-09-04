import {Component, input, model} from '@angular/core';
import {Tab, TabList, Tabs} from "primeng/tabs";
import {ApplicationStatus} from "../../models/application.model";

@Component({
  selector: 'app-applications-filters',
  imports: [
    Tabs,
    TabList,
    Tab,
  ],
  templateUrl: './applications-filters.html',
  styleUrl: './applications-filters.css'
})
export class ApplicationsFilters {
  public status = model<ApplicationStatus | 'all'>('all')
  public tabs = [
    {
      label: $localize`:@@ApplicationsFiltersAll:All`,
      status: 'all'
    },
    {
      label: $localize`:@@ApplicationsFiltersUnderReview:Under review`,
      status: 'underReview',
    },
    {
      label: $localize`:@@ApplicationsFiltersSelected:Selected`,
      status: 'selected'
    },
    {
      label: $localize`:@@ApplicationsFiltersNotSelected:NotSelected`,
      status: 'notSelected'
    }
  ];
}
