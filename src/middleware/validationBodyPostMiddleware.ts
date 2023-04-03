import { NextFunction, Request, Response } from 'express';

export const bodyValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (Object.values(req.body).some((ele) => !ele)) {
		return res.status(418).send({ message: 'escreve algum bagulho ae' });
	}
	next();
};
