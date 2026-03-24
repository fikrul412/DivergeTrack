import express, { type Application, type Request, type Response } from 'express';
import cors from "cors"

// TO DO:

// 1. Commands welcome
// 2. Commands help
// 3. Commands show collections
// 4. Commands commands select collection 

const app: Application = express();

app.use(cors({
  origin : "http://localhost:5173"
}))

const port = process.env.PORT || 8000;
const baseURL = `http://localhost:${port}`

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.post('/commands', (req: Request, res: Response) => {
  console.log(req.body)
  res.json({ status: 'received', commands: req.body })
})

app.listen(port, () => {
  console.log(`Server is running on ${baseURL}`);
});