"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, cpf, email, age) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.id = (0, uuid_1.v4)();
        this.transaction = [];
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getEmail() {
        return this.email;
    }
    get getTransactions() {
        return this.transaction;
    }
    get getCpf() {
        return this.cpf;
    }
    get getId() {
        return this.id;
    }
    findTransaction(id) {
        return this.transaction.findIndex((ele) => ele.id === id);
    }
    deleteTransactinUser(id) {
        const IDdeletar = this.transaction.findIndex((ele) => ele.id === id);
        return this.transaction.splice(IDdeletar, 1);
    }
    setTransaction(index, ref, transaction) {
        this.transaction.splice(index, ref, transaction);
    }
    setTransactions(transact) {
        this.transaction.push(transact);
    }
    setName(novoName) {
        this.name = novoName;
    }
    setAge(novoAge) {
        this.age = novoAge;
    }
    setEmail(novoEmail) {
        this.email = novoEmail;
    }
    setCpf(novoCpf) {
        this.cpf = novoCpf;
    }
}
exports.User = User;
