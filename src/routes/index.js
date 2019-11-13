import { Router } from 'express';
import jwt from 'jsonwebtoken';
import httpProxy from 'express-http-proxy';

import { validarLogin } from '../controllers/v1/UsuarioController';

export const routes = Router();

// const userServiceProxy = httpProxy('http://localhost:3001');

function verifyJWT(req, res, next) {
	const token = req.headers['authorization'] ? req.headers['authorization'].split(' ').pop() : null;
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
	jwt.verify(token, process.env.MYSECURITYTOKEN, function(err, decoded) {
		if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
		// se tudo estiver ok, salva no request para uso posterior
		req.userId = decoded.id;
		next();
	});
}

// routes.get('/v1/users/login/:login/:senha', (req, res, next) => {
//     userServiceProxy(req, res, next);
// });
routes.get('/api/v1/users/login/:login/:senha', validarLogin);
