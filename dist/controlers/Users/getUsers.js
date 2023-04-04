"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const usersBanco_1 = require("../../bd/usersBanco");
const getUsers = (_, res) => {
    return res.status(200).json(usersBanco_1.usersBD);
};
exports.getUsers = getUsers;
