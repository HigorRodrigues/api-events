import express from 'express';
import cors from 'cors';
import routes from './routes';
import { conection } from './database/config';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, async () => {
	const conectionResult = await conection;
	console.log(`Status da conexão com o banco de dados: ${conectionResult.isConnected ? 'Online' : 'Offline'}`);
	console.log(`Server is running in port ${PORT}`);
});