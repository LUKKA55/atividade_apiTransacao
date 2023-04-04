"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, cpf, email, age } = req.body;
    if (!id)
        return res.status(400).json({ message: 'erro no dado' });
    const mandarUpdate = (0, usersBanco_1.update)(id, name, cpf, email, age);
    return res.status(200).json(mandarUpdate);
};
exports.updateUser = updateUser;
