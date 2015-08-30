import express from 'express';
import Sensit from 'sensit-api';
import token from './../../token';

class SensitController {
  router = express.Router();
  sensitClient = new Sensit({token: token.value});

  constructor() {}

  getRouter() {

    /* http://localhost:8080/api/sensit/devices */
    this.router.get('/devices', (req, res) => {
      this.sensitClient
        .devices()
        .get()
        .then((results) => res.status(200).json(results));
    });

    this.router.get('/devices/:id', (req, res) => {
      this.sensitClient.device(req.params.id)
        .get()
        .then((results) => res.status(200).json(results));
    });

    this.router.get('/devices/:device_id/sensors/:sensor_id', (req, res) => {
      this.sensitClient.device(req.params.device_id).sensor(req.params.sensor_id)
        .get()
        .then((results) => res.status(200).json(results));
    });

    return this.router
  }

}

let sensitRouter = (new SensitController()).getRouter()

export default sensitRouter;