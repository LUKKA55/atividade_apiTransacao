"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostraTudoTran = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const mostraTudoTran = (req, res) => {
    const id = req.params.id;
    const use = (0, usersBanco_1.getProcuraUser)(id);
    if (!use)
        return res.status(404).send({ message: 'Not found User' });
    const transactions = use.getTransactions;
    return res.status(200).json({ transactions });
};
exports.mostraTudoTran = mostraTudoTran;
