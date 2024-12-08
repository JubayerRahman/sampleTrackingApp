"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleModel = void 0;
const mongoose_1 = require("mongoose");
const sampleSchema = new mongoose_1.Schema({
    itemNo: {
        type: String,
    },
    size: {
        type: String,
    },
    image: {
        type: String,
    },
    section: {
        type: String,
    },
    remarks: {
        type: String,
    },
    price: {
        type: String,
    },
    date: {
        type: String,
    },
    status: {
        type: String,
        enum: ["on progress", "Complete"]
    },
});
exports.SampleModel = (0, mongoose_1.model)("sample", sampleSchema);
