import { Transaction } from '../models/Transaction';
import { User } from '../models/User';

export let usersBD: User[] = [
	new User('Mateus Pinheiro', '294.682.310-54', 'mateus@gmail.com', 24),
	new User('Maria Eduarda', '747.832.140-26', 'maria@gmail.com', 37),
];

export const aacreateUser = (
	name: string,
	cpf: string,
	email: string,
	age: number
) => {
	const newUser = new User(name, cpf, email, age);
	usersBD.push(newUser);
	return newUser;
};

export const getProcuraUser = (uuid: string) => {
	return usersBD.find((ele) => ele.getId === uuid);
};

export const adeletar = (id: string) => {
	const achoUser = usersBD.filter((ele) => ele.getId !== id); //RETORNA O BANCO DE DADOS MENOS O USER COM O ID PASSADO
	const avalia = usersBD.length > achoUser.length;
	usersBD = achoUser;
	return avalia;
};

export const update = (
	id: string,
	name: string | undefined,
	cpf: string | undefined,
	email: string | undefined,
	age: number | undefined
) => {
	const achouUser = usersBD.find((ele) => {
		return ele.getId === id;
	});
	if (!achouUser) {
		throw new Error('sem user mano');
	}

	if (name) achouUser.setName(name);
	if (age) achouUser.setAge(age);
	if (email) achouUser.setEmail(email);
	if (cpf) achouUser.setCpf(cpf);
	return achouUser;
};

export const addTransactionsUser = (transa: Transaction, use: User) => {
	use.setTransactions(transa);
	return use.getTransactions;
};

export const deleteTransaction = (use: User, transaction: string) => {
	use.deleteTransactinUser(transaction);
};
