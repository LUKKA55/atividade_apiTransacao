import { aacreateUser } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
	const { name, cpf, age, email } = req.body;
	const mostraCreate = aacreateUser(name, cpf, email, age);

	return res.status(200).json(mostraCreate);
};
