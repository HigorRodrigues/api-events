import express from 'express';
import cors from 'cors';
import routes from './routes';
import reflect from  "reflect-metadata";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
});