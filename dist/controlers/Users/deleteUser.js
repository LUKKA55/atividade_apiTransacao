"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const deleteUser = (req, res) => {
    const id = req.params.id;
    if (!id.length)
        return res.status(400).json({ message: 'erro no dado' });
    const deletar = (0, usersBanco_1.adeletar)(id);
    return deletar
        ? res.status(200).json({ message: 'user deletado' })
        : res.status(404).json({ message: 'erro no dado' });
};
exports.deleteUser = deleteUser;
