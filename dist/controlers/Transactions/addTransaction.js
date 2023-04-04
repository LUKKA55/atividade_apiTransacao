"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTransactions = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const Transaction_1 = require("../../models/Transaction");
const addTransactions = (req, res) => {
    const id = req.params.id;
    const use = (0, usersBanco_1.getProcuraUser)(id);
    if (!use)
        return res.status(404).send({ message: 'Not found User' });
    const { title, value, type } = req.body;
    const upperType = type.toUpperCase();
    if (!['ENTRADA', 'SAIDA'].includes(upperType))
        return res.status(404).send({ message: 'type incorreto' });
    const newTransaction = new Transaction_1.Transaction(title, value, upperType);
    const transactions = (0, usersBanco_1.addTransactionsUser)(newTransaction, use);
    return res.status(200).json({ newTransaction, use });
};
exports.addTransactions = addTransactions;
