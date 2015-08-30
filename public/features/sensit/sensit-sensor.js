import {inject} from "aurelia-framework";
import {SensitData} from "./SensitData";
import moment from 'moment';
//'MMMM Do YYYY, h:mm:ss a'

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
      sensorInformations.data.history.forEach(item => {
        item.formatted_date = moment(item.date).format('MMMM Do YYYY, h:mm:ss a');
        item.formatted_date_period = moment(item.date_period).format('MMMM Do YYYY, h:mm:ss a');
      })    
      this.sensorInformations = sensorInformations.data;
      //console.log("sensorInformations", this.sensorInformations)
    })
  }

  activate(params) {
    this.deviceid = params.deviceid;
    this.sensorid = params.sensorid;
  }
 
}