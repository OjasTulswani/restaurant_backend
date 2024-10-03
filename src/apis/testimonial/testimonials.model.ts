import mongoose, { Document, Schema } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  message: string;
}

const TestimonialSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const TestimonialModel = mongoose.model<ITestimonial>(
  "Testimonial",
  TestimonialSchema
);
