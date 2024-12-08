import { sample } from "./sample.interfase";
import { SampleModel } from "./sample.model";

const allteSample = async()=>{
    const result = await SampleModel.find()
    return result
}

const onProcessItems = async()=>{
    const result = await SampleModel.aggregate([
           {$match: {status: "on progress"}},
           {$count: "OnProcessSamples"}
    ])

    return result
}
const createSample = async(sample: sample)=>{
    const result = await SampleModel.create(sample)
    console.log(result);
    return result
}
const updateSample = async(filter: any, sample: sample)=>{
    const updatedSample = sample
    const result = await SampleModel.findByIdAndUpdate(filter, updatedSample, {
        new: true
    })
    return result
}

export const sampleService = {
    allteSample,
    createSample,
    onProcessItems,
    updateSample
}