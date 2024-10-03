import mongoose, { Model, Schema } from "mongoose";

export interface Booking {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  personNumber: number;
  status: string;
}

const bookingSchema = new Schema<Booking>({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 15,
    validate: {
      validator: function (v: string) {
        return /^(\+?\d{1, 3})?\d+$/.test(v);
      },
    },
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  personNumber: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 20,
  },
  status: {
    type: String,
    default: "pendeing",
    enum: ["pendeing", "approved", "cancelled"],
  },
});

const BookingModel: Model<Booking> = mongoose.model("Booking", bookingSchema);

export default BookingModel;
