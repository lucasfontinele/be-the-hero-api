import express from 'express';
import { index, store } from './controller';
import { validationStore } from './validation';

const routes = express.Router();

routes.route('/').get(index);
routes.route('/').post(validationStore, store);

export default routes;
