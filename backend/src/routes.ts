import { Router } from 'express';

const routes = Router();

import LandingController from './controllers/LandingController';

routes.get('/', LandingController.index);

export default routes;