import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/app/models/mode.model';
import { Settings } from 'src/app/models/settings.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.less']
})
export class OverviewPageComponent implements OnInit {

  constructor(private api: ApiService) { }

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

  getDataFromApi() {
    this.api.getAllModes().subscribe(modes => {
      this.modes = modes;
    });
    this.api.getSettings().subscribe(settings => {
      this.currentSettings = settings;
    });
  }

  onChangedSettings() {
    this.api.updateSettings(this.currentSettings).subscribe((newSettings: Settings) => {
      this.currentSettings = newSettings;
    });
  }

  onButtonClick() {
    this.buttontext = "Baby click me on more Time!";
    this.buttonclick++;
  }
}
