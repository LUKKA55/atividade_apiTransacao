import { Request, Response, Router } from 'express';
import { getUserbyID } from './controlers/Users/getUserbyID';
import { getUsers } from './controlers/Users/getUsers';
import { bodyValidator } from './middleware/validationBodyPostMiddleware';
import { createUser } from './controlers/Users/createUser';
import { deleteUser } from './controlers/Users/deleteUser';
import { updateUser } from './controlers/Users/updateUser';
import { addTransactions } from './controlers/Transactions/addTransaction';
import { mostraTudoTran } from './controlers/Transactions/getTransactions';
import { mostraTudoTranById } from './controlers/Transactions/getTransactionbyID';
import { updateTransactions } from './controlers/Transactions/updateTransaction';
import { deleteTransactions } from './controlers/Transactions/deleteTransaction';
import { validationUserMiddleware } from './middleware/validationUsermiddleware';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('olár');
});
router.get('/users', getUsers);

router.get('/users/:id', getUserbyID);

router.post('/users', bodyValidator, validationUserMiddleware, createUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', validationUserMiddleware, updateUser);

router.post('/user/:id/transactions', bodyValidator, addTransactions);

router.get('/user/:id/transactions/', mostraTudoTran);

router.get('/user/:id/transactions/:idTran', mostraTudoTranById);

router.put('/user/:id/transactions/:idTran', updateTransactions);

router.delete('/user/:id/transactions/:idTran', deleteTransactions);

export default router;
