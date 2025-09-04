import {Component, input} from '@angular/core';
import {Application} from "../../models/application.model";

@Component({
  selector: 'app-applications-list',
  imports: [],
  templateUrl: './applications-list.html',
  styleUrl: './applications-list.css'
})
export class ApplicationsList {
  applications = input<Application[]>([])
}
