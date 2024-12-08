import { RequestHandler } from "express";
import { sampleService } from "./sample.service";
import mongoose from "mongoose";

const createaSample: RequestHandler = async(req, res)=>{
    try {
        const sample = req.body
        console.log(sample);
        const result = await sampleService.createSample(sample)
        res.status(200).json({
            success: true,
            message: "Sample created Successfully",
            data: result
        })
    } catch (error) {
        res.json(error)        
    }
} 
const allSample: RequestHandler = async(req, res)=>{
    try {
        const result = await sampleService.allteSample()
        res.status(200).json({
            success: true,
            message: "All Samples",
            data: result
        })
    } catch (error) {
        res.json(error)        
    }
} 
const onProcessItems: RequestHandler = async(req, res)=>{
    try {
        const result = await sampleService.onProcessItems()
        res.status(200).json({
            success: true,
            message: "All Samples",
            data: result
        })
    } catch (error) {
        res.json(error)        
    }
} 

const updateSample: RequestHandler = async(req, res)=>{
    try {
        const id = req.params?.id
        const filter = {_id: new mongoose.Types.ObjectId(id)}
        const sample = req.body
        console.log(sample);
        const result = await sampleService.updateSample(filter, sample)
        res.status(200).json({
            success: true,
            message: "Sample updated successfully",
            data: result
         })
    } catch (error) {
        res.json(error)
    }
}

export const sampleController = {
    createaSample,
    allSample,
    onProcessItems,
    updateSample
}