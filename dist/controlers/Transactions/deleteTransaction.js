"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransactions = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const deleteTransactions = (req, res) => {
    const { id, idTran } = req.params;
    const use = (0, usersBanco_1.getProcuraUser)(id);
    if (!use)
        return res.status(404).send({ message: 'Not found User' });
    const transaction = use.findTransaction(idTran);
    if (transaction < 0) {
        return res.status(404).send({ message: 'Not found transaction' });
    }
    (0, usersBanco_1.deleteTransaction)(use, idTran);
    return res
        .status(200)
        .json({
        message: 'Transaction deletada',
        transaction: use.getTransactions,
    });
};
exports.deleteTransactions = deleteTransactions;