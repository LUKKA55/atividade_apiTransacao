"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
const bodyValidator = (req, res, next) => {
    if (Object.values(req.body).some((ele) => !ele)) {
        return res.status(418).send({ message: 'escreve algum bagulho ae' });
    }
    next();
};
exports.bodyValidator = bodyValidator;
