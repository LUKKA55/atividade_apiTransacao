import { getProcuraUser } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const updateTransactions = (req: Request, res: Response) => {
	const { id, idTran } = req.params;
	const use = getProcuraUser(id);
	if (!use) return res.status(404).send({ message: 'Not found User' });

	const { title, value, type } = req.body;
	const upperType = type.toUpperCase();

	const transaction = use.findTransaction(idTran);

	if (transaction < 0) {
		return res.status(404).send({ message: 'Not found transaction' });
	}
	const tempTransaction = use.getTransactions[transaction];
	if (type) {
		if (!['ENTRADA', 'SAIDA'].includes(upperType)) {
			return res.status(404).send({ message: 'type incorreto' });
		}
		tempTransaction.type = type;
	}

	if (title) {
		tempTransaction.title = title;
	}
	if (value) {
		tempTransaction.value = value;
	}
	use.setTransaction(transaction, 1, tempTransaction);

	return res.status(200).json({
		udateTransaction: use.getTransactions[transaction],
		transactions: use.getTransactions,
	});
};
