import express from 'express';
import Sensit from 'sensit-api';
import token from './../../token';

let sensitClient = new Sensit({token: token.value});

let sensitController  = express.Router();

/* http://localhost:8080/api/sensit/devices */
sensitController.get('/devices', (req, res) => {
  sensitClient
    .devices()
    .get()
    .then((results) => res.status(200).json(results));
});

sensitController.get('/devices/:id', (req, res) => {
  sensitClient.device(req.params.id)
    .get()
    .then((results) => res.status(200).json(results));
});

sensitController.get('/devices/:device_id/sensors/:sensor_id', (req, res) => {
  sensitClient.device(req.params.device_id).sensor(req.params.sensor_id)
    .get()
    .then((results) => res.status(200).json(results));
});

export default sensitController;