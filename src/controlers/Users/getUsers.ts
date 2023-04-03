import { usersBD } from '../../bd/usersBanco';
import { Request, Response } from 'express';

export const getUsers = (_: Request, res: Response) => {
	return res.status(200).json(usersBD);
};
