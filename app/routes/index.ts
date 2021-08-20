import { Router } from 'express';
import eventsRoutes from './events.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/events', eventsRoutes);
routes.use('/users', userRoutes);

export default routes;