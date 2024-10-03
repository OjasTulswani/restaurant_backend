import express from 'express'
import { getTestimonials } from './testimonials.controller'

const testimonialRouter = express.Router();

testimonialRouter.get('/', getTestimonials)

export default testimonialRouter