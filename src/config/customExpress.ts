import express from 'express';
import { router } from '../routes';

export default () => {
  const app = express();

  // Express 4 native body parser
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(router);

  return app;
}
