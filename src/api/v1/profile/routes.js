import express from 'express';
import index from './controller';

const routes = express.Router();

routes.route('/').get(index);

export default routes;
