import { adeletar } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const deleteUser = (req: Request, res: Response) => {
	const id = req.params.id;
	if (!id.length) return res.status(400).json({ message: 'erro no dado' });
	const deletar = adeletar(id);
	return deletar
		? res.status(200).json({ message: 'user deletado' })
		: res.status(404).json({ message: 'erro no dado' });
};
