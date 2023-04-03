import { addTransactionsUser, getProcuraUser } from '../../bd/usersBanco';
import { Transaction } from '../../models/Transaction';
import { Request, Response } from 'express';

export const addTransactions = (req: Request, res: Response) => {
	const id = req.params.id;
	const use = getProcuraUser(id);
	if (!use) return res.status(404).send({ message: 'Not found User' });

	const { title, value, type } = req.body;
	const upperType = type.toUpperCase();

	if (!['ENTRADA', 'SAIDA'].includes(upperType))
		return res.status(404).send({ message: 'type incorreto' });

	const newTransaction = new Transaction(title, value, upperType);
	const transactions = addTransactionsUser(newTransaction, use);
	return res.status(200).json({ newTransaction, use });
};
