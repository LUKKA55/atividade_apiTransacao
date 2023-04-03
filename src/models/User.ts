import { v4 as uuidv4 } from 'uuid';
import { Transaction } from './Transaction';

export class User {
	private id: string;
	private transaction: Transaction[];
	constructor(
		private name: string,
		private cpf: string,
		private email: string,
		private age: number
	) {
		this.id = uuidv4();
		this.transaction = [];
	}
	get getName(): string {
		return this.name;
	}
	get getAge(): number {
		return this.age;
	}
	get getEmail(): string {
		return this.email;
	}
	get getTransactions(): Transaction[] {
		return this.transaction;
	}
	get getCpf(): string {
		return this.cpf;
	}
	get getId(): string {
		return this.id;
	}

	findTransaction(id: string) {
		return this.transaction.findIndex((ele) => ele.id === id);
	}

	deleteTransactinUser(id: string) {
		const IDdeletar = this.transaction.findIndex((ele) => ele.id === id);
		return this.transaction.splice(IDdeletar, 1);
	}

	setTransaction(index: number, ref: number, transaction: Transaction) {
		this.transaction.splice(index, ref, transaction);
	}

	setTransactions(transact: Transaction) {
		this.transaction.push(transact);
	}

	setName(novoName: string) {
		this.name = novoName;
	}
	setAge(novoAge: number) {
		this.age = novoAge;
	}
	setEmail(novoEmail: string) {
		this.email = novoEmail;
	}
	setCpf(novoCpf: string) {
		this.cpf = novoCpf;
	}
}
