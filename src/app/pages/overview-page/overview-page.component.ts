import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/app/models/mode.model';
import { Settings } from 'src/app/models/settings.model';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.less']
})
export class OverviewPageComponent implements OnInit {

  constructor() { }
  modes : Mode[] = [
    {name: "Rainbow"},
    {name: "Lava"},
    {name: "Heat"},
    {name: "Ocean"},
    {name: "Forest"},
    {name: "Party"}
  ];
  
  buttontext: string = "mein string";
  buttonclick: number = 0;
  currentSettings: Settings = {
    currentMode: "Lava",
    brightness: 42,
    fps: 7,
    hasBlend: true
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttontext = "Baby click me on more Time!";
    this.buttonclick++;
  }
}
