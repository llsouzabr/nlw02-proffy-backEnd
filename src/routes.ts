import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsControllers = new ConnectionsController();


routes.get('/', async (req,res) => {
    console.log('Acessou a rota');
    return res.json({message: 'Hello Word!'})
})

routes.get('/classes', classesController.index );
routes.post('/classes', classesController.create );

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);



export default routes;