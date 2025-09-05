import {Component, input} from '@angular/core';
import {Application} from "../../models/application.model";
import {Card} from "primeng/card";

@Component({
  selector: 'app-applications-list',
    imports: [
        Card
    ],
  templateUrl: './applications-list.html',
  styleUrl: './applications-list.css'
})
export class ApplicationsList {
  applications = input<Application[]>([])
}
