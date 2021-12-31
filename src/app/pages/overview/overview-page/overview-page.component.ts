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

  currentMode = 0;

  modes : Mode[] = [];

  customModeColors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"];
  paletteNumber = 0;

  buttontext: string = "mein string";
  buttonclick: number = 0;
  currentSettings: Settings ={
    currentMode: 0,
    currentColor: "0x000000",
    brightness: 0,
    currentPalette: "",
    fps: 0,
    hasBlend: false,
  };

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
    this.api.updateSettings(this.currentSettings).subscribe((newSettings: Settings) => {
      this.currentSettings = newSettings;
    });
  }

  onChangedColor($event : ColorEvent) {
    let hexString = $event.color.hex;
    this.currentSettings.currentColor = hexString.replace("#", "0x");
    this.onChangedSettings();
  }

  setCustomModeColor($event : ColorEvent, index: number) {
    let hexString = $event.color.hex;
    this.customModeColors[index] = hexString.replace("#", "0x");
  }

  pushCustomPalette() {
    this.api.updateCustomPalette(this.customModeColors).subscribe((newSettings: Settings) => {
      this.currentSettings = newSettings;
    });
  }

  changeMode(mode: number) {
    this.currentMode = mode;
  }
}
