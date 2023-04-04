"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.addTransactionsUser = exports.update = exports.adeletar = exports.getProcuraUser = exports.aacreateUser = exports.usersBD = void 0;
const User_1 = require("../models/User");
exports.usersBD = [
    new User_1.User('Mateus Pinheiro', '294.682.310-54', 'mateus@gmail.com', 24),
    new User_1.User('Maria Eduarda', '747.832.140-26', 'maria@gmail.com', 37),
];
const aacreateUser = (name, cpf, email, age) => {
    const newUser = new User_1.User(name, cpf, email, age);
    exports.usersBD.push(newUser);
    return newUser;
};
exports.aacreateUser = aacreateUser;
const getProcuraUser = (uuid) => {
    return exports.usersBD.find((ele) => ele.getId === uuid);
};
exports.getProcuraUser = getProcuraUser;
const adeletar = (id) => {
    const achoUser = exports.usersBD.filter((ele) => ele.getId !== id); //RETORNA O BANCO DE DADOS MENOS O USER COM O ID PASSADO
    const avalia = exports.usersBD.length > achoUser.length;
    exports.usersBD = achoUser;
    return avalia;
};
exports.adeletar = adeletar;
const update = (id, name, cpf, email, age) => {
    const achouUser = exports.usersBD.find((ele) => {
        return ele.getId === id;
    });
    if (!achouUser) {
        throw new Error('sem user mano');
    }
    if (name)
        achouUser.setName(name);
    if (age)
        achouUser.setAge(age);
    if (email)
        achouUser.setEmail(email);
    if (cpf)
        achouUser.setCpf(cpf);
    return achouUser;
};
exports.update = update;
const addTransactionsUser = (transa, use) => {
    use.setTransactions(transa);
    return use.getTransactions;
};
exports.addTransactionsUser = addTransactionsUser;
const deleteTransaction = (use, transaction) => {
    use.deleteTransactinUser(transaction);
};
exports.deleteTransaction = deleteTransaction;
