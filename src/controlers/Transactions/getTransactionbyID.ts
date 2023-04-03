import { getProcuraUser } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const mostraTudoTranById = (req: Request, res: Response) => {
	const { id, idTran } = req.params;
	const use = getProcuraUser(id);
	if (!use) return res.status(404).send({ message: 'Not found User' });
	const transaction = use.findTransaction(idTran);
	if (transaction < 0) {
		return res.status(404).send({ message: 'Not found transaction' });
	}

	return res
		.status(200)
		.json({ transaction: use.getTransactions[transaction] });
};
