"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUserMiddleware = void 0;
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
const docs_validator_br_1 = require("docs-validator-br");
const validationUserMiddleware = (req, res, next) => {
    const { name, cpf, email } = req.body;
    if (name) {
        if (name.split(' ').length < 2) {
            return res
                .status(400)
                .json({ message: `Precisa ter pelo menos um sobrenome` });
        }
    }
    if (cpf) {
        if (!cpf_cnpj_validator_1.cpf.isValid(cpf)) {
            return res.status(400).json({ message: `CPF inválido` });
        }
    }
    if (email) {
        if (!(0, docs_validator_br_1.isValidEmail)(email)) {
            return res.status(400).json({ message: `E-mail inválido` });
        }
    }
    next();
};
exports.validationUserMiddleware = validationUserMiddleware;
