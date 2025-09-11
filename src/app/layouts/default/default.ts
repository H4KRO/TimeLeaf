import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Nav} from "../../components/nav/nav";

@Component({
  selector: 'app-default',
  imports: [RouterOutlet, Nav],
  templateUrl: './default.html',
  styleUrl: './default.css'
})
export class Default {

}
