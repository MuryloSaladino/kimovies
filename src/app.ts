import { categoriesRouter, loginRouter, realEstateRouter, schedulesRouter, usersRouter } from './routers';
import { handleError } from './middlewares';
import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';

const app = express();
app.use(express.json());

app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/categories', categoriesRouter)
app.use('/realEstate', realEstateRouter)
app.use('/schedules', schedulesRouter)

app.use(handleError)

export default app;
