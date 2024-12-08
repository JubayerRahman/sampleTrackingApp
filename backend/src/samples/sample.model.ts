import { model, Schema } from "mongoose";
import { sample } from "./sample.interfase";

const sampleSchema = new Schema<sample>({
    itemNo:{
        type: String,
    },
    size:{
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
        enum:["on progress" , "Complete"]
    },

})

export const SampleModel =  model<sample>("sample", sampleSchema)