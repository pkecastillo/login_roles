import { Router } from "express";
import auth from './auth';
import user from './user';
import exercise from './exercise';

const routes = Router();

routes.use('/auth', auth)
routes.use('/users', user)
routes.use('/exercise', exercise)

export default routes;