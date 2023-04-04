"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTransactions = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const updateTransactions = (req, res) => {
    const { id, idTran } = req.params;
    const use = (0, usersBanco_1.getProcuraUser)(id);
    if (!use)
        return res.status(404).send({ message: 'Not found User' });
    const { title, value, type } = req.body;
    const upperType = type.toUpperCase();
    const transaction = use.findTransaction(idTran);
    if (transaction < 0) {
        return res.status(404).send({ message: 'Not found transaction' });
    }
    const tempTransaction = use.getTransactions[transaction];
    if (type) {
        if (!['ENTRADA', 'SAIDA'].includes(upperType)) {
            return res.status(404).send({ message: 'type incorreto' });
        }
        tempTransaction.type = type;
    }
    if (title) {
        tempTransaction.title = title;
    }
    if (value) {
        tempTransaction.value = value;
    }
    use.setTransaction(transaction, 1, tempTransaction);
    return res.status(200).json({
        udateTransaction: use.getTransactions[transaction],
        transactions: use.getTransactions,
    });
};
exports.updateTransactions = updateTransactions;
