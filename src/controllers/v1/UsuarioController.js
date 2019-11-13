import { PessoaSchema, UsuarioSchema } from '../../models';
import jwt from 'jsonwebtoken';
import { criarPessoa } from './PessoaController';

export const criarUsuario = async (req, res) => {
	const { nome, cpf, cnpj, data_nascimento, telefone, email, senha } = req.body;

	const pessoa = await criarPessoa(nome, cpf, cnpj, data_nascimento, telefone);
	if (pessoa) {
		const usuario = await UsuarioSchema.create({
			pessoa_id: Pessoa.id,
			email,
			senha,
		});
		return res.json(usuario);
	}
	return res.json({ error: true });
};

export const validarLogin = async (req, res) => {
	const { login, senha } = req.params;
	const usuario = await UsuarioSchema.find({ login: login, senha: senha });
	console.log(usuario);
	if (usuario.length) {
		const { id } = usuario;
		const token = jwt.sign({ id }, process.env.MYSECURITYTOKEN, {
			expiresIn: 900, // expires in 15min
		});
		return res.status(200).send({ auth: true, token: token });
	}
	return res.status(401).json({ auth: false, error: 'USER NOT FOUND' });
};
