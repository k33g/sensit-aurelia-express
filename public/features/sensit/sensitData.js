import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/sensit";

@inject(HttpClient)
export class SensitData {
  constructor(httpClient) {
    this.http = httpClient;
  }

  getDevicesInformations() {
    return this.http.get(baseUrl+"/devices").then(response => {
      return response.content;
    })
  }

  getDeviceInformationsById(id) {
    return this.http.get(`${baseUrl}/devices/${id}`).then(
      response => response.content
    )    
  }  
  //'/devices/:device_id/sensors/:sensor_id'
  getSensorOfDeviceInformationsById(device_id, sensor_id) {
    return this.http.get(`${baseUrl}/devices/${device_id}/sensors/${sensor_id}`).then(
      response => response.content
    )    
  }  

}