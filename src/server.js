import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import ExpressLogs from 'express-server-logs';
import router from './api/v1/router';
import { notFound } from './middlewares/error';

const server = express();
const xlogs = new ExpressLogs(false);

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Logging
server.use(xlogs.logger);

server.use(helmet());

server.use('/v1', router);

// Catch not found routes
server.use(notFound);

export default server;
