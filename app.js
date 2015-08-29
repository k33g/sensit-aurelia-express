import config from './config';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import sensitController from './features/sensit/sensitController.js';

let app = express();

app
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use('/api/sensit', sensitController)
  .listen(config.httpPort);
  
console.log(" Listening on: " + config.httpPort);



