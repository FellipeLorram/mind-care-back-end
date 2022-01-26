import express from 'express';
import helmet from 'helmet';
import {
  homeRoutes,
  patientRoutes,
  tokenRoutes,
  userRoutes,
} from './Routes/_Index';

class App {
  app: any;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(helmet());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/', userRoutes);
    this.app.use('/', tokenRoutes);
    this.app.use('/', patientRoutes);
  }
}

export default new App().app;
