import { v4 } from 'uuid';

export class Transaction {
	public id: string;

	constructor(
		public title: string,
		public value: number,
		public type: 'ENTRADA' | 'SAIDA'
	) {
		this.id = v4();
		this.title = title;
		this.value = value;
		this.type = type;
	}
}
