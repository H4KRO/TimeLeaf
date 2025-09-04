import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Header} from "../../components/header/header";

@Component({
  selector: 'app-default',
  imports: [RouterOutlet, Header],
  templateUrl: './default.html',
  styleUrl: './default.css'
})
export class Default {

}
