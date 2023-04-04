"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserbyID = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const getUserbyID = (req, res) => {
    const iDe = req.params.id;
    if (!iDe.length)
        return res.status(400).json({ message: 'erro no dado' });
    const acho = (0, usersBanco_1.getProcuraUser)(iDe);
    if (acho == undefined)
        return res.status(404).json({ message: 'user não encontrado' });
    return res.status(200).json(acho);
};
exports.getUserbyID = getUserbyID;
