import {inject} from "aurelia-framework";
import {SensitData} from "./SensitData";

@inject(SensitData)
export class SensitSensor {

  constructor(sensitData) {
    this.sensitData = sensitData;
    this.config = {};
  }

  attached() {
    this.sensitData.getSensorOfDeviceInformationsById(
        this.deviceid
      , this.sensorid
    ).then(sensorInformations => {
      this.sensorInformations = sensorInformations.data;
    })
  }

  activate(params) {
    this.deviceid = params.deviceid;
    this.sensorid = params.sensorid;
  }
 
}