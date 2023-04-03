import { update } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const updateUser = (req: Request, res: Response) => {
	const id = req.params.id;
	const { name, cpf, email, age } = req.body;
	if (!id) return res.status(400).json({ message: 'erro no dado' });
	const mandarUpdate = update(id, name, cpf, email, age);
	return res.status(200).json(mandarUpdate);
};
