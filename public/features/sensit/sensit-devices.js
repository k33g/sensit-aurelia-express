import {inject} from "aurelia-framework";
import {SensitData} from "./SensitData";

@inject(SensitData)
export class SensitDevices {

  constructor(sensitData) {
    this.sensitData = sensitData;
  }

  attached() {
    return this.sensitData.getDevicesInformations().then(devicesInformations => {
      this.devicesInformations = devicesInformations;
    })      
  }

  activate() {}
 
}