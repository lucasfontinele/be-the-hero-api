import express from 'express';
import store from './controller';
import { validationStore } from './validation';

const routes = express.Router();

routes.route('/').post(validationStore, store);

export default routes;
