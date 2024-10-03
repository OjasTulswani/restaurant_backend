import express, { Express } from "express";
import morgan from "morgan"
import cors from "cors"
import {bookingRouter, testimonialRouter, emailRouter} from './apis'

const app : Express = express()

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

//Routes

app.use("/api/booking", bookingRouter);
app.use("/api/testimonials", testimonialRouter);
app.use("/api/email", emailRouter)

export default app;