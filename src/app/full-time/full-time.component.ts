import { Component, OnInit } from '@angular/core';

import { Professional } from "../../classes/Professional";

@Component({
  selector: 'app-full-time',
  templateUrl: './full-time.component.html',
  styleUrls: ['./full-time.component.css']
})
export class FullTimeComponent implements OnInit {
  private professionals = Array<Professional>();

  constructor() { }

  ngOnInit() {
  }

}
