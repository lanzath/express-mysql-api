import express, { Request, Response } from 'express';

const app = express();
const PORT = 8000;

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Express + TS Server!' }).status(200);
});

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`));
