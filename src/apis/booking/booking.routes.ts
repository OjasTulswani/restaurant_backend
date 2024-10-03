import express from 'express'

import * as BookingController from "./booking.controller"

const bookingRouter = express.Router();

bookingRouter.post("/", BookingController.bookTable);

bookingRouter.patch('/cancel', BookingController.cancelBooking);

export default bookingRouter;