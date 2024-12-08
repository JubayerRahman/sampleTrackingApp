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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleService = void 0;
const sample_model_1 = require("./sample.model");
const allteSample = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sample_model_1.SampleModel.find();
    return result;
});
const onProcessItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sample_model_1.SampleModel.aggregate([
        { $match: { status: "on progress" } },
        { $count: "OnProcessSamples" }
    ]);
    return result;
});
const createSample = (sample) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sample_model_1.SampleModel.create(sample);
    console.log(result);
    return result;
});
const updateSample = (filter, sample) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedSample = sample;
    const result = yield sample_model_1.SampleModel.findByIdAndUpdate(filter, updatedSample, {
        new: true
    });
    return result;
});
exports.sampleService = {
    allteSample,
    createSample,
    onProcessItems,
    updateSample
};
