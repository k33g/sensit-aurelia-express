import {inject} from "aurelia-framework";
import {SensitData} from "./SensitData";
import moment from 'moment';
//'MMMM Do YYYY, h:mm:ss a'

@inject(SensitData)
export class SensitDevices {

  constructor(sensitData) {
    this.sensitData = sensitData;
  }

  attached() {
    return this.sensitData.getDevicesInformations().then(devicesInformations => {
      //console.log("devicesInformations", devicesInformations)
      devicesInformations.data.forEach(device => {
        device.formatted_activation_date = moment(device.activation_date).format('MMMM Do YYYY, h:mm:ss a');
        device.formatted_last_comm_date = moment(device.last_comm_date).format('MMMM Do YYYY, h:mm:ss a');
        device.formatted_last_config_date = moment(device.last_config_date).format('MMMM Do YYYY, h:mm:ss a');
      })
      this.devicesInformations = devicesInformations;
    })      
  }
  activate() {}
 
}