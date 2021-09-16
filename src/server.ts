import customExpress from './config/customExpress';
import connection from './database/connection';
import { Tables } from './database/tables';

connection.connect(err => {
  if (err) console.log(err);
  else {
    console.log('Database connected successfully');

    const tables = new Tables(connection);
    const app = customExpress();

    app.listen(8000, () => console.log(`⚡️[server]: Server is running at https://localhost:8000}`));
  }
});
