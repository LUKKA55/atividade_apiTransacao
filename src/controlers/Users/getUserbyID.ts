import { getProcuraUser } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const getUserbyID = (req: Request, res: Response) => {
	const iDe = req.params.id as string;
	if (!iDe.length) return res.status(400).json({ message: 'erro no dado' });
	const acho = getProcuraUser(iDe);
	if (acho == undefined)
		return res.status(404).json({ message: 'user não encontrado' });
	return res.status(200).json(acho);
};
