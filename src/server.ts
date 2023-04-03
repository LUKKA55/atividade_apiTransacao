import express, { Request, Response } from 'express';
import router from './routesUsers';

const app = express();
app.use(express.json());
app.use(router);

app.listen(8081, () => console.log('server rodando'));
