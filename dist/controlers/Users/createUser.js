"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const createUser = (req, res) => {
    const { name, cpf, age, email } = req.body;
    const mostraCreate = (0, usersBanco_1.aacreateUser)(name, cpf, email, age);
    return res.status(200).json(mostraCreate);
};
exports.createUser = createUser;
