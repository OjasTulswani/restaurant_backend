import { RequestHandler } from "express";
import BookingModel from "./booking.model";

export const bookTable: RequestHandler = async (req, res) => {
  const { name, email, phone, date, time, personNumber } = req.body;

  const booking = new BookingModel({
    name,
    email,
    phone,
    date,
    time,
    personNumber,
  });

  try {
    await booking.save();

    res.status(201).send({
      message: "Booking created successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error creating booking", error: error });
  }
};

export const cancelBooking: RequestHandler = async (req, res) => {

  const { name, email, phone, date, time, personNumber } = req.body;

  try {
    const booking = await BookingModel.findOne({name, email, phone, date, time, personNumber, status : "pendeing"})

    if(!booking){
       res.status(404).json({ success: false, errorMsg: "Booking not found" });
    }
    if(booking){
      booking.status = "cancelled";
      await booking.save();
  
    }

    
    res.status(200).send({ message: "Booking cancelled successfully" });

  } catch (error) {

    res.status(500).send({ message: "Booking error", error: error });
    
  }
};
