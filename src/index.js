import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
// import httpProxy from 'express-http-proxy';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import helmet from 'helmet';
import * as dotenv from 'dotenv-safe';
import myParser from 'body-parser';

// import { routes } from './routes';

dotenv.config();
const app = express();
const server = http.Server(app);

mongoose.connect(process.env.MONGO_KEY, {
	useNewUrlParser: true,
});

app.use(myParser.json({ limit: '200mb' }));
app.use(cors());
// app.use(routes);

server.listen(5000);
