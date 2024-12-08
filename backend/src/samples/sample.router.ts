import { Router } from "express";
import { sampleController } from "./sample.controller";
import { sampleService } from "./sample.service";

const router = Router()

router.get("/createSample", sampleController.allSample)
router.get("/createSample/onProcess", sampleController.onProcessItems)
router.post("/createSample", sampleController.createaSample)
router.put('/updateSample/:id', sampleController.updateSample)

export const sampleRoute = router