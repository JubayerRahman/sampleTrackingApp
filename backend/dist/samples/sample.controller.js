"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleController = void 0;
const sample_service_1 = require("./sample.service");
const mongoose_1 = __importDefault(require("mongoose"));
const createaSample = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sample = req.body;
        console.log(sample);
        const result = yield sample_service_1.sampleService.createSample(sample);
        res.status(200).json({
            success: true,
            message: "Sample created Successfully",
            data: result
        });
    }
    catch (error) {
        res.json(error);
    }
});
const allSample = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield sample_service_1.sampleService.allteSample();
        res.status(200).json({
            success: true,
            message: "All Samples",
            data: result
        });
    }
    catch (error) {
        res.json(error);
    }
});
const onProcessItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield sample_service_1.sampleService.onProcessItems();
        res.status(200).json({
            success: true,
            message: "All Samples",
            data: result
        });
    }
    catch (error) {
        res.json(error);
    }
});
const updateSample = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
        const filter = { _id: new mongoose_1.default.Types.ObjectId(id) };
        const sample = req.body;
        console.log(sample);
        const result = yield sample_service_1.sampleService.updateSample(filter, sample);
        res.status(200).json({
            success: true,
            message: "Sample updated successfully",
            data: result
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.sampleController = {
    createaSample,
    allSample,
    onProcessItems,
    updateSample
};
