import {inject} from "aurelia-framework";
import {SensitData} from "./SensitData";

@inject(SensitData)
export class SensitDevice {

  constructor(sensitData) {
    this.sensitData = sensitData;
    this.id = null;
  }

  attached() {
    this.message = "Sensor's device:";
    this.sensitData.getDeviceInformationsById(this.id).then(deviceInformations => {
      deviceInformations.data.sensors.forEach((sensor)=> {
        sensor.deviceid = this.id; // to construct the route
      })
      this.deviceInformations = deviceInformations.data;
    })      
  }

  activate(params) {
    this.id = params.id;
  }
 
}