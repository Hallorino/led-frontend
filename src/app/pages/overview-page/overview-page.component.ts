import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.less']
})
export class OverviewPageComponent implements OnInit {

  constructor() { }

  buttontext: string = "mein string";
  buttonclick: number = 0;

  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttontext = "Baby click me on more Time!";
    this.buttonclick++;
  }
}
