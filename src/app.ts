import express from 'express';
import helmet from 'helmet';

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
    this.app.use('/');
  }
}

export default new App();
