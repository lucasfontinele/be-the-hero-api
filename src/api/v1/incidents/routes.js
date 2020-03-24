import express from 'express';
import { store, index, remove, show } from './controller';
import { validationStore } from './validation';

const routes = express.Router();

routes.route('/').get(index);
routes.route('/:id').get(show);

routes.route('/').post(validationStore, store);
routes.route('/:id').delete(remove);

export default routes;
