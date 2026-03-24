import express, { type Application, type Request, type Response } from 'express';

// TO DO:

// 1. Commands welcome
// 2. Commands help
// 3. Commands show collections
// 4. Commands commands select collection 

const app: Application = express();
export const port = process.env.PORT || 8000;
export const baseURL = `http://localhost:${port}`

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});


app.listen(port, () => {
  console.log(`Server is running on ${baseURL}`);
});
