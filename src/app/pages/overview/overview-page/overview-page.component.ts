import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { Mode } from 'src/app/models/mode.model';
import { Settings } from 'src/app/models/settings.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
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

  customModeColors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"];
  paletteNumber = 0;

  buttontext: string = "mein string";
  buttonclick: number = 0;
  currentSettings: Settings = {
    currentMode: 0,
    currentColor: "",
    currentPalette: "Lava",
    brightness: 42,
    fps: 7,
    hasBlend: true
  }

  ngOnInit(): void {
    this.getDataFromApi();
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
    this.currentSettings.currentMode = 0;
    this.api.updateSettings(this.currentSettings).subscribe((newSettings: Settings) => {
      this.currentSettings = newSettings;
    });
  }

  onChangedSettings2($event : ColorEvent) {
    let hexString = $event.color.hex;
    this.currentSettings.currentColor = hexString.replace("#", "0x");
    this.currentSettings.currentMode = 1;

    this.api.updateSettings(this.currentSettings).subscribe((newSettings: Settings) => {
      this.currentSettings = newSettings;
    });
  }

  setCustomModeColor($event : ColorEvent, index: number) {
    let hexString = $event.color.hex;
    this.customModeColors[index] = hexString.replace("#", "0x");
    console.log(this.customModeColors[index]);
  }

  pushCustomPalette() {
    this.api.updateCustomPalette(this.customModeColors).subscribe((newSettings: Settings) => {
      this.currentSettings = newSettings;
    });
  }

  onButtonClick() {
    this.buttontext = "Baby click me on more Time!";
    this.buttonclick++;
  }
}
