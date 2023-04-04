"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const uuid_1 = require("uuid");
class Transaction {
    constructor(title, value, type) {
        this.title = title;
        this.value = value;
        this.type = type;
        this.id = (0, uuid_1.v4)();
        this.title = title;
        this.value = value;
        this.type = type;
    }
}
exports.Transaction = Transaction;
