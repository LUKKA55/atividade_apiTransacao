import { NextFunction, Request, Response } from 'express';
import { cpf as cpff } from 'cpf-cnpj-validator';

export const validationUserMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { name, cpf, email } = req.body;
	if (name) {
		if (name.split(' ').length < 2) {
			return res
				.status(400)
				.json({ message: `Precisa ter pelo menos um sobrenome` });
		}
	}
	if (cpf) {
		if (!cpff.isValid(cpf)) {
			return res.status(400).json({ message: `CPF inválido` });
		}
	}
	// if (email) {
	// 	if (!isValidEmail(email)) {
	// 		return res.status(400).json({ message: `E-mail inválido` });
	// 	}
	// }
	next();
};
