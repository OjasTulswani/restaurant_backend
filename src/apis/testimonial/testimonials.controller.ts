import { RequestHandler } from "express";
import { TestimonialModel } from "./testimonials.model";

export const getTestimonials : RequestHandler = async (req, res) => {
    try{
        const testimonials = await TestimonialModel.find();
        res.status(200).json(testimonials);
    }
    catch(err){
        res.status(500).send({
            message: "Error fetching testimonials", 
            err
        })
    }
}

