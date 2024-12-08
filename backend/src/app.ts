import express, { Request, Response } from "express"
import cors from "cors"
import { sampleRoute } from "./samples/sample.router"
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async(req: Request, res: Response)=>{
    res.status(200).json({
        success: "true",
        message: "Sample Server"
    })
})

app.use("/api", sampleRoute)

export default app