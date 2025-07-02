import express from 'express';
import path from 'path';
import apiRouter from './routes/index.js';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 4500;

app.use(cors());
//Serves your frontend 
app.use(express.static(path.join(__dirname, 'public')));
//enable the API routes
app.use('/api', apiRouter);
//Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
