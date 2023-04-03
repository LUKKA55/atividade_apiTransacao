import { getProcuraUser } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const mostraTudoTran = (req: Request, res: Response) => {
	const id = req.params.id;
	const use = getProcuraUser(id);
	if (!use) return res.status(404).send({ message: 'Not found User' });

	const transactions = use.getTransactions;
	return res.status(200).json({ transactions });
};
