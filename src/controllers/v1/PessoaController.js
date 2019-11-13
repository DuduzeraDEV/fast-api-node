import { PessoaSchema } from '../../models';

export const criarPessoa = async (nome, cpf, cnpj, data_nascimento, telefone) => {
	const pessoa = await PessoaSchema.create({
		nome,
		cpf,
		cnpj,
		data_nascimento,
		telefone,
	});

	return res.json(pessoa);
};
