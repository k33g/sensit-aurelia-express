
export class App {
  constructor() {}
  activate() {
    this.message = "Sens'it POC";
  }

  configureRouter(config, router) {
    this.router = router;
    config.map([
        { route: ["", "sensit_devices"], name: "home", moduleId: "features/sensit/sensit-devices", title: "Devices", nav: true }
      , { route: "about", moduleId: "features/about/about-application", title: "About", nav: true }
      , { route: "device_details/:id", name: "device_details", moduleId: "features/sensit/sensit-device" }
      , { route: "sensor_details/:deviceid/:sensorid", name: "sensor_details", moduleId: "features/sensit/sensit-sensor" }      
    ]);
  }
}